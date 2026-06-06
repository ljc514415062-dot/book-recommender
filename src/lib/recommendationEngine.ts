import { bookDatabase, type Book } from "../data/books";
import { type TagKey } from "../data/questions";
import { type ChallengeKey } from "./lifeStageEngine";
import { type LifeStageKey } from "./lifeStageEngine";
import { type PersonalityKey } from "./personalityEngine";
import { type RankedTag } from "./scoring";

export type RecommendationInput = {
  primary_personality: PersonalityKey;
  secondary_personality?: PersonalityKey | null;
  primary_stage: LifeStageKey;
  secondary_stage?: LifeStageKey | null;
  current_challenge: ChallengeKey;
  secondary_challenge?: ChallengeKey | null;
  top_tags: RankedTag[] | TagKey[];
  book_database?: Book[];
  page?: number;
  page_size?: number;
};

export type RecommendedBook = Book & {
  book_score: number;
  matched_reason: string;
  why_now: string;
};

export type RecommendationResult = {
  candidate_pool: Book[];
  recommendations: RecommendedBook[];
};

function normalizeTopTags(topTags: RankedTag[] | TagKey[]): TagKey[] {
  return topTags.map((item) => (typeof item === "string" ? item : item.tag));
}

function includesAny<T extends string>(values: T[], targets: Array<T | null | undefined>): boolean {
  return targets.some((target) => target !== null && target !== undefined && values.includes(target));
}

function bookMatchesTopTags(book: Book, topTags: TagKey[]): boolean {
  return book.tags.some((tag) => topTags.includes(tag));
}

function addUniqueBooks(target: Book[], books: Book[]) {
  const existing = new Set(target.map((book) => book.title));

  for (const book of books) {
    if (!existing.has(book.title)) {
      target.push(book);
      existing.add(book.title);
    }
  }
}

export function scoreBook(book: Book, input: RecommendationInput): number {
  const topTags = normalizeTopTags(input.top_tags);
  const tagScore = book.tags.reduce((score, tag) => {
    return topTags.includes(tag) ? score + 1 : score;
  }, 0);

  return (
    (book.matched_personalities.includes(input.primary_personality) ? 4 : 0) +
    (input.secondary_personality &&
    book.matched_personalities.includes(input.secondary_personality)
      ? 2
      : 0) +
    (book.matched_stages.includes(input.primary_stage) ? 4 : 0) +
    (input.secondary_stage && book.matched_stages.includes(input.secondary_stage) ? 2 : 0) +
    (book.matched_challenges.includes(input.current_challenge) ? 5 : 0) +
    (input.secondary_challenge &&
    book.matched_challenges.includes(input.secondary_challenge)
      ? 2
      : 0) +
    tagScore +
    book.priority_score
  );
}

export function buildCandidatePool(input: RecommendationInput): Book[] {
  const books = input.book_database ?? bookDatabase;
  const topTags = normalizeTopTags(input.top_tags);
  const candidates: Book[] = [];

  addUniqueBooks(
    candidates,
    books.filter((book) => {
      return (
        book.matched_personalities.includes(input.primary_personality) &&
        book.matched_stages.includes(input.primary_stage)
      );
    })
  );

  if (candidates.length < 30) {
    addUniqueBooks(
      candidates,
      books.filter((book) => book.matched_challenges.includes(input.current_challenge))
    );
  }

  if (candidates.length < 30) {
    addUniqueBooks(
      candidates,
      books.filter((book) => {
        return (
          includesAny(book.matched_personalities, [
            input.primary_personality,
            input.secondary_personality
          ]) ||
          includesAny(book.matched_stages, [input.primary_stage, input.secondary_stage]) ||
          includesAny(book.matched_challenges, [
            input.current_challenge,
            input.secondary_challenge
          ]) ||
          bookMatchesTopTags(book, topTags)
        );
      })
    );
  }

  if (candidates.length < 30) {
    addUniqueBooks(candidates, books);
  }

  return candidates
    .map((book) => ({ book, score: scoreBook(book, input) }))
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return books.indexOf(left.book) - books.indexOf(right.book);
    })
    .map((item) => item.book);
}

export function getRecommendations(input: RecommendationInput): RecommendationResult {
  const pageSize = input.page_size ?? 6;
  const page = Math.max(0, input.page ?? 0);
  const candidatePool = buildCandidatePool(input);
  const scoredBooks = candidatePool.map((book) => {
    const bookScore = scoreBook(book, input);

    return {
      ...book,
      book_score: bookScore,
      matched_reason: book.reason,
      why_now: book.matched_challenges.includes(input.current_challenge)
        ? "它直接匹配你当前最需要处理的课题。"
        : "它能补足你当前阶段的阅读视角。"
    };
  });

  const start = scoredBooks.length > 0 ? (page * pageSize) % scoredBooks.length : 0;
  const recommendations = [...scoredBooks.slice(start), ...scoredBooks.slice(0, start)].slice(
    0,
    pageSize
  );

  return {
    candidate_pool: candidatePool,
    recommendations
  };
}
