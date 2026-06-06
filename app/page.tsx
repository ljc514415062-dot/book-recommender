"use client";

import { useMemo, useState } from "react";
import {
  questionBank,
  type BasicProfile,
  type ChoiceId,
  type Gender,
  type OccupationType
} from "../src/data/questions";
import { tagLabels } from "../src/data/tagLabels";
import {
  challengeLabels,
  lifeStageLabels,
  type ChallengeKey,
  type LifeStageKey
} from "../src/lib/lifeStageEngine";
import { calculateLifeStage } from "../src/lib/lifeStageEngine";
import {
  calculateReadingPersonality,
  personalityLabels,
  type PersonalityKey
} from "../src/lib/personalityEngine";
import {
  calculateTagScores,
  type AnswerMap
} from "../src/lib/scoring";
import { getRecommendations } from "../src/lib/recommendationEngine";

type ProfileForm = {
  age: string;
  gender: Gender | "";
  occupation_type: OccupationType | "";
};

const initialProfile: ProfileForm = {
  age: "",
  gender: "",
  occupation_type: ""
};

const genderOptions: Array<{ value: Gender; label: string }> = [
  { value: "female", label: "女性" },
  { value: "male", label: "男性" },
  { value: "non_binary", label: "非二元" },
  { value: "prefer_not_to_say", label: "暂不透露" }
];

const occupationOptions: Array<{ value: OccupationType; label: string }> = [
  { value: "student", label: "学生" },
  { value: "employee", label: "职员" },
  { value: "manager", label: "管理者" },
  { value: "entrepreneur", label: "创业者" },
  { value: "freelancer", label: "自由职业者" },
  { value: "gap", label: "待业Gap" },
  { value: "public_service", label: "公共服务" },
  { value: "professional", label: "专业人士" },
  { value: "retired", label: "退休" }
];

const difficultyLabels = {
  easy: "入门",
  medium: "中阶",
  hard: "高阶"
};

const stageInsights: Record<LifeStageKey, string> = {
  cognitive_upgrade:
    "此阶段的人通常会把注意力投向能力、判断力和长期竞争力，希望用更清晰的方法把自己向前推进一步。",
  meaning_search:
    "此阶段的人常常会重新追问：什么才是真正重要的事？你不是停下来，而是在给下一段生活寻找更稳的方向。",
  life_reconstruction:
    "此阶段的人往往正在整理旧路径与新可能，既想保留已有经验，也想为生活换一种更适合自己的结构。",
  creation_exploration:
    "此阶段的人不满足于只吸收内容，更想把想法变成作品、项目或新的行动方式。",
  world_observation:
    "此阶段的人会更关心时代、社会、商业和制度如何运转，也更想看清个人选择背后的外部结构。",
  stability_building:
    "此阶段的人开始重视秩序、安全感和长期价值，希望把生活经营成一个更可靠的系统。",
  lifestyle_aesthetics:
    "此阶段的人会更敏感地感受日常、空间、关系与审美，关心生活不只是有效，也要有质感。"
};

const stageDetails: Record<LifeStageKey, string[]> = {
  cognitive_upgrade: ["适合补充方法论、决策框架和可执行的成长路径。", "阅读重点可以放在：怎样把知识转化成稳定能力。"],
  meaning_search: ["适合慢一点读，给价值观、关系和自我感受留出空间。", "阅读重点可以放在：什么值得追求，什么可以放下。"],
  life_reconstruction: ["适合读能帮助你拆解旧惯性、看见新路径的书。", "阅读重点可以放在：如何把人生重新组织成更适合自己的样子。"],
  creation_exploration: ["适合读创造、产品、表达和创业相关内容。", "阅读重点可以放在：把想法从脑中带到现实里。"],
  world_observation: ["适合读社会、历史、经济和科技趋势。", "阅读重点可以放在：个人处境背后的时代结构。"],
  stability_building: ["适合读长期主义、财富、组织和家庭经营。", "阅读重点可以放在：如何建立可靠、可持续的生活系统。"],
  lifestyle_aesthetics: ["适合读艺术、设计、文化和生活方式。", "阅读重点可以放在：怎样重新训练感受力与日常秩序。"]
};

const personalityInsights: Record<PersonalityKey, string> = {
  earth_online_upgrader:
    "你倾向于用方法、框架和行动理解人生。适合读能提升判断力、职业能力与决策质量的书。",
  human_observer:
    "你倾向于把个人经验放进更大的社会和时代结构里理解。适合读社会、历史、经济与商业观察。",
  spiritual_wanderer:
    "你倾向于通过哲学、文学、人文与心理学视角理解人生，关心选择背后的意义和自我位置。",
  emotion_archaeologist:
    "你对情绪、关系和自我形成过程更敏感，适合读能帮助你温和回看内在模式的书。",
  aesthetic_collector:
    "你通过审美、文化和生活细节理解世界，适合读艺术、设计、城市文化与生活方式作品。",
  freedom_experimenter:
    "你更愿意探索新的路径，把想法转化为表达、作品或项目。适合读创造力、创业和产品相关的书。",
  steady_builder:
    "你重视长期秩序、财富认知和稳定系统，适合读投资、长期主义、组织管理与家庭经营相关内容。",
  era_fomo:
    "你对技术、产业和未来变化很敏感，适合读 AI、科技趋势、创新商业与复杂系统相关的书。"
};

const personalityDetails: Record<PersonalityKey, string[]> = {
  earth_online_upgrader: ["你会自然寻找结构、方法和可复用经验。", "读书对你来说，更像是在升级判断力和行动系统。"],
  human_observer: ["你不太满足于单一答案，更想知道事情背后的机制。", "读书对你来说，是把个人问题放回社会现场的一种方式。"],
  spiritual_wanderer: ["你对意义、孤独、自由和选择格外敏感。", "读书对你来说，是一次缓慢但诚实的自我对话。"],
  emotion_archaeologist: ["你会注意情绪背后的来处，也愿意回看关系里的自己。", "读书对你来说，是把内在经验一点点整理清楚。"],
  aesthetic_collector: ["你容易被语言、画面、空间和风格打动。", "读书对你来说，是训练品味，也是照看生活质感。"],
  freedom_experimenter: ["你对新路径、新作品和新身份保有好奇。", "读书对你来说，是点燃行动和创造欲的材料。"],
  steady_builder: ["你重视可持续的秩序，也在意长期选择的质量。", "读书对你来说，是给生活建立底盘和边界。"],
  era_fomo: ["你对变化很敏锐，也容易被未来感召。", "读书对你来说，是在快速变化中寻找判断坐标。"]
};

const personalityAvatars: Record<PersonalityKey, string> = {
  earth_online_upgrader: "↑",
  human_observer: "观",
  spiritual_wanderer: "思",
  emotion_archaeologist: "察",
  aesthetic_collector: "美",
  freedom_experimenter: "创",
  steady_builder: "稳",
  era_fomo: "新"
};

const challengeInsights: Record<ChallengeKey, string> = {
  career_development:
    "你此刻最需要的，可能是把成长焦虑变成更具体的能力建设和职业判断。",
  wealth_accumulation:
    "你此刻更需要建立长期财富观和安全感，让金钱成为选择权，而不是压力来源。",
  startup_creation:
    "你此刻适合把灵感往前推一步，让想法进入验证、表达和创造的过程。",
  self_identity:
    "你此刻更需要回答“我是谁、我想怎样生活”，而不是急着接受外部标准。",
  intimate_relationship:
    "你此刻适合把关系当作一面镜子，重新理解表达、边界、依恋和彼此的需要。",
  world_understanding:
    "你此刻更需要看懂世界正在如何运转，再决定自己要站在什么位置上行动。",
  life_quality:
    "你此刻适合把注意力放回生活本身，重新训练感受力、审美和日常秩序。"
};

const challengeDetails: Record<ChallengeKey, string[]> = {
  career_development: ["先读能让你更清楚地行动的书，再读打开格局的书。", "避免只追逐效率，真正重要的是形成自己的判断。"],
  wealth_accumulation: ["先建立金钱心理和长期纪律，再进入具体工具。", "适合把安全感、选择权和风险意识放在一起看。"],
  startup_creation: ["先读能帮助你验证想法的书，再读拓展视野的书。", "适合把灵感、产品、传播和商业模式连起来。"],
  self_identity: ["先允许问题存在，再慢慢寻找新的叙事。", "适合读哲学、心理和文学，不急着得到标准答案。"],
  intimate_relationship: ["先看见自己的表达方式，再理解关系中的互动模式。", "适合读温和但有结构的心理与沟通类作品。"],
  world_understanding: ["先建立宏观框架，再回到自己的位置。", "适合读社会、历史、经济和科技，它们会让现实更清晰。"],
  life_quality: ["先把感受力找回来，再整理日常里的秩序。", "适合读艺术、设计、生活方式和城市文化。"]
};

function toBasicProfile(profile: ProfileForm): BasicProfile {
  return {
    age: profile.age ? Number(profile.age) : undefined,
    gender: profile.gender || undefined,
    occupation_type: profile.occupation_type || undefined
  };
}

function formatTopTags(topTags: Array<{ tag: keyof typeof tagLabels }>) {
  return topTags.map((item) => tagLabels[item.tag]).join("、");
}

export default function Home() {
  const [profile, setProfile] = useState<ProfileForm>(initialProfile);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitted, setSubmitted] = useState(false);
  const [recommendationPage, setRecommendationPage] = useState(0);

  const answeredCount = Object.keys(answers).length;
  const profileComplete =
    Number(profile.age) > 0 && Boolean(profile.gender) && Boolean(profile.occupation_type);
  const canSubmit = profileComplete && answeredCount === questionBank.length;

  const tagResult = useMemo(() => calculateTagScores(answers), [answers]);
  const basicProfile = useMemo(() => toBasicProfile(profile), [profile]);
  const personalityResult = useMemo(
    () => calculateReadingPersonality(tagResult.tagScores),
    [tagResult.tagScores]
  );
  const lifeStageResult = useMemo(
    () => calculateLifeStage(tagResult.tagScores, basicProfile),
    [basicProfile, tagResult.tagScores]
  );
  const recommendationResult = useMemo(
    () =>
      getRecommendations({
        primary_personality: personalityResult.primary_personality,
        secondary_personality: personalityResult.secondary_personality,
        primary_stage: lifeStageResult.primary_stage,
        secondary_stage: lifeStageResult.secondary_stage,
        current_challenge: lifeStageResult.current_challenge,
        secondary_challenge: lifeStageResult.secondary_challenge,
        top_tags: tagResult.topTags,
        page: recommendationPage,
        page_size: 6
      }),
    [lifeStageResult, personalityResult, recommendationPage, tagResult.topTags]
  );
  const topTagCopy = formatTopTags(tagResult.topTags);

  function handleAnswer(questionId: number, choiceId: ChoiceId) {
    setAnswers((current) => ({ ...current, [questionId]: choiceId }));
  }

  function handleSubmit() {
    if (canSubmit) {
      setRecommendationPage(0);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleRestart() {
    setProfile(initialProfile);
    setAnswers({});
    setRecommendationPage(0);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <main className="page">
        <aside className="corner-note">按照即时反应填写哦！</aside>
        <section className="result-hero">
          <p className="eyebrow">你的阅读画像</p>
          <div className="hero-title-row">
            <span className="personality-avatar" aria-hidden="true">
              {personalityAvatars[personalityResult.primary_personality]}
            </span>
            <h1>{personalityLabels[personalityResult.primary_personality]}</h1>
          </div>
          <p className="result-copy">
            你的关注点主要集中在：{topTagCopy}。你最近更倾向于通过阅读
            整理此刻的自己，也重新校准自己和世界之间的关系。
          </p>
          <div className="hero-actions">
            <button className="secondary-button" onClick={handleRestart}>
              重新测试
            </button>
          </div>
        </section>

        <section className="result-grid" aria-label="核心结果">
          <article className="result-card primary">
            <p className="card-kicker">当前人生阶段</p>
            <h2>{lifeStageLabels[lifeStageResult.primary_stage]}</h2>
            <p>{stageInsights[lifeStageResult.primary_stage]}</p>
            <ul className="result-detail">
              {stageDetails[lifeStageResult.primary_stage].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="result-card">
            <p className="card-kicker">当前课题</p>
            <h2>{challengeLabels[lifeStageResult.current_challenge]}</h2>
            <p>{challengeInsights[lifeStageResult.current_challenge]}</p>
            <ul className="result-detail">
              {challengeDetails[lifeStageResult.current_challenge].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="result-card">
            <p className="card-kicker">阅读人格</p>
            <h2>{personalityLabels[personalityResult.primary_personality]}</h2>
            <p>{personalityInsights[personalityResult.primary_personality]}</p>
            <ul className="result-detail">
              {personalityDetails[personalityResult.primary_personality].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="tags-panel" aria-labelledby="tag-heading">
          <div className="section-heading">
            <p className="eyebrow">Top 3 Tags</p>
            <h2 id="tag-heading">最活跃的三个阅读标签</h2>
          </div>
          <div className="tag-list">
            {tagResult.topTags.map((item) => (
              <div className="tag-pill" key={item.tag}>
                <span>{tagLabels[item.tag]}</span>
                <strong>{item.score}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="recommendations" aria-labelledby="book-heading">
          <div className="section-heading book-heading">
            <div>
              <p className="eyebrow">为你推荐</p>
              <h2 id="book-heading">6 本适合现在读的书</h2>
            </div>
            <button
              className="text-button"
              onClick={() => setRecommendationPage((current) => current + 1)}
              type="button"
            >
              换一组书
            </button>
          </div>

          <div className="book-list">
            {recommendationResult.recommendations.map((book, index) => (
              <article className="book-card" key={`${recommendationPage}-${book.title}`}>
                <div className="book-cover" aria-hidden="true">
                  <span className="book-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="cover-mark">READ</span>
                </div>
                <div>
                  <h3>{book.title}</h3>
                  <p className="author">
                    {book.author} · {book.category} · {difficultyLabels[book.difficulty]}
                  </p>
                  <p>{book.matched_reason}</p>
                  <p className="why-now">{book.why_now}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <aside className="corner-note">按照即时反应填写哦！</aside>
      <section className="intro">
        <p className="eyebrow">城市新中产阅读品味测试</p>
        <h1>用 12 道题，找到此刻更适合你的书</h1>
        <p>
          这不是传统图书分类器。它会根据你的生活状态、价值偏好和阅读期待，
          生成当前人生阶段、阅读人格与一组更贴近此刻的书。
        </p>
      </section>

      <form className="quiz" onSubmit={(event) => event.preventDefault()}>
        <section className="profile-panel" aria-labelledby="profile-heading">
          <div>
            <p className="eyebrow">基础信息</p>
            <h2 id="profile-heading">用于修正人生阶段</h2>
            <p>
              性别只作为资料收集，不参与评分；年龄与职业仅用于人生阶段修正。
            </p>
          </div>
          <div className="profile-grid">
            <label className="field">
              <span>年龄</span>
              <input
                inputMode="numeric"
                min="1"
                onChange={(event) =>
                  setProfile((current) => ({ ...current, age: event.target.value }))
                }
                placeholder="例如 32"
                type="number"
                value={profile.age}
              />
            </label>
            <label className="field">
              <span>性别</span>
              <select
                onChange={(event) =>
                  setProfile((current) => ({
                    ...current,
                    gender: event.target.value as Gender | ""
                  }))
                }
                value={profile.gender}
              >
                <option value="">请选择</option>
                {genderOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>职业类型</span>
              <select
                onChange={(event) =>
                  setProfile((current) => ({
                    ...current,
                    occupation_type: event.target.value as OccupationType | ""
                  }))
                }
                value={profile.occupation_type}
              >
                <option value="">请选择</option>
                {occupationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="progress-panel" aria-label={`已完成 ${answeredCount} 题`}>
          <div className="progress-copy">
            <span>问卷进度</span>
            <strong>
              {answeredCount}/{questionBank.length}
            </strong>
          </div>
          <div className="progress">
            <span style={{ width: `${(answeredCount / questionBank.length) * 100}%` }} />
          </div>
        </section>

        {questionBank.map((question) => (
          <fieldset className="question" key={question.id}>
            <legend>
              <span>{question.id}</span>
              {question.title}
            </legend>
            <div className="choices">
              {question.choices.map((choice) => {
                const choiceId = `q${question.id}-${choice.id}`;
                return (
                  <label
                    className={
                      answers[question.id] === choice.id
                        ? "choice selected"
                        : "choice"
                    }
                    htmlFor={choiceId}
                    key={choiceId}
                  >
                    <input
                      checked={answers[question.id] === choice.id}
                      id={choiceId}
                      name={`question-${question.id}`}
                      onChange={() => handleAnswer(question.id, choice.id)}
                      type="radio"
                    />
                    <span>{choice.text}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}

        <div className="submit-bar">
          <button
            className="primary-button"
            disabled={!canSubmit}
            onClick={handleSubmit}
            type="button"
          >
            生成阅读画像
          </button>
          {!canSubmit && (
            <p>
              {!profileComplete
                ? "请先补全基础信息"
                : `还差 ${questionBank.length - answeredCount} 题`}
            </p>
          )}
        </div>
      </form>
    </main>
  );
}
