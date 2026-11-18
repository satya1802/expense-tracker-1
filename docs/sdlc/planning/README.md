# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Each individual has a private account created with email and password; users can sign up, sign in, sign out, and manage their account, with data isolated per account.

Email delivery (e.g. SMTP) is out of scope for this version, so account flows do not depend on sending email (no email verification or email-based password reset in v1). Open assumption: no region-specific financial or data regulations are assumed to apply.

**Related:** US-001, US-002, US-003, US-004, US-005, US-006

### EPIC-002 · approved · source: planning:EPIC-002

Core capability: users record expenses with amount, date, category, and optional notes, and can browse, edit, and delete their expense history.

Open assumptions: automatic bank/card transaction import is out of scope (all expenses entered manually); receipt photo attachment and budgets/alerts are deferred out of v1.

**Related:** US-007, US-008, US-009, US-010

### EPIC-003 · approved · source: planning:EPIC-003

The app ships with a default set of spending categories and lets users create and manage their own custom categories, private per user.

**Related:** US-011, US-012, US-013

### EPIC-004 · approved · source: planning:EPIC-004

The app operates in a single currency per user, configurable in settings.

Open assumption: no multi-currency support and no currency conversion in v1 — all of a user's expenses are recorded and displayed in their single chosen currency.

**Related:** US-014

### EPIC-005 · approved · source: planning:EPIC-005

v1 includes visual summaries of spending: a personal dashboard plus reports/charts breaking spending down by category and over time.

Budgets and alerts are explicitly deferred out of v1 and are not part of these reports.

**Related:** US-015, US-016, US-017

### EPIC-006 · approved · source: planning:EPIC-006

Users can export their own expense history (e.g. CSV) for their records.

Export covers only the signed-in user's own data.

**Related:** US-018

### EPIC-007 · approved · source: planning:EPIC-007

The product is delivered as a responsive web application usable on desktop and mobile browsers; there is no native mobile app, and it is free to use with no payment, billing, or subscription features in v1.

**Related:** US-019, US-020
<!-- sdlc:auto:end narrative -->
