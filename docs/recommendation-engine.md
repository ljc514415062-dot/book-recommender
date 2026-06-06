# Recommendation Engine

## 计算目标

本文件定义最终书单如何生成。系统最终推荐不只取决于用户喜欢什么书，而取决于阅读人格、人生阶段和当前课题的组合。

## 输入变量

输入包括 primary_personality、secondary_personality、primary_stage、secondary_stage、current_challenge、secondary_challenge、top_tags、book_database。book_database 中每本书至少应包含 title、author、category、tags、matched_personalities、matched_stages、matched_challenges、difficulty、reason、priority_score。

## 推荐原则

阅读人格决定阅读风格，人生阶段决定阅读时机，当前课题决定阅读内容。最终书单应优先满足当前课题，其次匹配人生阶段，再匹配阅读人格。这样可以避免推荐结果过度人格化而忽略用户当前现实问题。

## 推荐流程

系统先根据 primary_personality 与 primary_stage 选出候选书池。如果候选不足 30 本，则加入 secondary_personality、secondary_stage 或 top_tags 匹配的书补足。随后根据 current_challenge 对候选书进行二次排序。最终从排序后的候选池中输出 6 本书。若用户刷新，则从同一候选池中输出下一组 6 本书，避免刷新后结果方向完全漂移。

## 单本书评分

每本候选书计算 book_score。若匹配 primary_personality，+4；若匹配 secondary_personality，+2；若匹配 primary_stage，+4；若匹配 secondary_stage，+2；若匹配 current_challenge，+5；若匹配 secondary_challenge，+2；若书籍 tags 命中 top_tags，每命中一个 +1；priority_score 作为人工编辑权重加入最终分数。

## 输出规则

第一屏推荐 6 本书。6 本中建议包含：2 本强匹配当前课题的书，2 本匹配人生阶段的书，1 本匹配阅读人格的书，1 本拓展视野的书。书单不应全部是工具书，也不应全部是人文书；需要在“有用”和“有味道”之间取得平衡。

## 输出字段

每本推荐书输出 title、author、category、matched_reason、why_now、difficulty。matched_reason 解释这本书为什么适合该用户，why_now 解释为什么此刻适合读它，difficulty 用于提示阅读门槛。

## AI 文案边界

AI 可以根据系统已经选出的书生成更自然的推荐理由，但不得虚构书名、作者或不存在的内容。AI 不得替代规则引擎决定推荐结果。