<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-18

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Google Cloud
- Azure

## Decision Outcome

Chosen option: AWS, because Approved stack. Hosts the static SPA (S3/CloudFront), the FastAPI service (App Runner) and managed PostgreSQL (RDS) in one place, with RDS automated backups protecting expense history and auto-scaling for growth.

## Consequences

Managed services add some cost over a single VM, offset by backups, scaling and lower operational burden fitting a free app that must grow with its user base.
<!-- sdlc:auto:end adr -->