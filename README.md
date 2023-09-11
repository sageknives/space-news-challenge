## Usage

View a single feed of articles, blog posts and reports using Space News with the ability to filter down results by text search.

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

To view a live demo you can visit [Demo Link]() which is hosted and [deployed to vercel](https://nextjs.org/docs/deployment) everytime a branch is merged to main.

## Libraries

Pros and Cons for choices

- React Query
  - Pros
    - Built in cacheing [Link]()
    - Easy to set cache time
    - Good Error Handling
    - Very configurable
  - Cons
    - Have to figure out a good cache time strategy
- Tailwind
  - Pros
    - Components are easy to still
    - SSR friendly
    - Typescript Friendly
    - Tailwind is very configurable and extendable[Link]()
  - Cons
    - It feels a bit verbose if you aren't used to it
- [Next.js](https://nextjs.org/)
  - Pros
    - Seo Friendly
    - Server Actions
  - Cons
    - TBD

## Suggestions if app was larger and need to scale

## Feature Suggestion

## Error and logging considerations

## Post Mortem

- [Tailwind Typograph]() could have been used to have simpler cleaner styling.

- Strategy for sort of feed
- Maybe tabs or ui selector for each type instead of all in one feed?
