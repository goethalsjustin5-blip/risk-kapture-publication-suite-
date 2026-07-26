const publications = {
  master: {
    eyebrow: "MASTER VOLUME",
    title: "Risk Kapture™ Master Strategy Book",
    summary: "The authoritative internal source from which every external publication, proposal, pilot brief, and executive presentation is derived.",
    sections: [
      "Strategic thesis, mission, and operating principles",
      "Disaster-recovery problem definition and stakeholder map",
      "Product lanes: Home, Carrier, and Civic",
      "Public, government-funded, restricted, and proprietary data layers",
      "NFIP, FEMA Public Assistance, mitigation, and funding alignment",
      "Business model, white-label strategy, and commercialization",
      "Technical architecture, security, evidence integrity, and observability",
      "Pilot design, implementation roadmap, metrics, risks, and governance",
      "Appendix library, glossary, source notes, and reusable exhibits"
    ]
  },
  investor: {
    eyebrow: "INVESTOR PUBLICATION",
    title: "Investor Strategy Memorandum",
    summary: "A capital-focused case for why Risk Kapture can become a durable disaster-data and workflow platform rather than another isolated estimating application.",
    sections: [
      "Executive investment thesis",
      "Why now and structural market timing",
      "Customer pain and economic consequences",
      "Platform, data moat, and defensibility",
      "Market segmentation and commercial pathways",
      "Revenue model and unit-economics framework",
      "Pilot milestones and proof points",
      "Go-to-market and distribution strategy",
      "Capital plan, use of funds, risks, and return pathways"
    ]
  },
  government: {
    eyebrow: "PUBLIC-SECTOR PUBLICATION",
    title: "Government & FEMA White Paper",
    summary: "A policy and implementation case for preparing claims, public-asset, and recovery documentation before disasters create administrative overload.",
    sections: [
      "National documentation and recovery problem",
      "Community readiness and public benefit",
      "NFIP policyholder documentation opportunity",
      "FEMA Public Assistance Categories A–G",
      "Sections 406 and 428 support workflows",
      "Mitigation and preparedness funding alignment",
      "Public-private pilot structure",
      "Procurement, governance, privacy, and critical-infrastructure controls",
      "Program metrics, taxpayer value, and legislative options"
    ]
  },
  carrier: {
    eyebrow: "INSURANCE PUBLICATION",
    title: "Carrier Executive Brief",
    summary: "An operational brief focused on claims quality, cycle time, advance-payment confidence, customer experience, fraud controls, and integration.",
    sections: [
      "Current-state claims friction",
      "Pre-loss property vault and onboarding model",
      "Post-loss evidence and verification workflow",
      "Claim-package completeness and review queues",
      "Advance-payment recommendation framework",
      "Fraud and anomaly flags with human oversight",
      "Claims-system and API integration",
      "Security, auditability, retention, and consent",
      "Pilot KPIs, ROI assumptions, and scaling path"
    ]
  },
  municipal: {
    eyebrow: "COMMUNITY PUBLICATION",
    title: "Municipal Pilot Proposal",
    summary: "A deployable pilot model for resident readiness, public-asset records, damage documentation, FEMA support, and community recovery coordination.",
    sections: [
      "Community selection and readiness assessment",
      "Public asset and critical-facility inventory",
      "Opt-in resident property vault",
      "Command map and relief-resource layer",
      "Post-event field and damage documentation",
      "Public Assistance and insurance organization",
      "Mitigation-opportunity pipeline",
      "Deployment team, timeline, budget framework, and governance",
      "Success metrics and after-action report"
    ]
  },
  congressional: {
    eyebrow: "LEGISLATIVE PUBLICATION",
    title: "Congressional Brief",
    summary: "A concise policy proposal for a pre-disaster community asset and claims-readiness pilot serving high-risk and underserved communities.",
    sections: [
      "The constituent recovery problem",
      "Why documentation should begin before disaster",
      "Proposed pilot authority and participating communities",
      "Eligible activities and public-private delivery model",
      "Funding range and federal coordination",
      "Taxpayer-protection and program-integrity controls",
      "Performance measures and reporting",
      "Constituent, municipal, carrier, and federal benefits"
    ]
  }
};

const glossary = [
  ["Advance Assistance", "Pre-award support that may help communities develop mitigation strategies and complete project applications."],
  ["BRIC", "Building Resilient Infrastructure and Communities, a FEMA mitigation grant program framework."],
  ["CAP-SSSE", "Community Assistance Program—State Support Services Element, supporting state NFIP assistance and floodplain-management work."],
  ["Chain of Custody", "The documented history of who created, accessed, changed, transferred, or relied on an evidence item."],
  ["CTP", "Cooperating Technical Partners, organizations that collaborate with FEMA on flood-hazard and risk-identification activities."],
  ["CUI", "Controlled Unclassified Information subject to safeguarding or dissemination requirements."],
  ["FMA", "Flood Mitigation Assistance, supporting activities that reduce or eliminate repetitive flood damage to NFIP-insured structures."],
  ["HMGP", "Hazard Mitigation Grant Program, which supports mitigation following a presidential major-disaster declaration."],
  ["ICC", "Increased Cost of Compliance coverage under qualifying NFIP flood policies."],
  ["NFHL", "National Flood Hazard Layer, FEMA's geospatial database of current effective flood-hazard information."],
  ["NFIP", "National Flood Insurance Program."],
  ["OpenFEMA", "FEMA's public-data platform and dataset catalog."],
  ["PCII", "Protected Critical Infrastructure Information voluntarily shared with government and protected under applicable rules."],
  ["PII", "Personally Identifiable Information, such as names, addresses, policy data, and other information tied to an individual."],
  ["PostGIS", "A PostgreSQL extension for storing, indexing, and analyzing geospatial data."],
  ["Proof of Loss", "A signed statement and supporting documentation describing the amount claimed under an insurance policy."],
  ["Public Assistance", "FEMA's program supporting eligible emergency work and restoration of public infrastructure after qualifying disasters."],
  ["Risk MAP", "FEMA's Risk Mapping, Assessment and Planning framework for flood-risk information and community resilience."],
  ["Section 406", "Stafford Act authority for repair, restoration, reconstruction, replacement, and eligible mitigation tied to damaged public facilities."],
  ["Section 428", "Stafford Act Public Assistance alternative procedures, including fixed estimates and consolidated project options."],
  ["WORM", "Write Once, Read Many storage controls designed to prevent alteration or deletion during a retention period."],
  ["WYO", "Write Your Own insurer participating in the NFIP under an arrangement with FEMA."]
];

const dialog = document.getElementById("publicationDialog");
const dialogContent = document.getElementById("dialogContent");

document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const publication = publications[button.dataset.open];
    dialogContent.innerHTML = `
      <div class="eyebrow">${publication.eyebrow}</div>
      <h2>${publication.title}</h2>
      <p>${publication.summary}</p>
      <h3>Proposed structure</h3>
      <ol>${publication.sections.map((section) => `<li>${section}</li>`).join("")}</ol>
      <div class="callout"><span>PUBLICATION STANDARD</span><p>Each volume will use the same visual system, verified terminology, audience-specific framing, source notes, glossary, print styles, and reusable diagrams.</p></div>
    `;
    dialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const box = dialog.getBoundingClientRect();
  const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  if (outside) dialog.close();
});

const glossaryGrid = document.getElementById("glossaryGrid");
const glossarySearch = document.getElementById("glossarySearch");

function renderGlossary(query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = glossary.filter(([term, definition]) => `${term} ${definition}`.toLowerCase().includes(normalized));
  glossaryGrid.innerHTML = filtered.length
    ? filtered.map(([term, definition]) => `<article class="glossary-item"><b>${term}</b><p>${definition}</p></article>`).join("")
    : `<p>No glossary terms match “${query}.”</p>`;
}

glossarySearch.addEventListener("input", (event) => renderGlossary(event.target.value));
renderGlossary();

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("rk-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("rk-theme", next);
});
