## Usage

View a single feed of articles, blog posts and reports using [Space News API](https://api.spaceflightnewsapi.net/v4/docs/) with the ability to filter down results by text search.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Supports hot-reloading.

Alternative, build and start a production version locally:

```bash
npm run build && npm run start
# or
yarn build && yarn start
# or
pnpm build && pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Does not support hot reloading.

To view a live demo you can visit [Demo Link](https://space-news-challenge.vercel.app/) which is hosted and [deployed to vercel](https://nextjs.org/docs/deployment) everytime a branch is merged to main.

## Libraries (State Management)

ReactQuery for server state paired with React hooks and contexts for UI state makes for a simple frontend that is very maintainable.

### React Query

- Pros
  - Built in caching [link](https://tanstack.com/query/v4/docs/react/guides/caching)
  - Great documentation [docs](https://tanstack.com/query/v4/docs/react/overview)
  - Good Error Handling
  - Very configurable API
  - SSR friendly [NextJs Support](https://tanstack.com/query/v4/docs/react/guides/ssr#using-nextjs)
  - Typescript Friendly
- Cons
  - Have to figure out a good cache / stale time strategy

### React Hooks / Context

- Pros
  - Built in
  - Great Documentation
- Cons
  - Some hooks can lead to bad performance if not done properly

## Libraries (Other State Management Options)

- [Jotai](https://jotai.org/)
- [Redux](https://redux.js.org/)
- [Zustand](https://docs.pmnd.rs/zustand)
- [Signia](https://signia.tldraw.dev/) (signals!)
- [MobX](https://mobx.js.org/README.html)

## Styling

### Tailwind [docs](https://tailwindcss.com/docs/installation) [site](https://tailwindcss.com/)

- Pros
  - Components are easy to style
  - consistency is good because of tailwind's variables
  - SSR friendly
  - Typescript Friendly(even better with this [plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) and linter/prettier)
  - Tailwind is very configurable and extendable [link](https://tailwindcss.com/docs/configuration)
- Cons
  - It feels a bit verbose if you aren't used to it

## Other Styling options

### MUI [site](https://mui.com/)

- Good Documentation
- Themable
- Not SSR friendly
- More than you usually need

### StyledComponents [site](https://styled-components.com/)

- Compared to the simplicity of Tailwind it seems like you writing a lot.
- Less performant because you have more javascript than tailwind

## Framework

### Next.js [site](https://nextjs.org/)

- Pros
  - Seo Friendly
  - Server Actions
  - Great documentation
  - Easy to deploy to vercel
  - Can deploy in Docker
- Cons
  - A full framework that is growing and changing

## Suggestions if app was larger and need to scale

### Styling

- Use a tailwind design system to keep styles and components consistent
- [Libraries](https://blog.logrocket.com/10-best-tailwind-css-component-libraries/)

### Feed API

- The calls to SNAPI could be cached on our server periodically being updated for a better sorting experience.
- Adding a filter to let the user choose Article, Blog or Report would also make sorting a filtering better for the user.

## Feature Suggestion

- Nice to have a dashboard with metadata about each type
- Infinite scrolling
- Implement additional filtering for the feed
  - New site
  - Article, Blog or Report
  - Time Period
- Add the search and page to the browser URL so it's sharable with others

## Error and logging considerations

- Choosing what we want to track
- Sending Errors, logs and analytics somewhere to be stored
  - This will help with on call alerts
  - Debugging
  - Data driven development

## Post Mortem

- Added testing.
- Added Zod [link](https://zod.dev/?id=introduction)
- Used a TailwindCSS Library for components
- Image fallbacks and better image caching
