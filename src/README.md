This folder contains the source code and an opinionated structure to organize the app.

Structure:
- pages/        - top-level pages (e.g. Home, About)
- components/   - shared UI components (header, footer, common)
- hooks/        - custom React hooks
- context/      - React context providers
- services/     - API wrappers and integrations
- utils/        - small helper functions
- types/        - shared TypeScript types

Usage:
- Add pages to `pages/` and export them from `src/index.ts` if desired.
- Keep UI in `components/`, non-UI logic in `services/` and `hooks/`.
