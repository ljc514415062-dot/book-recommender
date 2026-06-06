import { type BasicProfile, type OccupationType, type TagKey, type TagScores } from "../data/questions";
import { rankTags, type RankedTag } from "./scoring";

export type LifeStageKey =
  | "cognitive_upgrade"
  | "meaning_search"
  | "life_reconstruction"
  | "creation_exploration"
  | "world_observation"
  | "stability_building"
  | "lifestyle_aesthetics";

export type ChallengeKey =
  | "career_development"
  | "wealth_accumulation"
  | "startup_creation"
  | "self_identity"
  | "intimate_relationship"
  | "world_understanding"
  | "life_quality";

export type LifeStageResult = {
  primary_stage: LifeStageKey;
  secondary_stage: LifeStageKey | null;
  stage_scores: Record<LifeStageKey, number>;
  current_challenge: ChallengeKey;
  secondary_challenge: ChallengeKey | null;
  challenge_scores: Record<ChallengeKey, number>;
  top_tags: RankedTag[];
  reason: string;
};

export const lifeStageLabels: Record<LifeStageKey, string> = {
  cognitive_upgrade: "认知升级期",
  meaning_search: "意义寻找期",
  life_reconstruction: "人生重构期",
  creation_exploration: "创造探索期",
  world_observation: "世界观察期",
  stability_building: "稳定建设期",
  lifestyle_aesthetics: "生活美学期"
};

export const challengeLabels: Record<ChallengeKey, string> = {
  career_development: "职业发展",
  wealth_accumulation: "财富积累",
  startup_creation: "创业创造",
  self_identity: "自我认同",
  intimate_relationship: "亲密关系",
  world_understanding: "世界理解",
  life_quality: "生活品质"
};

const lifeStageOrder: LifeStageKey[] = [
  "cognitive_upgrade",
  "meaning_search",
  "life_reconstruction",
  "creation_exploration",
  "world_observation",
  "stability_building",
  "lifestyle_aesthetics"
];

const challengeOrder: ChallengeKey[] = [
  "career_development",
  "wealth_accumulation",
  "startup_creation",
  "self_identity",
  "intimate_relationship",
  "world_understanding",
  "life_quality"
];

function scoreCoreTags(topTags: RankedTag[], coreTags: TagKey[]): number {
  return topTags.reduce((score, item) => {
    return coreTags.includes(item.tag) ? score + 3 : score;
  }, 0);
}

function isOccupation(profile: BasicProfile, occupations: OccupationType[]): boolean {
  return profile.occupation_type ? occupations.includes(profile.occupation_type) : false;
}

function hasCloseTopTags(topTags: RankedTag[]): boolean {
  if (topTags.length < 3 || topTags[0].score <= 0) {
    return false;
  }

  return (topTags[0].score - topTags[2].score) / topTags[0].score < 0.15;
}

function rankRecord<T extends string>(scores: Record<T, number>, order: T[]) {
  return order
    .map((key) => ({ key, score: scores[key] }))
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return order.indexOf(left.key) - order.indexOf(right.key);
    });
}

export function calculateLifeStage(
  tagScores: TagScores,
  profile: BasicProfile = {}
): LifeStageResult {
  const topTags = rankTags(tagScores).slice(0, 3);
  const age = profile.age;

  const stageScores: Record<LifeStageKey, number> = {
    cognitive_upgrade:
      scoreCoreTags(topTags, ["growth", "achievement", "future"]) +
      (age !== undefined && age <= 35 ? 2 : 0) +
      (isOccupation(profile, ["employee", "manager", "professional"]) ? 2 : 0),
    meaning_search:
      scoreCoreTags(topTags, ["meaning", "self_awareness"]) +
      (age !== undefined && age >= 28 ? 1 : 0) +
      (age !== undefined && age >= 35 ? 1 : 0),
    life_reconstruction:
      scoreCoreTags(topTags, ["growth", "meaning", "freedom", "creation"]) +
      (hasCloseTopTags(topTags) ? 2 : 0) +
      (age !== undefined && age >= 30 && age <= 45 ? 2 : 0) +
      (isOccupation(profile, ["entrepreneur", "freelancer"]) ? 2 : 0),
    creation_exploration:
      scoreCoreTags(topTags, ["creation", "freedom", "future"]) +
      (isOccupation(profile, ["entrepreneur", "freelancer"]) ? 2 : 0) +
      (isOccupation(profile, ["student"]) ? 1 : 0),
    world_observation:
      scoreCoreTags(topTags, ["society", "future", "meaning"]) +
      (isOccupation(profile, ["professional", "manager"]) ? 2 : 0),
    stability_building:
      scoreCoreTags(topTags, ["stability", "wealth", "relationship"]) +
      (age !== undefined && age >= 35 ? 2 : 0) +
      (age !== undefined && age >= 45 ? 1 : 0),
    lifestyle_aesthetics:
      scoreCoreTags(topTags, ["aesthetics", "relationship", "self_awareness"]) +
      (age !== undefined && age >= 30 ? 1 : 0)
  };

  const challengeScores: Record<ChallengeKey, number> = {
    career_development: tagScores.growth + tagScores.achievement,
    wealth_accumulation: tagScores.wealth + tagScores.stability,
    startup_creation: tagScores.creation + tagScores.freedom + tagScores.future * 0.5,
    self_identity: tagScores.meaning + tagScores.self_awareness,
    intimate_relationship: tagScores.relationship + tagScores.self_awareness * 0.5,
    world_understanding: tagScores.society + tagScores.future + tagScores.meaning * 0.5,
    life_quality:
      tagScores.aesthetics + tagScores.relationship * 0.5 + tagScores.freedom * 0.5
  };

  const rankedStages = rankRecord(stageScores, lifeStageOrder);
  const rankedChallenges = rankRecord(challengeScores, challengeOrder);
  const primaryStage = rankedStages[0];
  const secondaryStage = rankedStages[1];
  const primaryChallenge = rankedChallenges[0];
  const secondaryChallenge = rankedChallenges[1];

  return {
    primary_stage: primaryStage.key,
    secondary_stage:
      secondaryStage && primaryStage.score - secondaryStage.score <= 2
        ? secondaryStage.key
        : null,
    stage_scores: stageScores,
    current_challenge: primaryChallenge.key,
    secondary_challenge:
      secondaryChallenge && primaryChallenge.score - secondaryChallenge.score <= 2
        ? secondaryChallenge.key
        : null,
    challenge_scores: challengeScores,
    top_tags: topTags,
    reason: `前三标签为 ${topTags.map((item) => item.tag).join("、")}；年龄与职业只作为人生阶段修正，性别不参与评分。`
  };
}
