# Personal homepage

A static multi-page site (no build step, no dependencies). Modeled on the clean
academic layout of https://xiangzhou.github.io/.

## Pages
- `index.html` — Home / bio + social links
- `research.html` — Research
- `publications.html` — Publications
- `software.html` — Software
- `cv.html` — CV & Contact

Shared styling lives in `assets/style.css`; the small nav/year script in
`assets/site.js`. The nav bar is duplicated in each page — if you add or rename a
page, update the `<ul id="menu">` block in all of them.

## Preview locally
```bash
cd homepage
python3 -m http.server 8000
# open http://localhost:8000
```

## What to edit (search for `EDIT` in the .html files)
- **Title / affiliation** — the `.title` and `.affil` lines in `index.html`.
- **Photo** — drop a square image at `assets/photo.jpg` (a placeholder shows until then).
- **Social links** — GitHub / Scholar / ORCID / Twitter URLs in `index.html`.
- **Publications** — replace the placeholder `<li>` items in `publications.html`.
- **Software** — edit the cards in `software.html`; `fastreml` is pre-filled.
- **CV** — add `assets/cv.pdf` (linked from `cv.html`).

## Deploy to GitHub Pages (username.github.io)
```bash
# 1. Create a repo named exactly:  chaoning.github.io  (use your GitHub username)
# 2. From this homepage/ folder:
git init
git add .
git commit -m "Personal homepage"
git branch -M main
git remote add origin https://github.com/chaoning/chaoning.github.io.git
git push -u origin main
```
The site goes live at `https://chaoning.github.io/` within a minute.
(In repo Settings → Pages, confirm the source is the `main` branch, root.)
