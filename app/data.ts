export type PersonaKey = "career" | "aesthetic" | "inner" | "city";

export type Choice = {
  text: string;
  persona: PersonaKey;
};

export type Question = {
  id: number;
  title: string;
  choices: Choice[];
};

export type Book = {
  title: string;
  author: string;
  persona: PersonaKey;
  reason: string;
};

export const personaLabels: Record<PersonaKey, string> = {
  career: "现实进阶型读者",
  aesthetic: "审美生活型读者",
  inner: "内在探索型读者",
  city: "城市观察型读者"
};

export const personaDescriptions: Record<PersonaKey, string> = {
  career:
    "你更关心知识能否转化为判断力、执行力和更好的选择。适合读能帮你理解商业、组织、效率与长期主义的书。",
  aesthetic:
    "你在意生活质感，也愿意把阅读当成审美训练。适合读设计、艺术、日常观察和风格鲜明的作品。",
  inner:
    "你希望阅读能帮自己和情绪、关系、人生阶段重新对话。适合读心理、哲学、文学与自我理解相关的书。",
  city:
    "你对城市、阶层、消费、空间和社会变化敏感。适合读社会学、城市研究、非虚构和具有时代感的作品。"
};

export const questions: Question[] = [
  {
    id: 1,
    title: "周末下午，你更愿意把两个小时留给什么？",
    choices: [
      { text: "梳理工作计划，找一个能提升效率的方法", persona: "career" },
      { text: "去逛展、咖啡馆或家居店，看看新的风格", persona: "aesthetic" },
      { text: "一个人安静待着，读点能让心慢下来的文字", persona: "inner" },
      { text: "在城市里随便走走，观察街区和人群", persona: "city" }
    ]
  },
  {
    id: 2,
    title: "你买一本书时，最容易被什么打动？",
    choices: [
      { text: "它能解决我当下真实的问题", persona: "career" },
      { text: "装帧、语言和整体气质都很漂亮", persona: "aesthetic" },
      { text: "它准确说出了我最近的困惑", persona: "inner" },
      { text: "它解释了某种社会现象背后的逻辑", persona: "city" }
    ]
  },
  {
    id: 3,
    title: "你最想通过阅读获得哪种能力？",
    choices: [
      { text: "更清晰地做决策", persona: "career" },
      { text: "更敏锐地感受美和风格", persona: "aesthetic" },
      { text: "更稳定地理解自己", persona: "inner" },
      { text: "更立体地看懂时代变化", persona: "city" }
    ]
  },
  {
    id: 4,
    title: "朋友让你推荐一本书，你通常会先问什么？",
    choices: [
      { text: "你最近想提升哪方面？", persona: "career" },
      { text: "你喜欢什么样的文字和氛围？", persona: "aesthetic" },
      { text: "你最近过得怎么样？", persona: "inner" },
      { text: "你对什么社会话题感兴趣？", persona: "city" }
    ]
  },
  {
    id: 5,
    title: "你理想中的书架更像什么？",
    choices: [
      { text: "一个随时可查的工具箱", persona: "career" },
      { text: "一个有秩序、有留白的私人展柜", persona: "aesthetic" },
      { text: "一处能收纳情绪的房间", persona: "inner" },
      { text: "一张理解世界的地图", persona: "city" }
    ]
  },
  {
    id: 6,
    title: "当你读到一段好内容，最常做什么？",
    choices: [
      { text: "记下来，想办法用到工作或生活里", persona: "career" },
      { text: "反复品味它的句子和画面感", persona: "aesthetic" },
      { text: "停下来想想它为什么击中了我", persona: "inner" },
      { text: "把它和现实中的城市经验联系起来", persona: "city" }
    ]
  },
  {
    id: 7,
    title: "下面哪类标题最吸引你？",
    choices: [
      { text: "如何建立长期复利的人生系统", persona: "career" },
      { text: "日常生活中的审美训练", persona: "aesthetic" },
      { text: "如何与不确定的自己相处", persona: "inner" },
      { text: "城市更新背后的阶层流动", persona: "city" }
    ]
  },
  {
    id: 8,
    title: "你对“新中产生活”的第一反应是？",
    choices: [
      { text: "它是一套关于职业、资产和选择的策略", persona: "career" },
      { text: "它关乎品味、空间和日常仪式感", persona: "aesthetic" },
      { text: "它背后藏着焦虑和自我确认", persona: "inner" },
      { text: "它是城市结构和消费文化的缩影", persona: "city" }
    ]
  },
  {
    id: 9,
    title: "你更喜欢怎样的阅读节奏？",
    choices: [
      { text: "结构清楚，观点明确，能快速吸收", persona: "career" },
      { text: "不急，语言和细节值得慢慢看", persona: "aesthetic" },
      { text: "可以边读边写下自己的感受", persona: "inner" },
      { text: "信息密度高，能不断打开新视角", persona: "city" }
    ]
  },
  {
    id: 10,
    title: "如果只选一个阅读目标，你会选？",
    choices: [
      { text: "成为更可靠的行动者", persona: "career" },
      { text: "拥有更好的生活判断和审美", persona: "aesthetic" },
      { text: "和自己建立更诚实的关系", persona: "inner" },
      { text: "看见个人选择背后的社会纹理", persona: "city" }
    ]
  }
];

export const books: Book[] = [
  {
    title: "纳瓦尔宝典",
    author: "埃里克·乔根森",
    persona: "career",
    reason: "适合想把职业选择、财富观和长期思考整理成个人系统的读者。"
  },
  {
    title: "原则",
    author: "瑞·达利欧",
    persona: "career",
    reason: "它强调决策、复盘和组织运转，能给现实进阶型读者一套可执行的思考框架。"
  },
  {
    title: "置身事内",
    author: "兰小欢",
    persona: "career",
    reason: "用清晰方式解释中国经济与地方治理，帮助你把个人选择放回更大的现实结构里。"
  },
  {
    title: "设计中的设计",
    author: "原研哉",
    persona: "aesthetic",
    reason: "从日常物件进入设计思维，适合训练对留白、材料和生活细节的敏感度。"
  },
  {
    title: "阴翳礼赞",
    author: "谷崎润一郎",
    persona: "aesthetic",
    reason: "篇幅不长但风格鲜明，能让审美生活型读者重新理解光影、空间和东方美感。"
  },
  {
    title: "艺术的故事",
    author: "E.H.贡布里希",
    persona: "aesthetic",
    reason: "用亲切的叙述建立艺术史坐标，让看展、旅行和日常审美更有底气。"
  },
  {
    title: "蛤蟆先生去看心理医生",
    author: "罗伯特·戴博德",
    persona: "inner",
    reason: "用故事讲清心理咨询中的自我觉察，适合想温和理解情绪来源的读者。"
  },
  {
    title: "被讨厌的勇气",
    author: "岸见一郎、古贺史健",
    persona: "inner",
    reason: "围绕自我、关系和课题分离展开，适合重新梳理边界感与生活主动权。"
  },
  {
    title: "也许你该找个人聊聊",
    author: "洛莉·戈特利布",
    persona: "inner",
    reason: "兼具故事性和心理洞察，能帮助读者看见每个人都在经历的脆弱与转变。"
  },
  {
    title: "大国大城",
    author: "陆铭",
    persona: "city",
    reason: "讨论城市化、人口流动和公共政策，适合想理解城市机会结构的读者。"
  },
  {
    title: "东京本屋",
    author: "吉井忍",
    persona: "city",
    reason: "从书店切入城市文化与生活方式，对关注街区气质的人很友好。"
  },
  {
    title: "江城",
    author: "彼得·海斯勒",
    persona: "city",
    reason: "以细腻非虚构记录普通人的生活变化，适合观察城市与时代的人。"
  },
  {
    title: "工作、消费主义和新穷人",
    author: "齐格蒙特·鲍曼",
    persona: "city",
    reason: "能帮你理解消费社会如何塑造身份、焦虑和阶层想象。"
  }
];
