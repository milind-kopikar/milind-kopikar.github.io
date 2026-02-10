# TutorFlow AI – Homepage

AI-powered AP Statistics tutor landing page. Built with Next.js (App Router) and Tailwind CSS.

## Run locally

```bash
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

1. **Push this repo to GitHub**  
   Use your existing repo: [milind-kopikar.github.io](https://github.com/milind-kopikar/milind-kopikar.github.io).  
   Add the remote (if not already set) and push:
   ```bash
   git remote add origin https://github.com/milind-kopikar/milind-kopikar.github.io.git
   git add .
   git commit -m "TutorFlow AI homepage"
   git branch -M main
   git push -u origin main
   ```
   (If the repo uses `master`, push to `master` instead.)

2. **Enable GitHub Pages from Actions**  
   In the repo: **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Trigger deployment**  
   Each push to `main` (or `master`) runs the workflow and deploys the built site. Your site will be at **https://milind-kopikar.github.io**.

## Project structure

- `app/` – Routes and layout (Next.js App Router)
- `components/` – Header, Footer, Hero, How It Works, Features
- `.github/workflows/deploy-gh-pages.yml` – Build and deploy to GitHub Pages
