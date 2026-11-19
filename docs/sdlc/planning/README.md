# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Gives every individual a private, email/password-based account with isolated data, with sign-up, sign-in, sign-out, password change and deactivation.

Goal: each individual has a private account created with email and password, with isolated per-account data; users can sign up, sign in, sign out and manage their account. Email delivery (SMTP) is explicitly out of scope for v1, so no account flow depends on sending email (no email verification, no email-based password reset). Open assumption noted in the epic: no region-specific financial or data regulations are assumed to apply.

**Related:** US-001, US-002, US-003, US-004, US-005, US-006

### EPIC-002 · approved · source: planning:EPIC-002

Core capability for users to record expenses (amount, date, category, optional notes) and to browse, edit and delete their expense history.

Goal: let users record expenses with amount, date, category and optional notes, and browse/edit/delete their history. Open assumptions stated in the epic: automatic bank/card transaction import is out of scope (all expenses entered manually); receipt photo attachment and budgets/alerts are deferred out of v1.

**Related:** US-007, US-008, US-009, US-010

### EPIC-003 · approved · source: planning:EPIC-003

Ships default spending categories and lets each user create and manage their own custom, private categories.

Goal: provide a default set of spending categories (e.g. food, transport, housing) out of the box, and let users create and manage their own custom categories; categories are private per user.

**Related:** US-011, US-012, US-013

### EPIC-004 · approved · source: planning:EPIC-004

Each user operates in a single, user-configurable currency with no multi-currency support.

Goal: the app operates in a single currency per user, configurable in settings. Open assumption stated in the epic: no multi-currency support and no currency conversion in v1 -- all of a user's expenses are recorded and displayed in their single chosen currency.

**Related:** US-014

### EPIC-005 · approved · source: planning:EPIC-005

Delivers a personal dashboard plus category and time-based spending reports/charts so users can visualize their spending.

Goal: v1 includes visual summaries of spending -- a personal dashboard plus reports/charts breaking spending down by category and over time. Budgets and alerts are explicitly deferred out of v1 and are not part of these reports.

**Related:** US-015, US-016, US-017

### EPIC-006 · approved · source: planning:EPIC-006

Lets users export their own expense history to CSV for personal recordkeeping.

Goal: users can export their own expense history (e.g. CSV) for their records; export covers only the signed-in user's own data.

**Related:** US-018

### EPIC-007 · approved · source: planning:EPIC-007

Delivers the product as a free, responsive web app usable on desktop and mobile browsers with no native app and no billing features.

Goal: the product is a responsive web application usable on desktop and mobile browsers; there is no native mobile app. It is free to use with no payment, billing or subscription features in v1.

**Related:** US-019, US-020

### SPRINT-1 · draft · source: planning:Sprint 1 (plan v1)

First sprint of plan v1 (capacity 20): stand up signup/login, enforce per-user data isolation, seed default categories, enable password change, and confirm no payment surfaces exist.

Sprint goal (as stated): "Stand up signup/login, enforce per-user data isolation, seed default categories, enable password change, and confirm no payment surfaces exist." Capacity: 20 points. Stories whose subject matter matches this goal: US-001 Sign up for an account (5 pts, backend-agent), US-002 Sign in to my account (3 pts, backend-agent), US-004 Private, isolated personal data (5 pts, security-agent), US-005 Change my password (3 pts, backend-agent), US-011 Use default categories (2 pts, backend-agent), US-020 Free to use with no payment features (1 pt, qa-agent) -- totaling 19 of 20 points. Sprint-to-story membership is inferred from matching the sprint goal text to story subject matter; the plan input did not list an explicit per-item sprint field.

**Related:** US-001, US-002, US-004, US-005, US-011, US-020

### SPRINT-2 · draft · source: planning:Sprint 2 (plan v1)

Second sprint of plan v1 (capacity 20): complete session lifecycle and deactivation, add currency settings and custom categories, and deliver core expense recording.

Sprint goal (as stated): "Complete session lifecycle and deactivation, add currency settings and custom categories, and deliver core expense recording." Capacity: 20 points. Stories whose subject matter matches this goal: US-003 Sign out and session expiry (5 pts, backend-agent), US-006 Deactivate my account (3 pts, backend-agent), US-014 Configure my currency (3 pts, backend-agent), US-012 Create a custom category (3 pts, backend-agent), US-007 Record an expense (5 pts, backend-agent) -- totaling 19 of 20 points. Sprint-to-story membership is inferred from matching the sprint goal text to story subject matter; the plan input did not list an explicit per-item sprint field.

**Related:** US-003, US-006, US-014, US-012, US-007

### SPRINT-3 · draft · source: planning:Sprint 3 (plan v1)

Third sprint of plan v1 (capacity 20): deliver expense browsing/filtering, editing, deletion, custom category rename/delete with reassignment, and CSV export.

Sprint goal (as stated): "Deliver expense browsing/filtering, editing, deletion, custom category rename/delete with reassignment, and CSV export." Capacity: 20 points. Stories whose subject matter matches this goal: US-008 Browse expense history (5 pts, frontend-agent), US-009 Edit a recorded expense (3 pts, backend-agent), US-010 Delete a recorded expense (2 pts, backend-agent), US-013 Manage custom categories (5 pts, backend-agent), US-018 Export expense history as CSV (3 pts, backend-agent) -- totaling 18 of 20 points. Sprint-to-story membership is inferred from matching the sprint goal text to story subject matter; the plan input did not list an explicit per-item sprint field.

**Related:** US-008, US-009, US-010, US-013, US-018

### SPRINT-4 · draft · source: planning:Sprint 4 (plan v1)

Fourth sprint of plan v1 (capacity 20): launch the personal dashboard and the spending-by-category report.

Sprint goal (as stated): "Launch the personal dashboard and the spending-by-category report." Capacity: 20 points. Stories whose subject matter matches this goal: US-015 Personal spending dashboard (8 pts, frontend-agent), US-016 Spending by category report (5 pts, backend-agent) -- totaling 13 of 20 points. US-015 also has three unpointed sub-tasks in the plan: US-015-T1 Implement dashboard summary aggregation endpoint (backend-agent), US-015-T2 Build dashboard summary and chart UI (frontend-agent), US-015-T3 Add dashboard empty-state view (frontend-agent). Sprint-to-story membership is inferred from matching the sprint goal text to story subject matter; the plan input did not list an explicit per-item sprint field.

**Related:** US-015, US-016

### SPRINT-5 · draft · source: planning:Sprint 5 (plan v1)

Fifth sprint of plan v1 (capacity 20): deliver the spending-over-time report and make the whole app responsive across desktop and mobile.

Sprint goal (as stated): "Deliver the spending-over-time report and make the whole app responsive across desktop and mobile." Capacity: 20 points. Stories whose subject matter matches this goal: US-017 Spending over time report (5 pts, backend-agent), US-019 Use the app on desktop and mobile browsers (5 pts, frontend-agent) -- totaling 10 of 20 points. Sprint-to-story membership is inferred from matching the sprint goal text to story subject matter; the plan input did not list an explicit per-item sprint field.

**Related:** US-017, US-019
<!-- sdlc:auto:end narrative -->
