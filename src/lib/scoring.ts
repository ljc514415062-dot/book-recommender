import { questionBank, tagKeys, type ChoiceId, type TagKey, type TagScores, type TestQuestion } from "../data/questions";

export type AnswerMap = Record<number, ChoiceId>;

export type RankedTag = {
  tag: TagKey;
  score: number;
};

export type TagScoreResult = {
  tagScores: TagScores;
  topTags: RankedTag[];
  answeredQuestionIds: number[];
  missingQuestionIds: number[];
};

export function createEmptyTagScores(): TagScores {
  return tagKeys.reduce((scores, tag) => {
    scores[tag] = 0;
    return scores;
  }, {} as TagScores);
}

export function rankTags(tagScores: TagScores): RankedTag[] {
  return tagKeys
    .map((tag) => ({ tag, score: tagScores[tag] }))
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return tagKeys.indexOf(left.tag) - tagKeys.indexOf(right.tag);
    });
}

export function calculateTagScores(
  answers: AnswerMap,
  questions: TestQuestion[] = questionBank
): TagScoreResult {
  const tagScores = createEmptyTagScores();
  const answeredQuestionIds: number[] = [];
  const missingQuestionIds: number[] = [];

  for (const question of questions) {
    const answerId = answers[question.id];
    const choice = question.choices.find((item) => item.id === answerId);

    if (!choice) {
      missingQuestionIds.push(question.id);
      continue;
    }

    answeredQuestionIds.push(question.id);

    for (const tag of tagKeys) {
      tagScores[tag] += choice.scores[tag] ?? 0;
    }
  }

  return {
    tagScores,
    topTags: rankTags(tagScores).slice(0, 3),
    answeredQuestionIds,
    missingQuestionIds
  };
}

export function hasCompletedQuestionnaire(
  answers: AnswerMap,
  questions: TestQuestion[] = questionBank
): boolean {
  return calculateTagScores(answers, questions).missingQuestionIds.length === 0;
}
