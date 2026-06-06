import { type TagKey } from "./questions";
import { type ChallengeKey, type LifeStageKey } from "../lib/lifeStageEngine";
import { type PersonalityKey } from "../lib/personalityEngine";

export type BookDifficulty = "easy" | "medium" | "hard";

export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  tags: TagKey[];
  matched_personalities: PersonalityKey[];
  matched_stages: LifeStageKey[];
  matched_challenges: ChallengeKey[];
  difficulty: BookDifficulty;
  reason: string;
  priority_score: number;
};

export const bookDatabase: Book[] = [
  {
    "id": "BK001",
    "title": "《纳瓦尔宝典》",
    "author": "埃里克·乔根森",
    "category": "商业/人生策略",
    "tags": [
      "growth",
      "achievement",
      "wealth",
      "freedom"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "steady_builder"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "career_development",
      "wealth_accumulation"
    ],
    "difficulty": "easy",
    "reason": "适合用更少噪音重新理解财富、判断力与人生杠杆。",
    "priority_score": 0
  },
  {
    "id": "BK002",
    "title": "《原则》",
    "author": "瑞·达利欧",
    "category": "商业/管理",
    "tags": [
      "growth",
      "achievement",
      "stability"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "steady_builder"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "stability_building"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "medium",
    "reason": "适合建立决策、复盘和组织协作的系统化框架。",
    "priority_score": 0
  },
  {
    "id": "BK003",
    "title": "《穷查理宝典》",
    "author": "彼得·考夫曼 编",
    "category": "商业/投资",
    "tags": [
      "growth",
      "achievement",
      "wealth"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "steady_builder"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "stability_building"
    ],
    "matched_challenges": [
      "career_development",
      "wealth_accumulation"
    ],
    "difficulty": "medium",
    "reason": "适合训练跨学科思维和长期主义判断。",
    "priority_score": 0
  },
  {
    "id": "BK004",
    "title": "《金钱心理学》",
    "author": "摩根·豪泽尔",
    "category": "财富/心理",
    "tags": [
      "wealth",
      "stability",
      "self_awareness"
    ],
    "matched_personalities": [
      "steady_builder",
      "human_observer"
    ],
    "matched_stages": [
      "stability_building",
      "world_observation"
    ],
    "matched_challenges": [
      "wealth_accumulation"
    ],
    "difficulty": "easy",
    "reason": "适合理解财富行为背后的心理偏差与长期纪律。",
    "priority_score": 0
  },
  {
    "id": "BK005",
    "title": "《思考，快与慢》",
    "author": "丹尼尔·卡尼曼",
    "category": "心理/决策",
    "tags": [
      "growth",
      "society",
      "self_awareness"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "human_observer"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "world_observation"
    ],
    "matched_challenges": [
      "career_development",
      "world_understanding"
    ],
    "difficulty": "hard",
    "reason": "适合系统理解人类判断偏差与决策机制。",
    "priority_score": 0
  },
  {
    "id": "BK006",
    "title": "《清单革命》",
    "author": "阿图·葛文德",
    "category": "方法/管理",
    "tags": [
      "growth",
      "stability"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "steady_builder"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "stability_building"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合把复杂工作转化为可执行、可检查的流程。",
    "priority_score": 0
  },
  {
    "id": "BK007",
    "title": "《刻意练习》",
    "author": "安德斯·艾利克森, 罗伯特·普尔",
    "category": "成长/学习",
    "tags": [
      "growth",
      "achievement"
    ],
    "matched_personalities": [
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合希望把学习从鸡血变成训练系统的人。",
    "priority_score": 0
  },
  {
    "id": "BK008",
    "title": "《精进》",
    "author": "采铜",
    "category": "成长/认知",
    "tags": [
      "growth",
      "achievement"
    ],
    "matched_personalities": [
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合中文语境下建立个人成长的基本方法论。",
    "priority_score": 0
  },
  {
    "id": "BK009",
    "title": "《把时间当作朋友》",
    "author": "李笑来",
    "category": "成长/时间管理",
    "tags": [
      "growth",
      "stability"
    ],
    "matched_personalities": [
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合重建时间观、学习观和长期积累意识。",
    "priority_score": 0
  },
  {
    "id": "BK010",
    "title": "《高效能人士的七个习惯》",
    "author": "史蒂芬·柯维",
    "category": "成长/管理",
    "tags": [
      "growth",
      "stability",
      "relationship"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "steady_builder"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "stability_building"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合建立个人管理与协作的底层习惯。",
    "priority_score": 0
  },
  {
    "id": "BK011",
    "title": "《置身事内》",
    "author": "兰小欢",
    "category": "经济/中国",
    "tags": [
      "society",
      "wealth",
      "stability"
    ],
    "matched_personalities": [
      "human_observer",
      "steady_builder"
    ],
    "matched_stages": [
      "world_observation",
      "stability_building"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合理解中国地方政府、财政和经济运行机制。",
    "priority_score": 0
  },
  {
    "id": "BK012",
    "title": "《县中的孩子》",
    "author": "林小英",
    "category": "社会/教育",
    "tags": [
      "society",
      "relationship",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合通过教育切口理解流动、阶层与县域社会。",
    "priority_score": 0
  },
  {
    "id": "BK013",
    "title": "《乡土中国》",
    "author": "费孝通",
    "category": "社会学",
    "tags": [
      "society",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合理解中国社会关系结构的经典入口。",
    "priority_score": 0
  },
  {
    "id": "BK014",
    "title": "《江村经济》",
    "author": "费孝通",
    "category": "社会学/人类学",
    "tags": [
      "society",
      "stability"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合从微观村庄进入中国社会经济结构。",
    "priority_score": 0
  },
  {
    "id": "BK015",
    "title": "《社会学的想象力》",
    "author": "C. 赖特·米尔斯",
    "category": "社会学",
    "tags": [
      "society",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "world_observation",
      "meaning_search"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合把个人困境放进社会结构中重新理解。",
    "priority_score": 0
  },
  {
    "id": "BK016",
    "title": "《枪炮、病菌与钢铁》",
    "author": "贾雷德·戴蒙德",
    "category": "历史/社会",
    "tags": [
      "society",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合理解地理、技术与历史路径如何塑造文明差异。",
    "priority_score": 0
  },
  {
    "id": "BK017",
    "title": "《人类简史》",
    "author": "尤瓦尔·赫拉利",
    "category": "历史/思想",
    "tags": [
      "society",
      "future",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer",
      "era_fomo"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合用宏观叙事理解人类协作与现代社会。",
    "priority_score": 0
  },
  {
    "id": "BK018",
    "title": "《今日简史》",
    "author": "尤瓦尔·赫拉利",
    "category": "未来/社会",
    "tags": [
      "future",
      "society",
      "meaning"
    ],
    "matched_personalities": [
      "era_fomo",
      "human_observer"
    ],
    "matched_stages": [
      "world_observation",
      "creation_exploration"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合思考技术、政治与个人选择在未来的关系。",
    "priority_score": 0
  },
  {
    "id": "BK019",
    "title": "《21世纪资本论》",
    "author": "托马斯·皮凯蒂",
    "category": "经济/不平等",
    "tags": [
      "society",
      "wealth"
    ],
    "matched_personalities": [
      "human_observer",
      "steady_builder"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding",
      "wealth_accumulation"
    ],
    "difficulty": "hard",
    "reason": "适合深入理解财富分配、资本回报与不平等。",
    "priority_score": 0
  },
  {
    "id": "BK020",
    "title": "《大国大城》",
    "author": "陆铭",
    "category": "城市/经济",
    "tags": [
      "society",
      "wealth"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合理解城市化、人口流动和区域发展。",
    "priority_score": 0
  },
  {
    "id": "BK021",
    "title": "《沉思录》",
    "author": "马可·奥勒留",
    "category": "哲学",
    "tags": [
      "meaning",
      "self_awareness",
      "stability"
    ],
    "matched_personalities": [
      "spiritual_wanderer",
      "steady_builder"
    ],
    "matched_stages": [
      "meaning_search",
      "stability_building"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合在不确定生活中建立克制、责任与内在秩序。",
    "priority_score": 0
  },
  {
    "id": "BK022",
    "title": "《苏菲的世界》",
    "author": "乔斯坦·贾德",
    "category": "哲学入门",
    "tags": [
      "meaning"
    ],
    "matched_personalities": [
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合作为哲学史和人生思考的温和入口。",
    "priority_score": 0
  },
  {
    "id": "BK023",
    "title": "《悉达多》",
    "author": "赫尔曼·黑塞",
    "category": "文学/精神成长",
    "tags": [
      "meaning",
      "self_awareness",
      "freedom"
    ],
    "matched_personalities": [
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "meaning_search",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合正在寻找自我路径和生命答案的人。",
    "priority_score": 0
  },
  {
    "id": "BK024",
    "title": "《存在主义是一种人道主义》",
    "author": "让-保罗·萨特",
    "category": "哲学",
    "tags": [
      "meaning",
      "freedom"
    ],
    "matched_personalities": [
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "medium",
    "reason": "适合理解自由、选择与责任的关系。",
    "priority_score": 0
  },
  {
    "id": "BK025",
    "title": "《局外人》",
    "author": "阿尔贝·加缪",
    "category": "文学/存在主义",
    "tags": [
      "meaning",
      "self_awareness"
    ],
    "matched_personalities": [
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "medium",
    "reason": "适合触碰荒诞、疏离和现代人的精神处境。",
    "priority_score": 0
  },
  {
    "id": "BK026",
    "title": "《西西弗神话》",
    "author": "阿尔贝·加缪",
    "category": "哲学/文学",
    "tags": [
      "meaning",
      "freedom"
    ],
    "matched_personalities": [
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "hard",
    "reason": "适合深入理解荒诞感与主动生活之间的张力。",
    "priority_score": 0
  },
  {
    "id": "BK027",
    "title": "《活着》",
    "author": "余华",
    "category": "文学",
    "tags": [
      "meaning",
      "relationship"
    ],
    "matched_personalities": [
      "spiritual_wanderer",
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "meaning_search",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合在朴素故事中重新理解苦难、韧性与生命。",
    "priority_score": 0
  },
  {
    "id": "BK028",
    "title": "《百年孤独》",
    "author": "加西亚·马尔克斯",
    "category": "文学经典",
    "tags": [
      "meaning",
      "aesthetics"
    ],
    "matched_personalities": [
      "spiritual_wanderer",
      "aesthetic_collector"
    ],
    "matched_stages": [
      "meaning_search",
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "life_quality",
      "self_identity"
    ],
    "difficulty": "hard",
    "reason": "适合感受历史、家族、孤独与魔幻现实主义的丰沛世界。",
    "priority_score": 0
  },
  {
    "id": "BK029",
    "title": "《少有人走的路》",
    "author": "M. 斯科特·派克",
    "category": "心理/人生",
    "tags": [
      "self_awareness",
      "meaning"
    ],
    "matched_personalities": [
      "spiritual_wanderer",
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "meaning_search",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合重新理解自律、爱与心智成熟。",
    "priority_score": 0
  },
  {
    "id": "BK030",
    "title": "《有限与无限的游戏》",
    "author": "詹姆斯·卡斯",
    "category": "哲学/人生策略",
    "tags": [
      "meaning",
      "freedom",
      "creation"
    ],
    "matched_personalities": [
      "spiritual_wanderer",
      "freedom_experimenter"
    ],
    "matched_stages": [
      "life_reconstruction",
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity",
      "startup_creation"
    ],
    "difficulty": "medium",
    "reason": "适合从竞争逻辑转向生命游戏视角。",
    "priority_score": 0
  },
  {
    "id": "BK031",
    "title": "《也许你该找个人聊聊》",
    "author": "洛莉·戈特利布",
    "category": "心理/疗愈",
    "tags": [
      "self_awareness",
      "relationship"
    ],
    "matched_personalities": [
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "meaning_search",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "self_identity",
      "intimate_relationship"
    ],
    "difficulty": "easy",
    "reason": "适合在故事中理解咨询、创伤和自我改变。",
    "priority_score": 0
  },
  {
    "id": "BK032",
    "title": "《被讨厌的勇气》",
    "author": "岸见一郎, 古贺史健",
    "category": "心理/阿德勒",
    "tags": [
      "self_awareness",
      "freedom"
    ],
    "matched_personalities": [
      "emotion_archaeologist",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "meaning_search",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合摆脱评价体系，重新理解自我负责。",
    "priority_score": 0
  },
  {
    "id": "BK033",
    "title": "《亲密关系》",
    "author": "罗兰·米勒",
    "category": "心理/关系",
    "tags": [
      "relationship",
      "self_awareness"
    ],
    "matched_personalities": [
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "stability_building",
      "meaning_search"
    ],
    "matched_challenges": [
      "intimate_relationship"
    ],
    "difficulty": "medium",
    "reason": "适合系统理解爱情、依恋、冲突与关系满意度。",
    "priority_score": 0
  },
  {
    "id": "BK034",
    "title": "《依恋与亲密关系》",
    "author": "阿米尔·莱文, 瑞秋·赫勒",
    "category": "心理/关系",
    "tags": [
      "relationship",
      "self_awareness"
    ],
    "matched_personalities": [
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "meaning_search",
      "stability_building"
    ],
    "matched_challenges": [
      "intimate_relationship"
    ],
    "difficulty": "easy",
    "reason": "适合理解依恋类型如何影响亲密关系。",
    "priority_score": 0
  },
  {
    "id": "BK035",
    "title": "《非暴力沟通》",
    "author": "马歇尔·卢森堡",
    "category": "沟通/关系",
    "tags": [
      "relationship",
      "self_awareness",
      "stability"
    ],
    "matched_personalities": [
      "emotion_archaeologist",
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "intimate_relationship"
    ],
    "difficulty": "easy",
    "reason": "适合改善表达、倾听和冲突中的需求识别。",
    "priority_score": 0
  },
  {
    "id": "BK036",
    "title": "《蛤蟆先生去看心理医生》",
    "author": "罗伯特·戴博德",
    "category": "心理/疗愈",
    "tags": [
      "self_awareness",
      "relationship"
    ],
    "matched_personalities": [
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合作为心理咨询和自我觉察的轻量入口。",
    "priority_score": 0
  },
  {
    "id": "BK037",
    "title": "《身体从未忘记》",
    "author": "贝塞尔·范德考克",
    "category": "心理/创伤",
    "tags": [
      "self_awareness",
      "relationship"
    ],
    "matched_personalities": [
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "life_reconstruction",
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "hard",
    "reason": "适合深入理解创伤如何停留在身体和关系中。",
    "priority_score": 0
  },
  {
    "id": "BK038",
    "title": "《情绪急救》",
    "author": "盖伊·温奇",
    "category": "心理/情绪",
    "tags": [
      "self_awareness"
    ],
    "matched_personalities": [
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "life_reconstruction"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合在情绪受伤时获得具体的自我修复工具。",
    "priority_score": 0
  },
  {
    "id": "BK039",
    "title": "《为何家会伤人》",
    "author": "武志红",
    "category": "心理/家庭",
    "tags": [
      "relationship",
      "self_awareness"
    ],
    "matched_personalities": [
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "meaning_search",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "intimate_relationship",
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合从家庭系统角度理解自我与关系模式。",
    "priority_score": 0
  },
  {
    "id": "BK040",
    "title": "《爱的艺术》",
    "author": "埃里希·弗洛姆",
    "category": "心理/哲学",
    "tags": [
      "relationship",
      "meaning"
    ],
    "matched_personalities": [
      "emotion_archaeologist",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "meaning_search",
      "stability_building"
    ],
    "matched_challenges": [
      "intimate_relationship"
    ],
    "difficulty": "medium",
    "reason": "适合理解爱不是情绪，而是一种能力与实践。",
    "priority_score": 0
  },
  {
    "id": "BK041",
    "title": "《美的历程》",
    "author": "李泽厚",
    "category": "美学/文化",
    "tags": [
      "aesthetics",
      "meaning"
    ],
    "matched_personalities": [
      "aesthetic_collector",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "lifestyle_aesthetics",
      "meaning_search"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "medium",
    "reason": "适合建立中国艺术与审美精神的基本脉络。",
    "priority_score": 0
  },
  {
    "id": "BK042",
    "title": "《艺术的故事》",
    "author": "贡布里希",
    "category": "艺术史",
    "tags": [
      "aesthetics",
      "society"
    ],
    "matched_personalities": [
      "aesthetic_collector"
    ],
    "matched_stages": [
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "medium",
    "reason": "适合作为西方艺术史和观看能力的经典入口。",
    "priority_score": 0
  },
  {
    "id": "BK043",
    "title": "《设计中的设计》",
    "author": "原研哉",
    "category": "设计/生活方式",
    "tags": [
      "aesthetics",
      "creation"
    ],
    "matched_personalities": [
      "aesthetic_collector",
      "freedom_experimenter"
    ],
    "matched_stages": [
      "lifestyle_aesthetics",
      "creation_exploration"
    ],
    "matched_challenges": [
      "life_quality",
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合理解设计如何改变日常感知和产品表达。",
    "priority_score": 0
  },
  {
    "id": "BK044",
    "title": "《负建筑》",
    "author": "隈研吾",
    "category": "建筑/设计",
    "tags": [
      "aesthetics",
      "meaning"
    ],
    "matched_personalities": [
      "aesthetic_collector"
    ],
    "matched_stages": [
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "medium",
    "reason": "适合通过建筑理解谦逊、材料与空间关系。",
    "priority_score": 0
  },
  {
    "id": "BK045",
    "title": "《阴翳礼赞》",
    "author": "谷崎润一郎",
    "category": "美学/随笔",
    "tags": [
      "aesthetics",
      "meaning"
    ],
    "matched_personalities": [
      "aesthetic_collector"
    ],
    "matched_stages": [
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "easy",
    "reason": "适合感受东方审美中含蓄、幽暗与细节的力量。",
    "priority_score": 0
  },
  {
    "id": "BK046",
    "title": "《日日是好日》",
    "author": "森下典子",
    "category": "生活/茶道",
    "tags": [
      "aesthetics",
      "self_awareness"
    ],
    "matched_personalities": [
      "aesthetic_collector",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "lifestyle_aesthetics",
      "meaning_search"
    ],
    "matched_challenges": [
      "life_quality",
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合在日常秩序和身体经验中重新理解生活。",
    "priority_score": 0
  },
  {
    "id": "BK047",
    "title": "《京都一年》",
    "author": "林文月",
    "category": "旅行/文化",
    "tags": [
      "aesthetics",
      "meaning"
    ],
    "matched_personalities": [
      "aesthetic_collector"
    ],
    "matched_stages": [
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "easy",
    "reason": "适合用温和文字进入城市、季节与文化体验。",
    "priority_score": 0
  },
  {
    "id": "BK048",
    "title": "《东京本屋》",
    "author": "吉井忍",
    "category": "书店/城市文化",
    "tags": [
      "aesthetics",
      "society"
    ],
    "matched_personalities": [
      "aesthetic_collector",
      "human_observer"
    ],
    "matched_stages": [
      "lifestyle_aesthetics",
      "world_observation"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "easy",
    "reason": "适合理解书店作为城市文化节点的魅力。",
    "priority_score": 0
  },
  {
    "id": "BK049",
    "title": "《观看之道》",
    "author": "约翰·伯格",
    "category": "艺术/视觉文化",
    "tags": [
      "aesthetics",
      "society"
    ],
    "matched_personalities": [
      "aesthetic_collector",
      "human_observer"
    ],
    "matched_stages": [
      "lifestyle_aesthetics",
      "world_observation"
    ],
    "matched_challenges": [
      "life_quality",
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合训练观看图像、广告和文化权力的能力。",
    "priority_score": 0
  },
  {
    "id": "BK050",
    "title": "《生活的艺术》",
    "author": "林语堂",
    "category": "生活/散文",
    "tags": [
      "aesthetics",
      "meaning"
    ],
    "matched_personalities": [
      "aesthetic_collector",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "lifestyle_aesthetics",
      "meaning_search"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "easy",
    "reason": "适合用幽默与闲适重新理解生活的滋味。",
    "priority_score": 0
  },
  {
    "id": "BK051",
    "title": "《从0到1》",
    "author": "彼得·蒂尔",
    "category": "创业/商业",
    "tags": [
      "creation",
      "future",
      "freedom"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "era_fomo"
    ],
    "matched_stages": [
      "creation_exploration"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合理解创新、垄断与非共识机会。",
    "priority_score": 0
  },
  {
    "id": "BK052",
    "title": "《精益创业》",
    "author": "埃里克·莱斯",
    "category": "创业/产品",
    "tags": [
      "creation",
      "growth"
    ],
    "matched_personalities": [
      "freedom_experimenter"
    ],
    "matched_stages": [
      "creation_exploration"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合把创业想法转化为可验证实验。",
    "priority_score": 0
  },
  {
    "id": "BK053",
    "title": "《创新者的窘境》",
    "author": "克莱顿·克里斯坦森",
    "category": "创新/商业",
    "tags": [
      "creation",
      "society",
      "future"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "human_observer"
    ],
    "matched_stages": [
      "creation_exploration",
      "world_observation"
    ],
    "matched_challenges": [
      "startup_creation",
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合理解颠覆式创新为什么会击败既有巨头。",
    "priority_score": 0
  },
  {
    "id": "BK054",
    "title": "《定位》",
    "author": "艾·里斯, 杰克·特劳特",
    "category": "营销/品牌",
    "tags": [
      "creation",
      "achievement"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "creation_exploration",
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合建立品牌进入用户心智的基本逻辑。",
    "priority_score": 0
  },
  {
    "id": "BK055",
    "title": "《疯传》",
    "author": "乔纳·伯杰",
    "category": "传播/营销",
    "tags": [
      "creation",
      "society"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "era_fomo"
    ],
    "matched_stages": [
      "creation_exploration"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合理解内容、产品和观念如何被传播。",
    "priority_score": 0
  },
  {
    "id": "BK056",
    "title": "《引爆点》",
    "author": "马尔科姆·格拉德威尔",
    "category": "传播/社会",
    "tags": [
      "society",
      "creation"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "human_observer"
    ],
    "matched_stages": [
      "creation_exploration",
      "world_observation"
    ],
    "matched_challenges": [
      "startup_creation",
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合理解流行、网络和临界点的形成。",
    "priority_score": 0
  },
  {
    "id": "BK057",
    "title": "《创意的生成》",
    "author": "詹姆斯·韦伯·扬",
    "category": "创意/方法",
    "tags": [
      "creation",
      "aesthetics"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "aesthetic_collector"
    ],
    "matched_stages": [
      "creation_exploration"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合把灵感从玄学转化为可训练流程。",
    "priority_score": 0
  },
  {
    "id": "BK058",
    "title": "《赖声川的创意学》",
    "author": "赖声川",
    "category": "创意/表达",
    "tags": [
      "creation",
      "aesthetics",
      "self_awareness"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "aesthetic_collector"
    ],
    "matched_stages": [
      "creation_exploration",
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合创作者理解灵感、经验与表达结构。",
    "priority_score": 0
  },
  {
    "id": "BK059",
    "title": "《像艺术家一样思考》",
    "author": "贝蒂·艾德华",
    "category": "创造力/视觉",
    "tags": [
      "creation",
      "aesthetics"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "aesthetic_collector"
    ],
    "matched_stages": [
      "creation_exploration",
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "startup_creation",
      "life_quality"
    ],
    "difficulty": "easy",
    "reason": "适合训练从惯性认知切换到观察和创造。",
    "priority_score": 0
  },
  {
    "id": "BK060",
    "title": "《一人公司》",
    "author": "保罗·贾维斯",
    "category": "创业/自由职业",
    "tags": [
      "creation",
      "freedom",
      "stability"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "steady_builder"
    ],
    "matched_stages": [
      "creation_exploration",
      "stability_building"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合不想盲目做大的个人创业者。",
    "priority_score": 0
  },
  {
    "id": "BK061",
    "title": "《小狗钱钱》",
    "author": "博多·舍费尔",
    "category": "财商入门",
    "tags": [
      "wealth",
      "stability"
    ],
    "matched_personalities": [
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building",
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "wealth_accumulation"
    ],
    "difficulty": "easy",
    "reason": "适合轻松建立储蓄、目标和复利意识。",
    "priority_score": 0
  },
  {
    "id": "BK062",
    "title": "《富爸爸穷爸爸》",
    "author": "罗伯特·清崎",
    "category": "财商",
    "tags": [
      "wealth",
      "freedom"
    ],
    "matched_personalities": [
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building"
    ],
    "matched_challenges": [
      "wealth_accumulation"
    ],
    "difficulty": "easy",
    "reason": "适合启发财务自由和资产负债的基本意识。",
    "priority_score": 0
  },
  {
    "id": "BK063",
    "title": "《聪明的投资者》",
    "author": "本杰明·格雷厄姆",
    "category": "投资",
    "tags": [
      "wealth",
      "stability"
    ],
    "matched_personalities": [
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building"
    ],
    "matched_challenges": [
      "wealth_accumulation"
    ],
    "difficulty": "hard",
    "reason": "适合建立价值投资、风险边际和长期纪律。",
    "priority_score": 0
  },
  {
    "id": "BK064",
    "title": "《漫步华尔街》",
    "author": "伯顿·马尔基尔",
    "category": "投资/金融",
    "tags": [
      "wealth",
      "stability"
    ],
    "matched_personalities": [
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building"
    ],
    "matched_challenges": [
      "wealth_accumulation"
    ],
    "difficulty": "medium",
    "reason": "适合理解指数投资、市场有效性与长期配置。",
    "priority_score": 0
  },
  {
    "id": "BK065",
    "title": "《巴菲特致股东的信》",
    "author": "沃伦·巴菲特",
    "category": "投资/商业",
    "tags": [
      "wealth",
      "achievement",
      "stability"
    ],
    "matched_personalities": [
      "steady_builder",
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "stability_building",
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "wealth_accumulation"
    ],
    "difficulty": "medium",
    "reason": "适合学习商业质量、资本配置和长期持有逻辑。",
    "priority_score": 0
  },
  {
    "id": "BK066",
    "title": "《周期》",
    "author": "霍华德·马克斯",
    "category": "投资/周期",
    "tags": [
      "wealth",
      "society"
    ],
    "matched_personalities": [
      "steady_builder",
      "human_observer"
    ],
    "matched_stages": [
      "stability_building",
      "world_observation"
    ],
    "matched_challenges": [
      "wealth_accumulation",
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合理解市场情绪、风险偏好和周期位置。",
    "priority_score": 0
  },
  {
    "id": "BK067",
    "title": "《投资最重要的事》",
    "author": "霍华德·马克斯",
    "category": "投资/风险",
    "tags": [
      "wealth",
      "stability"
    ],
    "matched_personalities": [
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building"
    ],
    "matched_challenges": [
      "wealth_accumulation"
    ],
    "difficulty": "medium",
    "reason": "适合训练风险意识、逆向思维和安全边际。",
    "priority_score": 0
  },
  {
    "id": "BK068",
    "title": "《随机漫步的傻瓜》",
    "author": "纳西姆·塔勒布",
    "category": "风险/概率",
    "tags": [
      "wealth",
      "society",
      "future"
    ],
    "matched_personalities": [
      "steady_builder",
      "human_observer"
    ],
    "matched_stages": [
      "stability_building",
      "world_observation"
    ],
    "matched_challenges": [
      "wealth_accumulation",
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合理解运气、随机性和错误归因。",
    "priority_score": 0
  },
  {
    "id": "BK069",
    "title": "《反脆弱》",
    "author": "纳西姆·塔勒布",
    "category": "风险/系统",
    "tags": [
      "stability",
      "freedom",
      "future"
    ],
    "matched_personalities": [
      "steady_builder",
      "era_fomo"
    ],
    "matched_stages": [
      "stability_building",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "wealth_accumulation",
      "world_understanding"
    ],
    "difficulty": "hard",
    "reason": "适合理解如何在波动中获得收益而非只求稳。",
    "priority_score": 0
  },
  {
    "id": "BK070",
    "title": "《稀缺》",
    "author": "森德希尔·穆来纳森, 埃尔德·沙菲尔",
    "category": "行为经济/心理",
    "tags": [
      "wealth",
      "self_awareness"
    ],
    "matched_personalities": [
      "steady_builder",
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "stability_building",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "wealth_accumulation",
      "self_identity"
    ],
    "difficulty": "medium",
    "reason": "适合理解时间、金钱和注意力稀缺如何塑造决策。",
    "priority_score": 0
  },
  {
    "id": "BK071",
    "title": "《AI 2041》",
    "author": "李开复, 陈楸帆",
    "category": "AI/未来",
    "tags": [
      "future",
      "creation",
      "society"
    ],
    "matched_personalities": [
      "era_fomo"
    ],
    "matched_stages": [
      "world_observation",
      "creation_exploration"
    ],
    "matched_challenges": [
      "world_understanding",
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合用故事和技术分析理解AI可能改变的生活场景。",
    "priority_score": 0
  },
  {
    "id": "BK072",
    "title": "《人工智能简史》",
    "author": "尼克",
    "category": "AI/科技史",
    "tags": [
      "future",
      "society"
    ],
    "matched_personalities": [
      "era_fomo",
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合建立人工智能发展的基本历史脉络。",
    "priority_score": 0
  },
  {
    "id": "BK073",
    "title": "《生命3.0》",
    "author": "迈克斯·泰格马克",
    "category": "AI/未来哲学",
    "tags": [
      "future",
      "meaning"
    ],
    "matched_personalities": [
      "era_fomo",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "world_observation",
      "meaning_search"
    ],
    "matched_challenges": [
      "world_understanding",
      "self_identity"
    ],
    "difficulty": "medium",
    "reason": "适合思考智能、意识和人类未来的深层问题。",
    "priority_score": 0
  },
  {
    "id": "BK074",
    "title": "《超级智能》",
    "author": "尼克·博斯特罗姆",
    "category": "AI/风险",
    "tags": [
      "future",
      "society"
    ],
    "matched_personalities": [
      "era_fomo"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "hard",
    "reason": "适合深入理解超级智能、控制问题与长期风险。",
    "priority_score": 0
  },
  {
    "id": "BK075",
    "title": "《技术与文明》",
    "author": "刘易斯·芒福德",
    "category": "技术/文明史",
    "tags": [
      "future",
      "society",
      "meaning"
    ],
    "matched_personalities": [
      "era_fomo",
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "hard",
    "reason": "适合从文明史角度理解技术如何塑造社会。",
    "priority_score": 0
  },
  {
    "id": "BK076",
    "title": "《失控》",
    "author": "凯文·凯利",
    "category": "科技/复杂系统",
    "tags": [
      "future",
      "creation",
      "society"
    ],
    "matched_personalities": [
      "era_fomo",
      "freedom_experimenter"
    ],
    "matched_stages": [
      "world_observation",
      "creation_exploration"
    ],
    "matched_challenges": [
      "world_understanding",
      "startup_creation"
    ],
    "difficulty": "hard",
    "reason": "适合理解网络、涌现、复杂系统和技术演化。",
    "priority_score": 0
  },
  {
    "id": "BK077",
    "title": "《必然》",
    "author": "凯文·凯利",
    "category": "科技趋势",
    "tags": [
      "future",
      "creation"
    ],
    "matched_personalities": [
      "era_fomo"
    ],
    "matched_stages": [
      "world_observation",
      "creation_exploration"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合理解数字技术长期趋势及其文化影响。",
    "priority_score": 0
  },
  {
    "id": "BK078",
    "title": "《浪潮之巅》",
    "author": "吴军",
    "category": "科技产业史",
    "tags": [
      "future",
      "society",
      "achievement"
    ],
    "matched_personalities": [
      "era_fomo",
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合理解科技公司兴衰和产业周期。",
    "priority_score": 0
  },
  {
    "id": "BK079",
    "title": "《硅谷钢铁侠》",
    "author": "阿什利·万斯",
    "category": "商业传记",
    "tags": [
      "future",
      "creation",
      "achievement"
    ],
    "matched_personalities": [
      "era_fomo",
      "freedom_experimenter"
    ],
    "matched_stages": [
      "creation_exploration",
      "world_observation"
    ],
    "matched_challenges": [
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合观察技术创业、工程野心与个人驱动力。",
    "priority_score": 0
  },
  {
    "id": "BK080",
    "title": "《芯片战争》",
    "author": "克里斯·米勒",
    "category": "科技/地缘政治",
    "tags": [
      "future",
      "society",
      "wealth"
    ],
    "matched_personalities": [
      "era_fomo",
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合理解芯片产业、国家竞争和全球供应链。",
    "priority_score": 0
  },
  {
    "id": "BK081",
    "title": "《重新长大》",
    "author": "王瑞",
    "category": "心理/成长",
    "tags": [
      "self_awareness",
      "meaning"
    ],
    "matched_personalities": [
      "emotion_archaeologist",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "life_reconstruction",
      "meaning_search"
    ],
    "matched_challenges": [
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合在关系和成长中重看自己的旧模式。",
    "priority_score": 0
  },
  {
    "id": "BK082",
    "title": "《心流》",
    "author": "米哈里·契克森米哈赖",
    "category": "心理/幸福",
    "tags": [
      "growth",
      "aesthetics",
      "self_awareness"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "aesthetic_collector"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "lifestyle_aesthetics"
    ],
    "matched_challenges": [
      "career_development",
      "life_quality"
    ],
    "difficulty": "medium",
    "reason": "适合理解专注、挑战与幸福感之间的关系。",
    "priority_score": 0
  },
  {
    "id": "BK083",
    "title": "《掌控习惯》",
    "author": "詹姆斯·克利尔",
    "category": "习惯/成长",
    "tags": [
      "growth",
      "stability"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "steady_builder"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "stability_building"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合把目标转化为可持续的小系统。",
    "priority_score": 0
  },
  {
    "id": "BK084",
    "title": "《深度工作》",
    "author": "卡尔·纽波特",
    "category": "效率/职业",
    "tags": [
      "growth",
      "achievement",
      "stability"
    ],
    "matched_personalities": [
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合在信息干扰中恢复深度产出能力。",
    "priority_score": 0
  },
  {
    "id": "BK085",
    "title": "《数字极简主义》",
    "author": "卡尔·纽波特",
    "category": "生活/注意力",
    "tags": [
      "aesthetics",
      "stability",
      "self_awareness"
    ],
    "matched_personalities": [
      "aesthetic_collector",
      "steady_builder"
    ],
    "matched_stages": [
      "lifestyle_aesthetics",
      "stability_building"
    ],
    "matched_challenges": [
      "life_quality"
    ],
    "difficulty": "easy",
    "reason": "适合重建注意力边界和数字生活秩序。",
    "priority_score": 0
  },
  {
    "id": "BK086",
    "title": "《娱乐至死》",
    "author": "尼尔·波兹曼",
    "category": "媒介/社会",
    "tags": [
      "society",
      "future",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer",
      "era_fomo"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "medium",
    "reason": "适合理解媒介环境如何改变公共讨论和认知方式。",
    "priority_score": 0
  },
  {
    "id": "BK087",
    "title": "《童年的消逝》",
    "author": "尼尔·波兹曼",
    "category": "媒介/社会",
    "tags": [
      "society",
      "relationship"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation",
      "stability_building"
    ],
    "matched_challenges": [
      "world_understanding",
      "intimate_relationship"
    ],
    "difficulty": "medium",
    "reason": "适合从媒介角度理解教育、童年和家庭议题。",
    "priority_score": 0
  },
  {
    "id": "BK088",
    "title": "《乌合之众》",
    "author": "古斯塔夫·勒庞",
    "category": "社会心理",
    "tags": [
      "society",
      "self_awareness"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合入门理解群体情绪和大众心理，但需批判阅读。",
    "priority_score": 0
  },
  {
    "id": "BK089",
    "title": "《影响力》",
    "author": "罗伯特·西奥迪尼",
    "category": "心理/营销",
    "tags": [
      "growth",
      "creation",
      "society"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "freedom_experimenter"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "creation_exploration"
    ],
    "matched_challenges": [
      "career_development",
      "startup_creation"
    ],
    "difficulty": "easy",
    "reason": "适合理解说服、营销和日常决策中的心理机制。",
    "priority_score": 0
  },
  {
    "id": "BK090",
    "title": "《怪诞行为学》",
    "author": "丹·艾瑞里",
    "category": "行为经济",
    "tags": [
      "society",
      "growth",
      "self_awareness"
    ],
    "matched_personalities": [
      "human_observer",
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "world_observation",
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "world_understanding",
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合轻松理解非理性行为背后的规律。",
    "priority_score": 0
  },
  {
    "id": "BK091",
    "title": "《看见》",
    "author": "柴静",
    "category": "纪实/社会",
    "tags": [
      "society",
      "relationship",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer",
      "emotion_archaeologist"
    ],
    "matched_stages": [
      "world_observation",
      "meaning_search"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合通过个体故事进入公共议题和社会现场。",
    "priority_score": 0
  },
  {
    "id": "BK092",
    "title": "《我在底层的生活》",
    "author": "芭芭拉·艾伦瑞克",
    "category": "社会纪实",
    "tags": [
      "society",
      "wealth"
    ],
    "matched_personalities": [
      "human_observer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "easy",
    "reason": "适合理解低薪劳动、阶层处境和生活成本。",
    "priority_score": 0
  },
  {
    "id": "BK093",
    "title": "《工作、消费主义和新穷人》",
    "author": "齐格蒙特·鲍曼",
    "category": "社会学",
    "tags": [
      "society",
      "meaning"
    ],
    "matched_personalities": [
      "human_observer",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "world_observation",
      "meaning_search"
    ],
    "matched_challenges": [
      "world_understanding",
      "self_identity"
    ],
    "difficulty": "medium",
    "reason": "适合反思工作伦理、消费社会和现代身份。",
    "priority_score": 0
  },
  {
    "id": "BK094",
    "title": "《现代性的后果》",
    "author": "安东尼·吉登斯",
    "category": "社会理论",
    "tags": [
      "society",
      "meaning",
      "future"
    ],
    "matched_personalities": [
      "human_observer",
      "spiritual_wanderer"
    ],
    "matched_stages": [
      "world_observation"
    ],
    "matched_challenges": [
      "world_understanding"
    ],
    "difficulty": "hard",
    "reason": "适合深入理解现代性、风险和自我身份。",
    "priority_score": 0
  },
  {
    "id": "BK095",
    "title": "《爱的五种语言》",
    "author": "盖瑞·查普曼",
    "category": "关系/沟通",
    "tags": [
      "relationship",
      "self_awareness"
    ],
    "matched_personalities": [
      "emotion_archaeologist",
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building"
    ],
    "matched_challenges": [
      "intimate_relationship"
    ],
    "difficulty": "easy",
    "reason": "适合改善伴侣间表达爱与理解需求的方式。",
    "priority_score": 0
  },
  {
    "id": "BK096",
    "title": "《幸福的婚姻》",
    "author": "约翰·戈特曼, 娜恩·西尔弗",
    "category": "关系/婚姻",
    "tags": [
      "relationship",
      "stability"
    ],
    "matched_personalities": [
      "emotion_archaeologist",
      "steady_builder"
    ],
    "matched_stages": [
      "stability_building"
    ],
    "matched_challenges": [
      "intimate_relationship"
    ],
    "difficulty": "easy",
    "reason": "适合用研究视角理解长期关系的维护机制。",
    "priority_score": 0
  },
  {
    "id": "BK097",
    "title": "《人生设计课》",
    "author": "比尔·博内特, 戴夫·伊万斯",
    "category": "人生设计/职业",
    "tags": [
      "growth",
      "creation",
      "meaning"
    ],
    "matched_personalities": [
      "freedom_experimenter",
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "life_reconstruction",
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "career_development",
      "self_identity"
    ],
    "difficulty": "easy",
    "reason": "适合在迷茫期用设计思维探索人生选项。",
    "priority_score": 0
  },
  {
    "id": "BK098",
    "title": "《远见》",
    "author": "布赖恩·费瑟斯通豪",
    "category": "职业规划",
    "tags": [
      "growth",
      "stability",
      "achievement"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "steady_builder"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "stability_building"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合从长期职业周期重新规划能力和机会。",
    "priority_score": 0
  },
  {
    "id": "BK099",
    "title": "《跃迁》",
    "author": "古典",
    "category": "成长/职业",
    "tags": [
      "growth",
      "future",
      "achievement"
    ],
    "matched_personalities": [
      "earth_online_upgrader",
      "era_fomo"
    ],
    "matched_stages": [
      "cognitive_upgrade",
      "life_reconstruction"
    ],
    "matched_challenges": [
      "career_development"
    ],
    "difficulty": "easy",
    "reason": "适合理解个体如何借助趋势、系统和连接放大成长。",
    "priority_score": 0
  },
  {
    "id": "BK100",
    "title": "《长期主义》",
    "author": "高德威",
    "category": "商业/长期主义",
    "tags": [
      "stability",
      "growth",
      "wealth"
    ],
    "matched_personalities": [
      "steady_builder",
      "earth_online_upgrader"
    ],
    "matched_stages": [
      "stability_building",
      "cognitive_upgrade"
    ],
    "matched_challenges": [
      "career_development",
      "wealth_accumulation"
    ],
    "difficulty": "easy",
    "reason": "用于占位长期主义方向；后续需要核对中文书名、作者与版本。",
    "priority_score": 0
  }
];
