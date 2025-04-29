| **Element**             | **Convention**                  | **Example**                 | **Rationale**                                                    |
| ----------------------- | ------------------------------- | --------------------------- | ---------------------------------------------------------------- |
| Component File Names    | `PascalCase`                    | `UserProfile.tsx`           | Aligns with component naming, enhancing clarity and consistency. |
| Component Names         | `PascalCase`                    | `function UserProfile() {}` | Differentiates components from regular functions or variables.   |
| Folder Names            | `kebab-case`                    | `user-profile/`             | Improves readability and avoids case sensitivity issues.         |
| Client Components       | Suffix with `.client`           | `UserProfile.client.tsx`    | Indicates the component is meant for client-side rendering.      |
| Server Components       | Suffix with `.server`           | `UserProfile.server.tsx`    | Indicates the component is meant for server-side rendering.      |
| Hooks                   | `camelCase` with `use` prefix   | `useAuth.ts`                | Follows React hook conventions.                                  |
| Variables & Functions   | `camelCase`                     | `handleSubmit`, `userName`  | Standard JS naming for readability.                              |
| Constants               | `UPPER_SNAKE_CASE`              | `API_URL`                   | Clearly identifies immutables.                                   |
| Types & Interfaces      | `PascalCase`                    | `UserProps`, `AuthContext`  | Matches TypeScript best practices.                               |
| Test Files              | `.test.tsx` or `.spec.tsx`      | `UserProfile.test.tsx`      | Associates tests with components.                                |
| CSS Modules             | `.module.css` or `.module.scss` | `button.module.css`         | Enables locally scoped styles.                                   |
| Higher-Order Components | Prefix with `with`              | `withAuth.tsx`              | Clarifies the file is a HOC.                                     |
