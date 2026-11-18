<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-18

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Approved stack. Stores users, sessions, categories and expenses as related records with exact numeric money values, and powers category/time aggregation via SUM and GROUP BY; per-user scoping isolates each account's data.

## Consequences

A relational store needs schema migrations as the model evolves, accepted for the reliable aggregation and durability the reports and backups require.
<!-- sdlc:auto:end adr -->