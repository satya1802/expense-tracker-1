# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-TECHSTACK · approved · source: requirements:technology-stack

Technology stack approved by the product owner for this lightweight-scope app; design and build must use exactly these, no substitutions.

- Backend: FastAPI 0.115 — chosen because server work (sign-in, CRUD on expenses/categories, settings, report aggregation, CSV export) is modest and well-defined; FastAPI is lightweight and its automatic request validation keeps amount/date/category data clean.
- Cloud: AWS — hosts the whole app (web frontend, FastAPI backend, managed PostgreSQL) in one place, reliably and inexpensively, with room to grow as the user base grows.
- Database: PostgreSQL 16 — relational structure fits expenses/categories/users/settings and supports reliable sum/group aggregation for reports; isolates each user's data per account (privacy requirement); stores money values exactly to avoid rounding issues.
- Frontend: React 19 — supports the responsive, interactive screens needed (expense entry form, filterable history, reports/charts) and has mature charting libraries for category and over-time visual summaries.

### REQ-SERVICES · approved · source: requirements:technology-stack (cloud rationale)

The application is composed of three hosted components on AWS: a web frontend, a FastAPI backend, and a managed PostgreSQL database.

- Web frontend: serves the responsive React UI to desktop and mobile browsers.
- Backend API: FastAPI service handling authentication, CRUD for expenses/categories, settings, report aggregation, and CSV export.
- Managed database: PostgreSQL instance with managed backups, protecting expense history from loss.

**Related:** REQ-TECHSTACK

### REQ-SCOPE · approved · source: requirements:scope

Defines what v1 covers and explicitly excludes.

In scope: record an expense (amount, date, category, notes); browse personal expense history; edit/delete recorded expenses; default spending categories; create/manage custom categories; private individual account with sign-up/sign-in; personal spending dashboard; single configurable currency per user with no multi-currency conversion; default category set (e.g. food, transport, housing).
Out of scope — not to be designed or built: automatic bank/card transaction import; email (the SMTP server originally suggested was removed from the stack, so no email verification or email-based password reset).

### REQ-FEAT-SIGNIN · approved · source: requirements:functional:Sign-in & accounts

Account lifecycle: sign-up, sign-in, sign-out, password change, and deactivation.

- Sign up with email and password; rejected with a validation message if the email is already registered or the email format/password strength is invalid.
- Sign in with email and password, landing on the personal dashboard; incorrect credentials leave the user signed out.
- Sign out ends access until the user signs in again.
- Change password requires the current password plus a valid new one; rejected if current password is wrong.
- Deactivate account after confirmation closes the account; deactivated credentials can no longer be used to sign in.

### REQ-FEAT-RECORDING · approved · source: requirements:functional:Recording expenses

Create, edit, and delete individual expense records.

- Record an expense with a positive amount, a date, a category, and optional notes; missing/invalid amount or date is rejected with a validation message; a consistent rule applies when no category is chosen.
- Edit an existing expense's amount, date, category, or notes, with changes reflected in history and reports; invalid values are rejected and original values kept.
- Delete an expense after confirmation, removing it from history, reports, and exports; cancelling the confirmation keeps the expense.

### REQ-FEAT-HISTORY · approved · source: requirements:functional:Expense history

Browsing and filtering of recorded expenses.

- View expenses showing amount, date, category, and notes, ordered most-recent-first.
- Filter the list by category or by a date range to show only matching expenses.

### REQ-FEAT-CATEGORIES · approved · source: requirements:functional:Spending categories

Default and custom category management.

- New accounts come with a predefined default category set (e.g. food, transport, housing) available immediately.
- Create a custom category with a non-empty, non-duplicate name; it becomes selectable for recording/editing expenses; empty or duplicate names are rejected with a validation message.
- Rename a custom category to a valid, non-duplicate name, applied everywhere it appears including existing expenses.
- Deleting a category in use warns about affected expenses and, on confirmation, reassigns them to a defined fallback category.

### REQ-FEAT-REPORTS · approved · source: requirements:functional:Reports & dashboard

Dashboard and chart-based spending reports.

- Personal spending dashboard shows summary figures (e.g. total spending for a recent period) and a visual breakdown of spending.
- Spending-by-category report shows each category's total and share for a selected period, in the user's configured currency; changing the date range updates totals and chart.
- Spending-over-time report plots total spending by day, week, or month, in the user's configured currency; changing the time grouping or date range recalculates the chart.

### REQ-FEAT-SETTINGS · approved · source: requirements:functional:Settings

Currency configuration and free-to-use guarantee.

- Select a single currency from a supported list in settings, used to format amounts across expenses, reports, and exports; a sensible default applies until changed; changing currency only re-formats amounts with no numeric conversion.
- Every part of the app (recording expenses, reports, export) is usable without charge; no payment, billing, or subscription screens exist anywhere.

### REQ-FEAT-EXPORT · approved · source: requirements:functional:Data export

CSV export of the user's own expense history.

- Export expense history as CSV containing only the user's own expenses, with columns for amount, date, category, and notes, respecting any applied date range or category filter.
- When nothing matches the filter, a valid CSV with headers and no rows is produced, and the user is told there was nothing to export.

### NFR-001 · approved · source: requirements:NFR-001

Privacy: each user's data is visible only to them.

A signed-in user can only ever see and export their own expenses, categories, settings, and reports; no part of another user's data is returned to them.

### NFR-002 · approved · source: requirements:NFR-002

Security: passwords stored only as hashes.

Account passwords are stored only in hashed form and never in plain text, both at account creation and when the password is changed.

### NFR-003 · approved · source: requirements:NFR-003

Security: sessions end on sign-out, inactivity, and deactivation.

A session ends on sign-out, expires after a period of inactivity, and is ended for all active sessions when the account is deactivated; once ended or expired, the user must sign in again before any data can be accessed.

### NFR-004 · approved · source: requirements:NFR-004

Security: sign-in required for all data access.

Any attempt to reach an expense, category, report, or export page or endpoint without being signed in is denied and the user is directed to sign in.

### NFR-005 · approved · source: requirements:NFR-005

Security: generic sign-in failure message.

When sign-in fails, the user is shown a generic 'invalid credentials' message that does not reveal whether the email or the password was wrong.

### NFR-006 · approved · source: requirements:NFR-006

Compatibility: works on desktop and mobile browsers.

The app works as a responsive web application on desktop and mobile browsers; layout, forms, history, and charts adapt to screen size and remain usable on small screens without horizontal scrolling.

### NFR-007 · approved · source: requirements:NFR-007

Usability: helpful empty states instead of broken views.

When there is no matching data, the dashboard, expense history, and export show a helpful empty-state message prompting the user to add an expense, rather than empty or broken charts or errors.

### NFR-008 · approved · source: requirements:NFR-008

Availability: expense history protected against loss.

Users' expense history is held in a managed database with regular backups so recorded data is not lost.

### NFR-009 · approved · source: requirements:NFR-009

Scalability: hosting can grow with the user base.

The hosting can grow to serve a larger number of users as the user base grows, without re-architecting the app.

### NFR-010 · approved · source: requirements:NFR-010

Compliance: no region-specific regulations assumed (accepted risk).

No region-specific financial or data-protection regulations are assumed to apply in this version; the app is built without controls for any particular jurisdiction. This is an explicitly accepted risk, not a vetted compliance posture — a human should confirm whether this assumption still holds for the target market.
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-18

**Capabilities in scope:** Record an expense with amount, date, category and notes, Browse personal expense history, Edit and delete recorded expenses, Default spending categories, Create and manage custom categories, Private individual account with sign-up and sign-in, Personal spending dashboard, Single configurable currency per user, Default category set such as food, transport and housing, Single currency with no multi-currency conversion

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The server-side work here is modest and well-defined: sign-in, CRUD on expenses and categories, user settings, aggregating totals for the reports, and generating the CSV export. FastAPI is a lightweight Python framework that covers exactly this without heavy scaffolding, and its automatic request validation keeps amount/date/category data clean as it comes in. |
| cloud | AWS | A free, responsive web app with a database needs reliable, inexpensive hosting that can grow if the user base does. AWS covers the whole app — web frontend, FastAPI backend, and a managed PostgreSQL database — in one place, with a managed database option that handles backups so your users' expense history isn't at risk. |
| database | PostgreSQL | Expenses, categories, users and settings are structured, related records, and your reports depend on reliably summing and grouping amounts by category and by time period — exactly what a relational database with solid aggregation does best. It also keeps each user's data cleanly isolated behind their account, which your privacy requirement demands. Money values are stored exactly, avoiding rounding surprises in totals. |
| frontend | React | Your app is a responsive web app for desktop and mobile browsers with interactive screens — an expense entry form, a filterable history list, and the reports/charts that are a headline v1 feature. React handles this kind of live, data-driven interface well and has mature, well-supported charting libraries for the category and over-time visual summaries, so the charts don't become a custom-built burden. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Account and Authentication

Each individual has a private account created with email and password. Users can sign up, sign in, sign out and manage their account. Each account's data is private and isolated from other users. Note: email delivery (e.g. SMTP) is out of scope for this version, so account flows do not depend on sending email (no email verification or email-based password reset in v1). Open assumption: no region-specific financial or data regulations are assumed to apply.

### US-001: Sign up for an account

**Priority:** critical

> As a new individual user, I want to register with my email address and a password, so that I have a private account to track my personal spending.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am on the sign-up page and no account exists for the email <your-email> | I submit <your-email> with a valid password <your-password> | my account is created, my password is stored only in hashed form (never in plain text), and I am signed in or directed to sign in |
| AC-002 | an account already exists for the email <your-email> | I attempt to sign up again with <your-email> | registration is rejected and I am told the email is already registered |
| AC-003 | I am on the sign-up page | I submit an invalid email format or a password that does not meet the minimum strength rules | the account is not created and I see a validation message explaining what to correct |

### US-002: Sign in to my account

**Priority:** critical

> As a registered user, I want to sign in with my email and password, so that I can access my own expense data.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I have a registered account with email <your-email> and password <your-password> | I submit the correct email and password | I am signed in and taken to my personal dashboard |
| AC-005 | I am on the sign-in page | I submit an incorrect email or password | I am not signed in and I see a generic message that the credentials are invalid |

### US-003: Sign out and session expiry

**Priority:** high

> As a signed-in user, I want my session to end when I sign out and to expire after a period of inactivity, so that my private data cannot be accessed from an unattended or abandoned session.

| ID | Given | When | Then |
|---|---|---|---|
| AC-006 | I am signed in | I choose to sign out | my session ends and I must sign in again to access any of my data |
| AC-007 | I am signed in but inactive beyond the configured session lifetime | I next attempt an action | the expired session is rejected and I am required to sign in again |

### US-004: Private, isolated personal data

**Priority:** critical

> As a user, I want my expenses, categories and settings to be visible only to me, so that my financial information stays private from other users.

| ID | Given | When | Then |
|---|---|---|---|
| AC-008 | user A and user B each have their own account with their own expenses | user A is signed in and views expenses, reports or exports | only user A's data is returned and none of user B's data is visible |
| AC-009 | I am not signed in | I attempt to access any expense, category, report or export endpoint or page | access is denied and I am directed to sign in |

### US-005: Change my password

**Priority:** medium

> As a signed-in user, I want to change my account password, so that I can keep my account secure.

| ID | Given | When | Then |
|---|---|---|---|
| AC-010 | I am signed in and viewing account settings | I provide my current password <your-current-password> and a valid new password <your-new-password> | my password is updated, stored only in hashed form, and I can sign in with the new password |
| AC-011 | I am changing my password | I provide an incorrect current password | the change is rejected and my password remains unchanged |

### US-006: Deactivate my account

**Priority:** low

> As a user, I want to deactivate or close my account, so that I can stop using the service and end access to my data.

| ID | Given | When | Then |
|---|---|---|---|
| AC-012 | I am signed in | I confirm deactivation of my account | my account is deactivated, any active sessions for the account are ended, and I can no longer sign in with the deactivated credentials |

## EPIC-002: Expense Recording and Management

The core capability: users record expenses with amount, date, category and optional notes, and can browse, edit and delete their expense history. Open assumptions reflected here: automatic bank/card transaction import is out of scope (all expenses are entered manually); receipt photo attachment and budgets/alerts are deferred out of v1.

### US-007: Record an expense

**Priority:** critical

> As a signed-in user, I want to record an expense with an amount, date, category and optional notes, so that I can keep a log of my personal spending.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | I am signed in and on the add-expense form | I enter a positive amount, a date, select a category and optionally add notes, then save | the expense is saved to my account and appears in my expense history |
| AC-014 | I am adding an expense | I leave the amount or date empty, or enter a non-positive or non-numeric amount | the expense is not saved and I see a validation message indicating what is required |
| AC-015 | I am adding an expense | I save without choosing a category | either a category is required before saving or the expense is assigned a defined default/uncategorised category, and the rule applied is consistent and shown to me |

### US-008: Browse expense history

**Priority:** high

> As a signed-in user, I want to view a list of my recorded expenses, so that I can review where my money has gone.

| ID | Given | When | Then |
|---|---|---|---|
| AC-016 | I have recorded expenses | I open my expense history | I see my expenses showing amount, date, category and notes, ordered by date with the most recent first |
| AC-017 | I have many recorded expenses | I filter by category or by a date range | only the expenses matching the filter are shown |
| AC-018 | I have no recorded expenses | I open my expense history | I see an empty-state message prompting me to add my first expense |

### US-009: Edit a recorded expense

**Priority:** high

> As a signed-in user, I want to edit an existing expense, so that I can correct mistakes in what I logged.

| ID | Given | When | Then |
|---|---|---|---|
| AC-019 | I have an existing expense in my history | I open it, change the amount, date, category or notes, and save | the updated values are stored and reflected in my history and reports |
| AC-020 | I am editing an expense | I enter invalid values such as an empty or non-positive amount | the change is rejected with a validation message and the original values are preserved |

### US-010: Delete a recorded expense

**Priority:** medium

> As a signed-in user, I want to delete an expense, so that I can remove entries I no longer want recorded.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | I have an existing expense in my history | I delete it and confirm | the expense is removed from my history and no longer counts toward my reports or exports |
| AC-022 | I choose to delete an expense | I am asked to confirm and I cancel | the expense is not deleted and remains in my history |

## EPIC-003: Spending Categories

The app ships with a default set of spending categories (e.g. food, transport, housing) and lets users create and manage their own custom categories. Categories are private per user.

### US-011: Use default categories

**Priority:** high

> As a new user, I want a set of default spending categories available from the start, so that I can categorise expenses immediately without setting anything up.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | my account has just been created | I open the add-expense form or category list | a predefined set of default categories such as food, transport and housing is available to choose from |

### US-012: Create a custom category

**Priority:** medium

> As a signed-in user, I want to add my own spending categories, so that I can organise expenses in a way that matches my life.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | I am managing my categories | I add a new category with a non-empty name that does not duplicate an existing category name | the new category is saved to my account and becomes selectable when recording or editing expenses |
| AC-025 | I am adding a category | I submit an empty name or a name that duplicates an existing category | the category is not created and I see a validation message |

### US-013: Manage custom categories

**Priority:** low

> As a signed-in user, I want to rename or remove my custom categories, so that I can keep my category list tidy and relevant.

| ID | Given | When | Then |
|---|---|---|---|
| AC-026 | I have a custom category | I rename it to a valid, non-duplicate name | the new name is applied everywhere the category appears, including existing expenses |
| AC-027 | I have a custom category that is used by existing expenses | I delete that category | I am warned about the affected expenses and, on confirmation, those expenses are reassigned to a defined fallback category rather than being deleted |

## EPIC-004: Currency Settings

The app operates in a single currency per user, configurable in settings. Open assumption surfaced here: there is no multi-currency support and no currency conversion in v1 — all of a user's expenses are recorded and displayed in their single chosen currency.

### US-014: Configure my currency

**Priority:** medium

> As a signed-in user, I want to set the single currency used for my expenses, so that amounts are shown in the currency I think in.

| ID | Given | When | Then |
|---|---|---|---|
| AC-028 | I am in settings | I select a currency from the supported list and save | my chosen currency is stored and used to format amounts across expenses, reports and exports |
| AC-029 | I have not changed my currency | I view my account for the first time | a sensible default currency is applied so amounts are always displayed with a currency |
| AC-030 | I have expenses recorded and I change my currency | I view my existing expenses | amounts are displayed with the newly selected currency symbol without any conversion of the numeric values (no exchange-rate calculation is applied) |

## EPIC-005: Reports, Charts and Dashboard

v1 includes visual summaries of spending so users can see where their money goes: a personal dashboard plus reports/charts that break spending down by category and over time. Budgets and alerts are explicitly deferred out of v1 and are not part of these reports.

### US-015: Personal spending dashboard

**Priority:** high

> As a signed-in user, I want a dashboard summarising my spending when I sign in, so that I get an at-a-glance view of my finances.

| ID | Given | When | Then |
|---|---|---|---|
| AC-031 | I have recorded expenses | I open my dashboard | I see summary figures such as total spending for a recent period and a visual breakdown of my spending |
| AC-032 | I have no recorded expenses | I open my dashboard | I see an empty-state view prompting me to record expenses instead of empty or broken charts |

### US-016: Spending by category report

**Priority:** high

> As a signed-in user, I want to see my spending grouped by category as a chart, so that I can see which categories I spend the most on.

| ID | Given | When | Then |
|---|---|---|---|
| AC-033 | I have expenses across several categories within a selected period | I open the spending-by-category report | I see each category's total and share of spending shown as a chart, using my configured currency |
| AC-034 | I apply a date range to the report | the range changes | the category totals and chart update to reflect only expenses within that range |

### US-017: Spending over time report

**Priority:** medium

> As a signed-in user, I want to see how my spending changes over time, so that I can spot trends in my spending.

| ID | Given | When | Then |
|---|---|---|---|
| AC-035 | I have expenses recorded across multiple periods | I open the spending-over-time report | I see my total spending plotted over time (e.g. by day, week or month) in my configured currency |
| AC-036 | I select a time grouping or date range | I change it | the chart recalculates to reflect the selected grouping and range |

## EPIC-006: Data Export

Users can export their own expense history (e.g. CSV) for their records. Export covers only the signed-in user's own data.

### US-018: Export expense history as CSV

**Priority:** medium

> As a signed-in user, I want to export my expense history to a CSV file, so that I can keep my own records or use the data elsewhere.

| ID | Given | When | Then |
|---|---|---|---|
| AC-037 | I am signed in and have recorded expenses | I request a CSV export | I receive a CSV file containing only my own expenses with columns for amount, date, category and notes |
| AC-038 | I apply a date range or category filter before exporting | I request the export | the CSV contains only the expenses matching the applied filters |
| AC-039 | I have no expenses matching the export | I request a CSV export | I receive a valid CSV with headers and no data rows, and I am informed there was nothing to export |

## EPIC-007: Responsive Web Platform

The product is delivered as a responsive web application usable on desktop and mobile browsers; there is no native mobile app. It is free to use with no payment, billing or subscription features in v1.

### US-019: Use the app on desktop and mobile browsers

**Priority:** high

> As a user, I want the app to adapt to my screen size, so that I can record and review expenses comfortably on both desktop and mobile.

| ID | Given | When | Then |
|---|---|---|---|
| AC-040 | I open the app in a desktop browser | the page loads | the layout, forms, history and charts are usable and readable at desktop widths |
| AC-041 | I open the app in a mobile browser | the page loads | the layout adapts to the small screen with navigation, forms and charts remaining usable without horizontal scrolling |

### US-020: Free to use with no payment features

**Priority:** low

> As a user, I want to use the whole app without any charges, so that I can track my spending at no cost.

| ID | Given | When | Then |
|---|---|---|---|
| AC-042 | I am using any part of the app including recording expenses, reports and export | I use these features | I am never asked to pay, enter billing details or start a subscription, and no payment or billing screens exist in v1 |
<!-- sdlc:auto:end epics -->
