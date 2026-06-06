import { type TagScores } from "../data/questions";
import { rankTags, type RankedTag } from "./scoring";

export type PersonalityKey =
  | "earth_online_upgrader"
  | "human_observer"
  | "spiritual_wanderer"
  | "emotion_archaeologist"
  | "aesthetic_collector"
  | "freedom_experimenter"
  | "steady_builder"
  | "era_fomo";

export type DimensionKey = "D1" | "D2" | "D3" | "D4";

export type DimensionSide = "A" | "B" | "neutral";

export type DimensionScore = {
  key: DimensionKey;
  aLabel: string;
  bLabel: string;
  aScore: number;
  bScore: number;
  tendency: DimensionSide;
};

export type PersonalityResult = {
  primary_personality: PersonalityKey;
  secondary_personality: PersonalityKey | null;
  personality_scores: Record<PersonalityKey, number>;
  dimension_scores: Record<DimensionKey, DimensionScore>;
  top_tags: RankedTag[];
  reason: string;
};

export const personalityLabels: Record<PersonalityKey, string> = {
  earth_online_upgrader: "地球Online升级狂",
  human_observer: "人间观察员",
  spiritual_wanderer: "精神漫游者",
  emotion_archaeologist: "情绪考古学家",
  aesthetic_collector: "美学收藏家",
  freedom_experimenter: "自由实验家",
  steady_builder: "稳健建设者",
  era_fomo: "时代FOMO怪"
};

const personalityOrder: PersonalityKey[] = [
  "earth_online_upgrader",
  "human_observer",
  "spiritual_wanderer",
  "emotion_archaeologist",
  "aesthetic_collector",
  "freedom_experimenter",
  "steady_builder",
  "era_fomo"
];

function getTendency(aScore: number, bScore: number): DimensionSide {
  const diff = aScore - bScore;

  if (Math.abs(diff) <= 1) {
    return "neutral";
  }

  return diff > 0 ? "A" : "B";
}

export function calculateDimensionScores(tagScores: TagScores): Record<DimensionKey, DimensionScore> {
  return {
    D1: {
      key: "D1",
      aLabel: "成长导向",
      bLabel: "意义导向",
      aScore: tagScores.growth + tagScores.achievement,
      bScore: tagScores.meaning + tagScores.self_awareness,
      tendency: getTendency(
        tagScores.growth + tagScores.achievement,
        tagScores.meaning + tagScores.self_awareness
      )
    },
    D2: {
      key: "D2",
      aLabel: "世界观察",
      bLabel: "自我探索",
      aScore: tagScores.society + tagScores.future,
      bScore: tagScores.self_awareness + tagScores.relationship,
      tendency: getTendency(
        tagScores.society + tagScores.future,
        tagScores.self_awareness + tagScores.relationship
      )
    },
    D3: {
      key: "D3",
      aLabel: "建设秩序",
      bLabel: "创造突破",
      aScore: tagScores.stability + tagScores.wealth,
      bScore: tagScores.creation + tagScores.freedom,
      tendency: getTendency(
        tagScores.stability + tagScores.wealth,
        tagScores.creation + tagScores.freedom
      )
    },
    D4: {
      key: "D4",
      aLabel: "理性认知",
      bLabel: "感性体验",
      aScore: tagScores.growth + tagScores.society + tagScores.future,
      bScore: tagScores.aesthetics + tagScores.relationship + tagScores.meaning,
      tendency: getTendency(
        tagScores.growth + tagScores.society + tagScores.future,
        tagScores.aesthetics + tagScores.relationship + tagScores.meaning
      )
    }
  };
}

function dimensionBonus(
  dimensions: Record<DimensionKey, DimensionScore>,
  dimension: DimensionKey,
  side: Exclude<DimensionSide, "neutral">
): number {
  return dimensions[dimension].tendency === side ? 2 : 0;
}

export function calculateReadingPersonality(tagScores: TagScores): PersonalityResult {
  const dimensions = calculateDimensionScores(tagScores);
  const personalityScores: Record<PersonalityKey, number> = {
    earth_online_upgrader:
      tagScores.growth * 1.5 +
      tagScores.achievement * 1.3 +
      tagScores.future * 1.1 +
      dimensionBonus(dimensions, "D1", "A") +
      dimensionBonus(dimensions, "D4", "A"),
    human_observer:
      tagScores.society * 1.5 +
      tagScores.meaning * 1.2 +
      tagScores.future * 1.1 +
      dimensionBonus(dimensions, "D2", "A") +
      dimensionBonus(dimensions, "D4", "A"),
    spiritual_wanderer:
      tagScores.meaning * 1.5 +
      tagScores.self_awareness * 1.2 +
      dimensionBonus(dimensions, "D4", "B") +
      dimensionBonus(dimensions, "D1", "B"),
    emotion_archaeologist:
      tagScores.self_awareness * 1.5 +
      tagScores.relationship * 1.3 +
      dimensionBonus(dimensions, "D2", "B") +
      dimensionBonus(dimensions, "D4", "B"),
    aesthetic_collector:
      tagScores.aesthetics * 1.5 +
      tagScores.freedom * 1.1 +
      tagScores.meaning * 0.8 +
      dimensionBonus(dimensions, "D4", "B"),
    freedom_experimenter:
      tagScores.creation * 1.5 +
      tagScores.freedom * 1.4 +
      tagScores.future * 0.8 +
      dimensionBonus(dimensions, "D3", "B"),
    steady_builder:
      tagScores.stability * 1.5 +
      tagScores.wealth * 1.3 +
      tagScores.achievement * 0.9 +
      dimensionBonus(dimensions, "D3", "A"),
    era_fomo:
      tagScores.future * 1.5 +
      tagScores.creation * 1.1 +
      tagScores.society * 1.1 +
      dimensionBonus(dimensions, "D2", "A") +
      dimensionBonus(dimensions, "D4", "A")
  };

  const rankedPersonalities = personalityOrder
    .map((key) => ({ key, score: personalityScores[key] }))
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return personalityOrder.indexOf(left.key) - personalityOrder.indexOf(right.key);
    });

  const primary = rankedPersonalities[0];
  const secondary = rankedPersonalities[1];
  const secondaryPersonality =
    secondary && primary.score - secondary.score <= 2 ? secondary.key : null;
  const topTags = rankTags(tagScores).slice(0, 3);

  return {
    primary_personality: primary.key,
    secondary_personality: secondaryPersonality,
    personality_scores: personalityScores,
    dimension_scores: dimensions,
    top_tags: topTags,
    reason: `前三标签为 ${topTags.map((item) => item.tag).join("、")}；最高人格匹配分来自 ${personalityLabels[primary.key]}。`
  };
}
