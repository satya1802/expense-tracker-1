# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `95a725a` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
This is a generated two-app repository for an expense tracker: a Vite + React 19 single-page frontend containing fully approved, designed screens that currently render seeded sample data, and a FastAPI backend that is a bare scaffold (SQLAlchemy models, Pydantic schemas, a router package, and a single working /health endpoint) with no business logic yet since no backend architecture had been approved when it was generated. The backend defaults to a local SQLite database so it runs with no external services, though a PostgreSQL 16 container is available via docker-compose for when a real database is wired up. The frontend's API client (src/lib/api.ts) is the intended seam for connecting screens to the backend, one screen at a time.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js and npm (for the Vite/React 19 frontend)
- Python 3.12 (matches backend/Dockerfile base image)
- pip
- Docker and Docker Compose (optional, for the Postgres container in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository.
2. Backend: cd backend
3. pip install -r requirements.txt
4. (Optional) set DATABASE_URL to point at a real database; it defaults to sqlite:///./app.db
5. (Optional) set ALLOWED_ORIGINS (comma-separated) for CORS; it defaults to http://localhost:5173 and http://127.0.0.1:5173
6. uvicorn app.main:app --reload
7. Frontend: cd frontend
8. npm install
9. (Optional) set VITE_API_BASE_URL and VITE_API_SECRET_KEY; VITE_API_BASE_URL falls back to http://localhost:8000
10. npm run dev
11. (Optional) docker compose up db -- starts the Postgres 16 container defined in docker-compose.yml if you want a real database instead of SQLite
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| frontend dev | `npm run dev` | Starts the Vite dev server for the React SPA (frontend/). |
| backend dev | `uvicorn app.main:app --reload` | Runs the FastAPI app from backend/, auto-reloading on change; serves GET /health. |
| frontend build | `npm run build` | Bundles the frontend with Vite; does not typecheck. |
| frontend preview | `npm run preview` | Serves the production build locally. |
| db up | `docker compose up db` | Starts the PostgreSQL 16 container defined in docker-compose.yml (not wired to the backend by default, which uses SQLite). |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend` | FastAPI service scaffold. |
| `backend/app` | Application package: main.py (entrypoint, CORS, /health), database.py (engine/session), models.py (SQLAlchemy Base, no tables yet), schemas.py (Pydantic StubResponse), routers/ (empty package for per-component routers). |
| `backend/tests` | Pytest tests: tests/unit/ and tests/integration/ (currently a health check test). |
| `frontend` | Vite + React 19 single-page application, the approved app design. |
| `frontend/src` | App source: main.tsx entrypoint, lib/api.ts (API client/auth token helpers), lib/ui.tsx, lib/icons.tsx, lib/navigate.ts, index.css. |
| `frontend/e2e` | Playwright acceptance tests (e.g. example.spec.ts) and e2e support helpers. |
| `.devcontainer` | VS Code devcontainer configuration. |
| `.quorq` | Quorq platform metadata (handoff.json). |
| `docker-compose.yml` | Defines an optional PostgreSQL 16 service for local development. |
| `.env.example` | Template for environment variables used by the app. |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend routes are generated one router per architecture component and one route per declared endpoint; unimplemented routes return a typed StubResponse placeholder rather than raising, so the service always starts and documents its full OpenAPI spec.
- SQLAlchemy models all inherit from the shared Base in app/database.py; main.py imports models before calling Base.metadata.create_all on startup (no migrations yet).
- Configuration is environment-variable driven with safe local defaults: DATABASE_URL defaults to SQLite, ALLOWED_ORIGINS defaults to the local Vite dev origins.
- Frontend screens are generated from an approved design and currently render seeded sample data rather than calling the API; src/lib/api.ts (apiFetch, session token helpers) is the designated seam for wiring a screen to a real endpoint.
- apiFetch sends a Bearer token: the stored session token if present, otherwise the shared VITE_API_SECRET_KEY.
- Frontend component tests live beside the components/modules they cover and are picked up by Vitest's src/**/*.{test,spec}.{ts,tsx} pattern; Playwright e2e specs live separately in e2e/.
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| frontend unit tests | `npm test` | Runs Vitest component tests under src/. |
| frontend lint | `npm run lint` | Runs ESLint over the frontend app; this is the gate the platform runs during development. |
| frontend typecheck | `npm run typecheck` | Runs tsc --noEmit; not run by the build step. |
| frontend e2e install | `npm run test:e2e:install` | Installs the Chromium browser needed by Playwright. |
| frontend e2e tests | `npm run test:e2e` | Runs Playwright acceptance tests in e2e/; without E2E_BASE_URL it boots the backend (from backend/.venv) and builds/serves the frontend itself. |
| backend tests | `pytest` | Runs backend tests in tests/ (pytest.ini sets pythonpath=.); currently includes an integration health check. |
| backend lint | `ruff check .` | Lints the backend codebase with Ruff. |
| backend format | `ruff format .` | Formats the backend codebase with Ruff. |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend calls to the backend fail with a CORS error. | Set ALLOWED_ORIGINS to include the frontend's origin, or run the frontend on the default Vite dev ports (http://localhost:5173 / http://127.0.0.1:5173), which are allowed by default. |
| `pytest` fails with `ModuleNotFoundError: No module named 'app'` when run from the repo root. | Run pytest from the backend/ directory; pytest.ini sets pythonpath = . relative to that directory. |
| `npm run build` succeeds but the app has type errors. | vite build does not typecheck; run npm run typecheck (tsc --noEmit) separately to catch these before deploying. |
| `npm run test:e2e` fails because no browser is installed. | Run npm run test:e2e:install once to fetch the Chromium browser Playwright needs. |
| Backend data disappears or schema changes aren't picked up. | There are no migrations yet; tables are (re)created from models.py on startup via Base.metadata.create_all. Delete the local app.db SQLite file to reset the schema in development. |
<!-- sdlc:auto:end troubleshooting -->
