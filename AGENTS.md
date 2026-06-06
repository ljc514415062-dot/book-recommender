# AGENTS.md

## Project Context

This is a mobile-first web MVP for a reading personality and book recommendation test.

Before implementing any feature, read the following files:

- docs/product-brief.md
- docs/tag-system.md
- docs/question-bank.md
- docs/personality-engine.md
- docs/life-stage-engine.md
- docs/recommendation-engine.md
- docs/book-database.md

The documentation is the source of truth.
If code and documentation conflict, follow the documentation.

## Core Rules

The recommendation system must be deterministic and rule-based.

AI may be used later for explanation copy, but AI must not decide:
- tag scores
- reading personality
- life stage
- current challenge
- final recommendation category

Gender must be collected only as profile data in V1 and must not affect scoring.

Age and occupation may be used only as modifiers in the life-stage engine.

## Book Database Rules

1. docs/book-database.md is the single source of truth for the book database.
2. src/data/books.ts should be generated or synchronized from docs/book-database.md.
3. If src/data/books.ts conflicts with docs/book-database.md, follow docs/book-database.md.

## Development Scope V1

Build only the MVP:

- mobile-first web app
- questionnaire flow
- tag scoring
- reading personality calculation
- life stage calculation
- current challenge calculation
- result page
- 6 recommended books
- local static book data

Do not add:
- login
- payment
- database
- admin backend
- AI API
- WeChat Mini Program logic

## Expected Output

After the user completes the test, return:

- primary reading personality
- secondary reading personality if applicable
- primary life stage
- secondary life stage if applicable
- current challenge
- top three tags
- six recommended books
- explanation copy
- next reading direction

## Implementation Preference

Use simple, readable TypeScript.

Keep scoring logic in separate utility files.

Do not hard-code scoring logic inside UI components.

Suggested structure:

- src/data/questions.ts
- src/data/books.ts
- src/lib/scoring.ts
- src/lib/personalityEngine.ts
- src/lib/lifeStageEngine.ts
- src/lib/recommendationEngine.ts
- src/app/page.tsx
- src/app/result/page.tsx

## Working Style

Before making major changes, explain which files will be modified.

After implementation, run the app locally and report:
- what was implemented
- what files changed
- how to test it
- any assumptions made
