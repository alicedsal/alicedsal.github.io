# alicedsal.github.io

my portfolio: [alicedsal.github.io](https://alicedsal.github.io). built with next.js (static export), deployed to github pages with github actions.

## run it locally

```bash
npm install
npm run dev
```

then open http://localhost:3000.

## where things live

- `data/content.ts`: all the text (projects, experience, skills)
- `app/page.tsx`: the page layout
- `app/globals.css`: styles, light and dark mode
- `components/CursorTrail.tsx`: the colorful cursor trail in the empty space
- `.github/workflows/deploy.yml`: builds and publishes the site on every push to `main`
