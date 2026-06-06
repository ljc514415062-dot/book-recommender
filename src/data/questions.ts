export const tagKeys = [
  "growth",
  "achievement",
  "meaning",
  "self_awareness",
  "aesthetics",
  "relationship",
  "society",
  "future",
  "creation",
  "stability",
  "wealth",
  "freedom"
] as const;

export type TagKey = (typeof tagKeys)[number];

export type TagScores = Record<TagKey, number>;

export type Gender =
  | "female"
  | "male"
  | "non_binary"
  | "prefer_not_to_say";

export type OccupationType =
  | "student"
  | "employee"
  | "manager"
  | "entrepreneur"
  | "freelancer"
  | "gap"
  | "public_service"
  | "professional"
  | "retired";

export type BasicProfile = {
  age?: number;
  gender?: Gender;
  occupation_type?: OccupationType;
};

export type ChoiceId = "A" | "B" | "C" | "D";

export type QuestionChoice = {
  id: ChoiceId;
  text: string;
  scores: Partial<TagScores>;
};

export type TestQuestion = {
  id: number;
  title: string;
  choices: QuestionChoice[];
};

export const questionBank: TestQuestion[] = [
  {
    id: 1,
    title: "最近最让你兴奋的事情是？",
    choices: [
      { id: "A", text: "学会一个新技能或知识", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "理解了一个以前没想明白的问题", scores: { meaning: 2, society: 1 } },
      { id: "C", text: "创造出属于自己的作品", scores: { creation: 2, freedom: 1 } },
      { id: "D", text: "把生活打理得更舒服和有品质", scores: { aesthetics: 2, stability: 1 } }
    ]
  },
  {
    id: 2,
    title: "如果突然拥有一年完全自由的时间，你最想做什么？",
    choices: [
      { id: "A", text: "系统学习一个新领域", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "长时间旅行和体验生活", scores: { freedom: 2, aesthetics: 1 } },
      { id: "C", text: "研究社会、历史或商业", scores: { society: 2, meaning: 1 } },
      { id: "D", text: "好好认识自己", scores: { self_awareness: 2, relationship: 1 } }
    ]
  },
  {
    id: 3,
    title: "你最近最常思考的问题是什么？",
    choices: [
      { id: "A", text: "如何变得更优秀", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "我真正想过什么样的人生", scores: { meaning: 2, self_awareness: 1 } },
      { id: "C", text: "世界未来会变成什么样", scores: { future: 2, society: 1 } },
      { id: "D", text: "如何创造属于自己的事业或作品", scores: { creation: 2, freedom: 1 } }
    ]
  },
  {
    id: 4,
    title: "朋友最可能如何评价你？",
    choices: [
      { id: "A", text: "上进", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "有思想", scores: { meaning: 2, society: 1 } },
      { id: "C", text: "有品位", scores: { aesthetics: 2, freedom: 1 } },
      { id: "D", text: "有主见", scores: { creation: 2, stability: 1 } }
    ]
  },
  {
    id: 5,
    title: "你更害怕什么？",
    choices: [
      { id: "A", text: "停滞不前", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "活得没有意义", scores: { meaning: 2, self_awareness: 1 } },
      { id: "C", text: "被束缚的人生", scores: { freedom: 2, creation: 1 } },
      { id: "D", text: "失去稳定和安全感", scores: { stability: 2, wealth: 1 } }
    ]
  },
  {
    id: 6,
    title: "看到一本好书时，你最期待获得什么？",
    choices: [
      { id: "A", text: "方法和认知", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "新的视角", scores: { society: 2, meaning: 1 } },
      { id: "C", text: "对自己的理解", scores: { self_awareness: 2, relationship: 1 } },
      { id: "D", text: "灵感和创造力", scores: { creation: 2, freedom: 1 } }
    ]
  },
  {
    id: 7,
    title: "如果只能订阅一种内容，你会选择？",
    choices: [
      { id: "A", text: "商业和成长", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "社会与趋势", scores: { society: 2, future: 1 } },
      { id: "C", text: "心理学和关系", scores: { self_awareness: 2, relationship: 1 } },
      { id: "D", text: "艺术与文化", scores: { aesthetics: 2, freedom: 1 } }
    ]
  },
  {
    id: 8,
    title: "你理想中的周末是什么样？",
    choices: [
      { id: "A", text: "学习和充电", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "看展、逛书店、喝咖啡", scores: { aesthetics: 2, meaning: 1 } },
      { id: "C", text: "与重要的人深度交流", scores: { relationship: 2, self_awareness: 1 } },
      { id: "D", text: "做一个属于自己的项目", scores: { creation: 2, freedom: 1 } }
    ]
  },
  {
    id: 9,
    title: "如果必须选择一个长期目标，你会选？",
    choices: [
      { id: "A", text: "成为行业专家", scores: { achievement: 2, growth: 1 } },
      { id: "B", text: "理解世界运行规律", scores: { society: 2, meaning: 1 } },
      { id: "C", text: "活出真实的自己", scores: { self_awareness: 2, freedom: 1 } },
      { id: "D", text: "建立稳定富足的人生", scores: { wealth: 2, stability: 1 } }
    ]
  },
  {
    id: 10,
    title: "你最容易被什么内容吸引？",
    choices: [
      { id: "A", text: "高手经验", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "深度洞察", scores: { meaning: 2, society: 1 } },
      { id: "C", text: "情感故事", scores: { relationship: 2, self_awareness: 1 } },
      { id: "D", text: "创意与未来", scores: { future: 2, creation: 1 } }
    ]
  },
  {
    id: 11,
    title: "对于 AI 时代，你的第一反应是？",
    choices: [
      { id: "A", text: "我要尽快掌握它", scores: { growth: 2, future: 1 } },
      { id: "B", text: "它会如何改变社会", scores: { society: 2, future: 1 } },
      { id: "C", text: "它会如何改变人类", scores: { meaning: 2, future: 1 } },
      { id: "D", text: "我想用它创造东西", scores: { creation: 2, future: 1 } }
    ]
  },
  {
    id: 12,
    title: "下面哪句话最像你？",
    choices: [
      { id: "A", text: "我想成为更厉害的人", scores: { growth: 2, achievement: 1 } },
      { id: "B", text: "我想理解这个世界", scores: { society: 2, meaning: 1 } },
      { id: "C", text: "我想找到真正的自己", scores: { self_awareness: 2, meaning: 1 } },
      { id: "D", text: "我想创造属于自己的人生", scores: { creation: 2, freedom: 1 } }
    ]
  }
];
