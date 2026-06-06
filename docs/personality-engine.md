# Personality Engine

## 计算目标

阅读人格用于回答“用户倾向于如何理解世界”。人格不是由单一标签直接决定，而是由标签组合计算出的认知倾向决定。系统遵循：用户答题 → 标签得分 → 维度计算 → 阅读人格。

## 输入变量

输入为 12 个标签总分：growth、achievement、meaning、self_awareness、aesthetics、relationship、society、future、creation、stability、wealth、freedom。

## 维度计算

系统计算四组人格维度。每组维度由两端构成，分数较高的一端代表用户在该维度上的主导倾向。

| 维度 | A 端 | A 端计算 | B 端 | B 端计算 |
|---|---|---|---|---|
| D1 | 成长导向 | growth + achievement | 意义导向 | meaning + self_awareness |
| D2 | 世界观察 | society + future | 自我探索 | self_awareness + relationship |
| D3 | 建设秩序 | stability + wealth | 创造突破 | creation + freedom |
| D4 | 理性认知 | growth + society + future | 感性体验 | aesthetics + relationship + meaning |

## 人格生成规则

系统先计算四组维度，再为每个阅读人格计算匹配分。第一版不使用“硬组合唯一映射”，而使用人格匹配分，避免平局和边界用户被错误归类。每个人格的匹配分由其典型标签和典型维度共同决定。最终输出匹配分最高的人格作为 primary_personality；如果第二名与第一名分差 ≤ 2，则输出 secondary_personality，否则 secondary_personality 为空。

## 阅读人格评分

### 地球Online升级狂

核心问题：如何持续变强？典型用户相信学习、方法论和认知框架能够持续提高人生胜率。推荐方向为商业、认知升级、决策科学、职业成长。匹配分 = growth × 1.5 + achievement × 1.3 + future × 1.1 + 成长导向维度优势分 + 理性认知维度优势分。

### 人间观察员

核心问题：世界究竟如何运转？典型用户喜欢从社会、历史、经济、商业和制度层面理解个人处境。推荐方向为社会学、历史、经济学、商业观察。匹配分 = society × 1.5 + meaning × 1.2 + future × 1.1 + 世界观察维度优势分 + 理性认知维度优势分。

### 精神漫游者

核心问题：人生为什么而活？典型用户关注意义、存在、价值观和人文经验。推荐方向为哲学、文学、人文经典。匹配分 = meaning × 1.5 + self_awareness × 1.2 + 感性体验维度优势分 + 意义导向维度优势分。

### 情绪考古学家

核心问题：我为什么会成为现在的自己？典型用户关注心理结构、情绪模式、亲密关系和自我理解。推荐方向为心理学、依恋关系、个人成长。匹配分 = self_awareness × 1.5 + relationship × 1.3 + 自我探索维度优势分 + 感性体验维度优势分。

### 美学收藏家

核心问题：怎样活得更有质感？典型用户关注艺术、设计、文化、生活方式和审美体验。推荐方向为艺术、设计、文化、生活方式。匹配分 = aesthetics × 1.5 + freedom × 1.1 + meaning × 0.8 + 感性体验维度优势分。

### 自由实验家

核心问题：还有什么新的可能？典型用户关注创业、创作、表达、自由和个人项目。推荐方向为创业、创新、创造力、个人表达。匹配分 = creation × 1.5 + freedom × 1.4 + future × 0.8 + 创造突破维度优势分。

### 稳健建设者

核心问题：如何构建长期价值？典型用户关注财富、家庭、秩序、规划和长期主义。推荐方向为财富管理、长期主义、组织管理、家庭经营。匹配分 = stability × 1.5 + wealth × 1.3 + achievement × 0.9 + 建设秩序维度优势分。

### 时代FOMO怪

核心问题：未来会发生什么？典型用户关注 AI、科技、产业趋势和时代变化，也容易担心错过下一波机会。推荐方向为 AI、科技、未来趋势、创新商业。匹配分 = future × 1.5 + creation × 1.1 + society × 1.1 + 世界观察维度优势分 + 理性认知维度优势分。

## 维度优势分定义

若某人格需要某一维度倾向，而用户在该维度上确实符合，则加 2 分。若该维度两端分差 ≤ 1，则该维度视为中性，不加分也不扣分。若用户明显倾向相反端，则不加分。

## 输出字段

输出字段包括 primary_personality、secondary_personality、personality_scores、dimension_scores、top_tags、reason。primary_personality 为最高分人格。secondary_personality 仅在第二名与第一名分差 ≤ 2 时输出。dimension_scores 应包含 D1、D2、D3、D4 的两端分数和最终倾向。

## 结果文案原则

阅读人格不是医学、心理学或职业测评结论，不应使用诊断语气。结果页应表达为“你当前更像是……”，而不是“你就是……”。人格名称可以有网感，但解释必须清楚、克制、有洞察。