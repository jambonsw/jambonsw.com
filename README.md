# Read Me

This repository contains the code for https://www.jambonsw.com .
The single HTML page is generated by Astro.
The site is deployed to Netlify.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Project Structure

The project has the following folders structure:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Base.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` files in the `src/pages/` directory.
Each page is exposed as a route based on its file name.

Static assets like images are placed in the `public/` directory.