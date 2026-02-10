# TutorFlow AI – Homepage

AI-powered AP Statistics tutor landing page. Built with Next.js (App Router) and Tailwind CSS.

## Run locally

```bash
cd "c:\Users\Milind Kopikare\Code\homepage"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production (static export)

```bash
npm run build
```

Output is in the `out/` folder (static HTML/CSS/JS for GitHub Pages).

## Deploy to GitHub Pages

1. **Push this repo** (already set to `origin`):
   ```bash
   git add .
   git commit -m "TutorFlow AI homepage"
   git push origin master
   ```

2. **Enable GitHub Pages from Actions**  
   In the repo: **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Trigger deployment**  
   Each push to `master` runs the workflow and deploys the built site. Your site will be at **https://milind-kopikar.github.io**.

## Project structure

- `app/` – Routes and layout (Next.js App Router)
- `components/` – Header, Footer, Hero, How It Works, Features

