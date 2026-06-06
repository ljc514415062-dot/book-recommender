# Question Bank V1

## 基础信息问题

### B1. 年龄

输入类型：数字。用于人生阶段修正，不直接计入标签分数。

### B2. 性别

可选值：female、male、non_binary、prefer_not_to_say。用于后续结果文案语气与群体分析，第一版不直接参与阶段评分，避免刻板化分类。

### B3. 职业类型

可选值：student、employee、manager、entrepreneur、freelancer、public_service、professional、retired。用于人生阶段修正，不直接计入标签分数。

## 测试题

### Q1. 最近最让你兴奋的事情是？

A. 学会一个新技能或知识：growth +2，achievement +1  
B. 理解了一个以前没想明白的问题：meaning +2，society +1  
C. 创造出属于自己的作品：creation +2，freedom +1  
D. 把生活打理得更舒服和有品质：aesthetics +2，stability +1

### Q2. 如果突然拥有一年完全自由的时间，你最想做什么？

A. 系统学习一个新领域：growth +2，achievement +1  
B. 长时间旅行和体验生活：freedom +2，aesthetics +1  
C. 研究社会、历史或商业：society +2，meaning +1  
D. 好好认识自己：self_awareness +2，relationship +1

### Q3. 你最近最常思考的问题是什么？

A. 如何变得更优秀：growth +2，achievement +1  
B. 我真正想过什么样的人生：meaning +2，self_awareness +1  
C. 世界未来会变成什么样：future +2，society +1  
D. 如何创造属于自己的事业或作品：creation +2，freedom +1

### Q4. 朋友最可能如何评价你？

A. 上进：growth +2，achievement +1  
B. 有思想：meaning +2，society +1  
C. 有品位：aesthetics +2，freedom +1  
D. 有主见：creation +2，stability +1

### Q5. 你更害怕什么？

A. 停滞不前：growth +2，achievement +1  
B. 活得没有意义：meaning +2，self_awareness +1  
C. 被束缚的人生：freedom +2，creation +1  
D. 失去稳定和安全感：stability +2，wealth +1

### Q6. 看到一本好书时，你最期待获得什么？

A. 方法和认知：growth +2，achievement +1  
B. 新的视角：society +2，meaning +1  
C. 对自己的理解：self_awareness +2，relationship +1  
D. 灵感和创造力：creation +2，freedom +1

### Q7. 如果只能订阅一种内容，你会选择？

A. 商业和成长：growth +2，achievement +1  
B. 社会与趋势：society +2，future +1  
C. 心理学和关系：self_awareness +2，relationship +1  
D. 艺术与文化：aesthetics +2，freedom +1

### Q8. 你理想中的周末是什么样？

A. 学习和充电：growth +2，achievement +1  
B. 看展、逛书店、喝咖啡：aesthetics +2，meaning +1  
C. 与重要的人深度交流：relationship +2，self_awareness +1  
D. 做一个属于自己的项目：creation +2，freedom +1

### Q9. 如果必须选择一个长期目标，你会选？

A. 成为行业专家：achievement +2，growth +1  
B. 理解世界运行规律：society +2，meaning +1  
C. 活出真实的自己：self_awareness +2，freedom +1  
D. 建立稳定富足的人生：wealth +2，stability +1

### Q10. 你最容易被什么内容吸引？

A. 高手经验：growth +2，achievement +1  
B. 深度洞察：meaning +2，society +1  
C. 情感故事：relationship +2，self_awareness +1  
D. 创意与未来：future +2，creation +1

### Q11. 对于 AI 时代，你的第一反应是？

A. 我要尽快掌握它：growth +2，future +1  
B. 它会如何改变社会：society +2，future +1  
C. 它会如何改变人类：meaning +2，future +1  
D. 我想用它创造东西：creation +2，future +1

### Q12. 下面哪句话最像你？

A. 我想成为更厉害的人：growth +2，achievement +1  
B. 我想理解这个世界：society +2，meaning +1  
C. 我想找到真正的自己：self_awareness +2，meaning +1  
D. 我想创造属于自己的人生：creation +2，freedom +1

## 题库设计说明

第一版题库以价值观、生活状态、内容偏好、阅读期待和时代感知为主，不直接询问“你喜欢什么类型的书”。这样可以避免测试变成普通书籍分类器。每题每个选项总分为 3 分，便于控制不同标签的权重平衡。后续版本可以增加题目数量，但必须保持每个标签都有足够触发机会。