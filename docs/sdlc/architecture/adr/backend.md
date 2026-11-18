<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-18

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Flask
- Django REST Framework

## Decision Outcome

Chosen option: FastAPI 0.115, because Approved stack. Handles sign-in, expense/category CRUD, settings, SQL-backed report aggregation and in-process CSV generation; Pydantic validation keeps amount/date/category input clean on entry.

## Consequences

Minimal batteries-included scaffolding means auth, hashing and sessions are assembled explicitly, which suits this modest, well-defined scope.
<!-- sdlc:auto:end adr -->