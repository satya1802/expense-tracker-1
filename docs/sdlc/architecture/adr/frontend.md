<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-18

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because Approved stack. Built as a Vite SPA serving the expense form, filterable history, settings and chart-driven dashboard/reports; holds the opaque session token and sends it as Authorization: Bearer, reading the API base URL from VITE_API_BASE_URL.

## Consequences

Being a separate origin from the API means CORS must be configured and the token stored client-side rather than in a cookie; the mature React charting ecosystem keeps the reports work small.
<!-- sdlc:auto:end adr -->