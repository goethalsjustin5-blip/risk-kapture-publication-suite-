# Risk Kapture™ Publication Suite

A live executive briefing portal and publication system for the Risk Kapture disaster-readiness data platform.

## Live site

- Executive portal: `https://goethalsjustin5-blip.github.io/risk-kapture-publication-suite-/`
- Publication library: `https://goethalsjustin5-blip.github.io/risk-kapture-publication-suite-/publications/`

## Complete publication library

The current release includes ten responsive, print-ready publications:

1. Master Strategy Book
2. Corporate Overview
3. Investor Strategy Memorandum
4. Government & FEMA White Paper
5. Carrier Executive Brief
6. Municipal Pilot Proposal
7. Congressional Brief
8. Strategic Partner Overview
9. Technical Architecture
10. Product Specification

Each publication includes:

- Defined audience and purpose
- Version and classification
- Explicit document-status disclosure
- The decision the publication is designed to support
- Sticky table of contents and reading progress
- Mobile and desktop layouts
- Light and dark themes
- Browser Print / PDF output
- Source links and program-status notes where applicable
- Legal, regulatory, technical, financial, and operational caveats

## Project structure

```text
index.html                         Executive portal
styles.css                         Portal design system
app.js                             Portal interactions and glossary
publications/index.html            Publication library
publications/document.html         Reusable document reader
publications/documents.js          Complete publication content registry
publications/publication.css       Publication design and print system
publications/publication.js        Renderer, TOC, progress, print, and themes
.github/workflows/deploy-pages.yml Automatic GitHub Pages deployment
.github/workflows/validate-publications.yml Automated syntax and link validation
```

## Automatic deployment

GitHub Pages is configured through GitHub Actions. Every push to `main` automatically validates and redeploys the site.

## Local preview

No build tools are required. Download the repository and open `index.html`, or run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Content controls

This portal is a strategic publication and demonstration environment. Insurance coverage, claim decisions, public-adjusting rules, grant eligibility, procurement, engineering, legal opinions, security requirements, financial forecasts, and customer-specific ROI must be validated by qualified professionals before operational or external reliance.

## Trademark notice

Risk Kapture™ is presented as a claimed trademark. Use of the ™ symbol does not represent federal trademark registration. Trademark clearance and registration should be handled by qualified counsel.
