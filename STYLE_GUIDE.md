| **Element**             | **Convention**                 | **Example**                 | **Rationale**                                                    |
| ----------------------- | ------------------------------ | --------------------------- | ---------------------------------------------------------------- |
| Component File Names    | `kebab-case`                   | `user-profile.tsx`          | Keeps file names lowercase and readable across OSes.             |
| Component Names         | `PascalCase`                   | `function UserProfile() {}` | Matches React convention for components.                         |
| Folder Names            | `kebab-case`                   | `user-profile/`             | Improves readability and avoids case sensitivity issues.         |
| Client Components       | `kebab-case` + `.client.tsx`   | `user-profile.client.tsx`   | Indicates client-side rendering, while staying consistent.       |
| Server Components       | `kebab-case` + `.server.tsx`   | `user-profile.server.tsx`   | Indicates server-side rendering.                                 |
| Hooks                   | `kebab-case`                   | `use-auth.ts`               | Matches file style while still using `use` prefix.               |
| Hook Names (in code)    | `camelCase`                    | `useAuth()`                 | React hook naming convention.                                    |
| Variables & Functions   | `camelCase`                    | `handleSubmit`, `userName`  | Standard JS/TS practice.                                         |
| Constants               | `UPPER_SNAKE_CASE`             | `API_URL`                   | Emphasizes immutability and config status.                       |
| Types & Interfaces      | `PascalCase`                   | `UserProps`, `AuthContext`  | TypeScript standard.                                             |
| Test Files              | `.test.tsx` / `.spec.tsx`      | `user-profile.test.tsx`     | Associates tests with target component, keeps naming consistent. |
| CSS Modules             | `.module.css` / `.module.scss` | `button.module.scss`        | Scoped styles, kebab-case for file names.                        |
| Higher-Order Components | `with` + `kebab-case`          | `with-auth.tsx`             | Clarifies purpose, follows file style.                           |
