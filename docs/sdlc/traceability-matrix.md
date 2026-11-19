# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Sign up for an account | US-001 | 1 | POST /auth/signup, api, db, users, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Sign in to my account | US-002 | 1 | POST /auth/login, api, db, sessions, users, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-003 | EPIC-001 | Sign out and session expiry | US-003 | 2 | POST /auth/logout, api, db, sessions | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-004 | EPIC-001 | Private, isolated personal data | US-004 | 1 | GET /categories, GET /expenses, GET /expenses/export, GET /settings, api, categories, db, expenses, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-005 | EPIC-001 | Change my password | US-005 | 1 | POST /auth/change-password, api, db, users, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-001 | Deactivate my account | US-006 | 2 | POST /auth/deactivate, api, db, sessions, users, web | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-007 | EPIC-002 | Record an expense | US-007 | 2 | POST /expenses, api, categories, db, expenses, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-008 | EPIC-002 | Browse expense history | US-008 | 3 | GET /expenses, api, categories, expenses, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-009 | EPIC-002 | Edit a recorded expense | US-009 | 3 | GET /expenses/{id}, PUT /expenses/{id}, api, db, expenses, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-002 | Delete a recorded expense | US-010 | 3 | DELETE /expenses/{id}, api, db, expenses, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-011 | EPIC-003 | Use default categories | US-011 | 1 | GET /categories, api, categories, db | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-012 | EPIC-003 | Create a custom category | US-012 | 2 | POST /categories, api, categories, db, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-003 | Manage custom categories | US-013 | 3 | DELETE /categories/{id}, PUT /categories/{id}, api, categories, db, expenses, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-014 | EPIC-004 | Configure my currency | US-014 | 2 | GET /settings, PUT /settings, api, db, users, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-015 | EPIC-005 | Personal spending dashboard | US-015, US-015-T1, US-015-T2, US-015-T3 | 4 | GET /reports/dashboard, api, categories, db, expenses, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-016 | EPIC-005 | Spending by category report | US-016 | 4 | GET /reports/by-category, api, categories, db, expenses, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-017 | EPIC-005 | Spending over time report | US-017 | 5 | GET /reports/over-time, api, db, expenses, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-018 | EPIC-006 | Export expense history as CSV | US-018 | 3 | GET /expenses/export, api, categories, expenses, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-019 | EPIC-007 | Use the app on desktop and mobile browsers | US-019 | 5 | web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-020 | EPIC-007 | Free to use with no payment features | US-020 | 2 | web | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
<!-- sdlc:auto:end matrix -->
