# ⚛️ React Foundations ✨🚀

A compact, practical starter showcasing modern React patterns with TypeScript, Vite and Tailwind. Includes example hooks, an Axios API layer, modular UI components and simple auth simulation — perfect for learning, prototyping or building small production features. 🎯📦

## Quick start ⚡️
Install and run locally (macOS / Linux / Windows):

```bash
# clone (if needed)
git clone https://github.com/elliotgaramendi/devtalles.git
cd react-native-expo/o1-react-foundations

# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# run linter
npm run lint
```

## Functionalities ✨🎯🔥
- 🚀 Fast dev setup: Vite + TypeScript for instant feedback and great DX.
- 🔁 Data fetching & pagination: Axios-based API + reusable `useUsers` hook.
- 🧾 Users list: paginated table with sorting and row actions.
- 👤 Profile / Business card: reusable card to display user details.
- ❤️ Follow interaction: optimistic follow/unfollow UI via `useFollow`.
- 🔐 Simple auth simulation: global auth state with `AuthProvider`.
- 🎨 Tailwind-driven responsive UI: lightweight and consistent styling.
- 🧩 Component-first structure: pages, widgets and components for reusability.
- 🧪 Testable architecture: clear separation of concerns for unit tests.
- ⚙️ Network tooling: `requests.http` examples and API utilities.

## Quick links & notes 📝
- API layer: `src/infrastructure/api/users.api.ts`
- Hooks: `src/hooks/useUsers.ts`, `src/hooks/useFollow.tsx`
- Auth: `src/context/AuthContext.tsx`
- UI: `src/ui/pages/Home.tsx`, `src/ui/components/*`
- Tailwind config: `vite.config.ts` + `src/index.css`

## Contribute & troubleshoot 🛠️
- Open issues or PRs — contributions welcome! 🧑‍💻✨
- If API calls fail, check `requests.http` and `src/infrastructure/api/users.api.ts`.
- Run `npm run lint` to surface style/type issues.

## Connect — Socials 🤝🌐
- 📺 YouTube: https://www.youtube.com/@elliotgaramendi
- 🐙 GitHub: https://github.com/elliotgaramendi
- 💼 LinkedIn: https://www.linkedin.com/in/elliotgaramendi/
- 📸 Instagram: https://www.instagram.com/elliotgaramendi/

✨ Enjoy the project — happy hacking and learning! 🎉🚀🎬