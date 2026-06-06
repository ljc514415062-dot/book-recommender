# Life Stage Engine

## 计算目标

人生阶段用于回答“用户当前正在经历什么人生课题”。人生阶段由标签得分、年龄、性别、职业类型和前三标签共同计算。其中标签是主因，年龄与职业是修正因子，性别第一版不参与阶段评分，仅用于后续文案与数据分析，避免刻板化分类。

## 输入变量

基础信息包括 age、gender、occupation_type。occupation_type 可选值为 student、employee、manager、entrepreneur、freelancer、public_service、professional、retired。标签分数包括 growth、achievement、meaning、self_awareness、aesthetics、relationship、society、future、creation、stability、wealth、freedom。

## 计算流程

系统先提取标签分数前三名，记为 top_tags。随后对每个人生阶段计算 stage_score。每命中一个阶段核心标签加 3 分；命中年龄或职业修正条件时按规则加分。最终得分最高者为 primary_stage。若第二名与第一名分差 ≤ 2，则输出 secondary_stage，否则 secondary_stage 为空。随后系统根据标签分数计算 current_challenge。

## 人生阶段评分规则

### 认知升级期

核心含义：用户当前最关注能力提升、职业成长、认知框架和竞争优势。核心标签为 growth、achievement、future。若 top_tags 中命中任一核心标签，每个 +3。若 age ≤ 35，+2。若 occupation_type 为 employee、manager、professional，+2。

### 意义寻找期

核心含义：用户开始重新思考成功、幸福、人生意义和自我价值。核心标签为 meaning、self_awareness。若 top_tags 中命中任一核心标签，每个 +3。若 age ≥ 28，+1。若 age ≥ 35，额外 +1，即 35 岁以上合计 +2。

### 人生重构期

核心含义：用户处于路径调整、职业转型、价值重建或生活结构重组阶段。核心标签为 growth、meaning、freedom、creation。若 top_tags 中命中任一核心标签，每个 +3。若 top_tags 前三标签分差小于 15%，额外 +2，表示多个方向同时活跃且没有绝对主导。若 age 在 30 至 45 岁之间，+2。若 occupation_type 为 entrepreneur 或 freelancer，+2。

### 创造探索期

核心含义：用户正在从内容消费者转向创造者，关注创业、创作、表达、产品和新可能。核心标签为 creation、freedom、future。若 top_tags 中命中任一核心标签，每个 +3。若 occupation_type 为 entrepreneur 或 freelancer，+2。若 occupation_type 为 student，+1。

### 世界观察期

核心含义：用户关注社会、商业、历史、科技、时代趋势和外部世界运行逻辑。核心标签为 society、future、meaning。若 top_tags 中命中任一核心标签，每个 +3。若 occupation_type 为 professional 或 manager，+2。

### 稳定建设期

核心含义：用户关注财富、家庭、秩序、规划、安全感和长期主义。核心标签为 stability、wealth、relationship。若 top_tags 中命中任一核心标签，每个 +3。若 age ≥ 35，+2。若 age ≥ 45，额外 +1，即 45 岁以上合计 +3。

### 生活美学期

核心含义：用户开始关注生活品质、审美体验、文化消费、关系质量和生命感受。核心标签为 aesthetics、relationship、self_awareness。若 top_tags 中命中任一核心标签，每个 +3。若 age ≥ 30，+1。

## 当前课题计算规则

当前课题用于回答“用户此刻最需要解决什么问题”。当前课题独立于人生阶段，但用于决定最终书单内容。系统根据相关标签组合计算 challenge_score，最高者为 current_challenge。若第二名与第一名分差 ≤ 2，可以输出 secondary_challenge 作为辅助解释。

### 职业发展

触发标签为 growth、achievement。challenge_score = growth + achievement。核心问题：如何成长得更快，获得更强职业竞争力？推荐方向为职业成长、决策能力、学习方法、领导力。

### 财富积累

触发标签为 wealth、stability。challenge_score = wealth + stability。核心问题：如何建立长期财富和更强安全感？推荐方向为投资、资产配置、长期主义、财务规划。

### 创业创造

触发标签为 creation、freedom、future。challenge_score = creation + freedom + future × 0.5。核心问题：如何创造自己的事业、作品或项目？推荐方向为创业、创新、创造力、产品思维。

### 自我认同

触发标签为 meaning、self_awareness。challenge_score = meaning + self_awareness。核心问题：我究竟是谁，我想如何生活？推荐方向为哲学、心理学、人生探索、个人叙事。

### 亲密关系

触发标签为 relationship、self_awareness。challenge_score = relationship + self_awareness × 0.5。核心问题：如何建立更好的关系？推荐方向为依恋理论、沟通、婚姻家庭、关系心理学。

### 世界理解

触发标签为 society、future、meaning。challenge_score = society + future + meaning × 0.5。核心问题：世界正在发生什么，我处在什么时代结构里？推荐方向为社会学、历史、商业、科技趋势。

### 生活品质

触发标签为 aesthetics、relationship、freedom。challenge_score = aesthetics + relationship × 0.5 + freedom × 0.5。核心问题：如何活得更有质感？推荐方向为艺术、设计、文化、生活方式。

## 输出字段

输出字段包括 primary_stage、secondary_stage、stage_scores、current_challenge、secondary_challenge、challenge_scores、top_tags、reason。reason 需要解释：前三标签是什么；年龄和职业如何修正阶段判断；为什么当前课题成立。

## 推荐逻辑

最终书单由阅读人格、人生阶段和当前课题共同决定。阅读人格决定阅读风格，人生阶段决定阅读时机，当前课题决定阅读内容。第一版可采用“人格 × 阶段”的书库矩阵，再用 current_challenge 对 30 本候选书进行二次排序。