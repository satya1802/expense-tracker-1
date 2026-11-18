# Data Model

<!-- sdlc:auto:start entities -->
### users

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| email | citext | False | — | False |
| password_hash | text | False | — | False |
| currency | varchar(3) | False | — | False |
| is_active | boolean | False | — | False |
| created_at | timestamptz | False | — | False |

### sessions

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| token_hash | text | False | — | False |
| created_at | timestamptz | False | — | False |
| last_seen_at | timestamptz | False | — | False |
| expires_at | timestamptz | False | — | False |
| revoked | boolean | False | — | False |

### categories

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| name | varchar(100) | False | — | False |
| is_default | boolean | False | — | False |
| is_fallback | boolean | False | — | False |
| created_at | timestamptz | False | — | False |

### expenses

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| user_id | uuid | False | users.id | False |
| category_id | uuid | False | categories.id | False |
| amount | numeric(12,2) | False | — | False |
| expense_date | date | False | — | False |
| notes | text | False | — | True |
| created_at | timestamptz | False | — | False |
| updated_at | timestamptz | False | — | False |
<!-- sdlc:auto:end entities -->

<!-- sdlc:auto:start relationships -->
| Source | Target | Type |
|---|---|---|
| users | sessions | one-to-many |
| users | categories | one-to-many |
| users | expenses | one-to-many |
| categories | expenses | one-to-many |
<!-- sdlc:auto:end relationships -->

<!-- sdlc:auto:start er-diagram -->
```mermaid
erDiagram
  users {
    uuid id PK
    citext email
    text password_hash
    varchar_3_ currency
    boolean is_active
    timestamptz created_at
  }
  sessions {
    uuid id PK
    uuid user_id FK
    text token_hash
    timestamptz created_at
    timestamptz last_seen_at
    timestamptz expires_at
    boolean revoked
  }
  categories {
    uuid id PK
    uuid user_id FK
    varchar_100_ name
    boolean is_default
    boolean is_fallback
    timestamptz created_at
  }
  expenses {
    uuid id PK
    uuid user_id FK
    uuid category_id FK
    numeric_12_2_ amount
    date expense_date
    text notes
    timestamptz created_at
    timestamptz updated_at
  }
  users ||--o{ sessions : "one-to-many"
  users ||--o{ categories : "one-to-many"
  users ||--o{ expenses : "one-to-many"
  categories ||--o{ expenses : "one-to-many"
```
<!-- sdlc:auto:end er-diagram -->
