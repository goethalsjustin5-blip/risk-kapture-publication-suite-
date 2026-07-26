# Risk Kapture™ Publication Suite

A shareable executive briefing portal for the Risk Kapture disaster-readiness data platform.

## Current release

The first working release includes:

- Responsive executive portal
- Light and dark themes
- Publication-library overview
- Investor, government, carrier, municipal, congressional, and master-volume outlines
- Shared platform architecture
- Pilot vertical-slice roadmap
- Searchable glossary
- Print-friendly styling

## Project structure

```text
index.html      Main executive portal
styles.css      Shared publication and interface design system
app.js          Publication content, glossary, theme, and dialog interactions
README.md       Project documentation
```

## Local preview

No build tools are required.

1. Download or clone the repository.
2. Open `index.html` in a modern browser.

For a local web server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

The portal is designed to run directly from the repository root. To publish it:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save.

GitHub will provide the public URL after deployment completes.

## Planned publication library

- Risk Kapture™ Master Strategy Book
- Investor Strategy Memorandum
- Government & FEMA White Paper
- Carrier Executive Brief
- Municipal Pilot Proposal
- Congressional Brief
- Partner Overview
- Technical Architecture
- Product Specification
- Executive leave-behind and one-page opportunity summary

## Content controls

This portal is currently a confidential strategy prototype. Federal-program descriptions, statutory interpretations, insurance workflows, security assertions, market estimates, and financial assumptions must be validated before formal external reliance.

## Trademark notice

Risk Kapture™ is presented as a claimed trademark. Use of the ™ symbol does not represent federal trademark registration. Trademark clearance and registration should be handled by qualified counsel.
