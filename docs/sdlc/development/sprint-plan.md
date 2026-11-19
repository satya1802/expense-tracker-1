# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up signup/login, enforce per-user data isolation, seed default categories, enable password change, and confirm no payment surfaces exist.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Sign up for an account | 5 | backend-agent | — |
| US-002 | Story | Sign in to my account | 3 | backend-agent | US-001 |
| US-004 | Story | Private, isolated personal data | 5 | security-agent | US-002 |
| US-005 | Story | Change my password | 3 | backend-agent | US-002 |
| US-011 | Story | Use default categories | 2 | backend-agent | US-001 |

## Sprint 2: Sprint 2

Complete session lifecycle and deactivation, add currency settings and custom categories, and deliver core expense recording.

Capacity: 20 points · Committed: 20

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-003 | Story | Sign out and session expiry | 5 | backend-agent | US-002 |
| US-006 | Story | Deactivate my account | 3 | backend-agent | US-002, US-003 |
| US-007 | Story | Record an expense | 5 | backend-agent | US-004, US-011 |
| US-012 | Story | Create a custom category | 3 | backend-agent | US-011 |
| US-014 | Story | Configure my currency | 3 | backend-agent | US-004 |
| US-020 | Story | Free to use with no payment features | 1 | qa-agent | — |

## Sprint 3: Sprint 3

Deliver expense browsing/filtering, editing, deletion, custom category rename/delete with reassignment, and CSV export.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-008 | Story | Browse expense history | 5 | frontend-agent | US-007 |
| US-009 | Story | Edit a recorded expense | 3 | backend-agent | US-007 |
| US-010 | Story | Delete a recorded expense | 2 | backend-agent | US-007 |
| US-013 | Story | Manage custom categories | 5 | backend-agent | US-012, US-007 |
| US-018 | Story | Export expense history as CSV | 3 | backend-agent | US-007, US-014 |

## Sprint 4: Sprint 4

Launch the personal dashboard and the spending-by-category report.

Capacity: 20 points · Committed: 13

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-015 | Story | Personal spending dashboard | 8 | frontend-agent | US-007, US-014 |
| ↳ US-015-T1 | Task | Implement dashboard summary aggregation endpoint | — | backend-agent | — |
| ↳ US-015-T2 | Task | Build dashboard summary and chart UI | — | frontend-agent | — |
| ↳ US-015-T3 | Task | Add dashboard empty-state view | — | frontend-agent | — |
| US-016 | Story | Spending by category report | 5 | backend-agent | US-007, US-014 |

## Sprint 5: Sprint 5

Deliver the spending-over-time report and make the whole app responsive across desktop and mobile.

Capacity: 20 points · Committed: 10

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-017 | Story | Spending over time report | 5 | backend-agent | US-007, US-014 |
| US-019 | Story | Use the app on desktop and mobile browsers | 5 | frontend-agent | US-008, US-015 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
