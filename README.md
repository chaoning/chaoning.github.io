# Personal homepage

A single self-contained `index.html` (no build step, no dependencies). Modeled on
the clean academic layout of https://xiangzhou.github.io/.

## Preview locally
```bash
cd homepage
python3 -m http.server 8000
# open http://localhost:8000
```

## What to edit (search for `EDIT` in index.html)
- **Title / affiliation** — the `.title` and `.affil` lines in the hero.
- **Photo** — drop a square image at `assets/photo.jpg` (a placeholder shows until then).
- **Social links** — update the GitHub / Scholar / ORCID / Twitter URLs in the hero.
- **Publications** — replace the placeholder `<li>` items in the Publications section.
- **Software** — edit the cards; `fastreml` is pre-filled.
- **CV** — add `assets/cv.pdf`.

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
