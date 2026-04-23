# Repository Guidelines

## Project Structure & Module Organization
This repo is a Vite + React + TypeScript landing-page app. Application code lives in `src/`. The main landing route is `src/pages/V3.tsx` (served at `/`; `/v2`, `/v3`, and `/v4` redirect to `/`). `NotFound.tsx` handles unknown paths. Shared UI lives in `src/components` and `src/components/ui`, hooks live in `src/hooks`, and utilities live in `src/lib`. Static images and brand assets live in `src/assets` and `public/`. Tests live under `src/test`. Build output is generated into `dist/` and should not be edited manually.

## Build, Test, and Development Commands
- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite dev server on port `8080`.
- `npm run build`: create a production build in `dist/`.
- `npm run build:dev`: build with development mode settings.
- `npm run preview`: serve the built app locally for verification.
- `npm run lint`: run ESLint across the project.
- `npm run test`: run Vitest once in `jsdom`.
- `npm run test:watch`: run Vitest in watch mode while developing.

## Coding Style & Naming Conventions
Use TypeScript for app code and keep the existing 2-space indentation style. Components and page files use `PascalCase` (`NavLink.tsx`, `V3.tsx`); hooks and utilities use `camelCase` (`use-mobile.tsx`, `outbound.ts`). Prefer the `@/` alias for imports from `src`. Styling is primarily Tailwind-based; reuse existing tokens in `tailwind.config.ts` and shared shadcn UI primitives before adding one-off patterns. ESLint is the enforced code-quality check; no Prettier config is committed here, so match the surrounding file style.

## Testing Guidelines
Vitest and Testing Library are configured through `vitest.config.ts` and `src/test/setup.ts`. Add tests as `*.test.ts` or `*.test.tsx` anywhere under `src/`; colocated tests or files in `src/test` both work. There is no coverage gate configured, so focus on meaningful smoke tests for new routes, utilities, and interactive behavior.

## Commit & Pull Request Guidelines
Recent history uses short, imperative subjects such as `Route V3 as default landing` and `Replaced hero image`. Keep commit titles brief, specific, and feature-focused; avoid generic `Changes` when possible. PRs should include a short summary, linked issue or task when available, and before/after screenshots for UI updates since this repo is visually driven.

## Configuration Notes
Update the outbound click target in `src/lib/outbound.ts` before shipping campaigns. Do not commit secrets; keep deployment-specific values outside source when possible.
