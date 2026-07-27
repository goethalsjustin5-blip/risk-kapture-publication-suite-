/* global RK_DOCUMENTS */

const params = new URLSearchParams(window.location.search);
const documentKey = params.get("doc") || "master";
const record = RK_DOCUMENTS[documentKey] || RK_DOCUMENTS.master;

const title = document.getElementById("documentTitle");
const subtitle = document.getElementById("documentSubtitle");
const summary = document.getElementById("documentSummary");
const audience = document.getElementById("documentAudience");
const purpose = document.getElementById("documentPurpose");
const version = document.getElementById("documentVersion");
const classification = document.getElementById("documentClassification");
const decision = document.getElementById("documentDecision");
const statusText = document.getElementById("statusText");
const content = document.getElementById("documentContent");
const tocList = document.getElementById("tocList");
const pageTitle = document.querySelector("title");

pageTitle.textContent = `${record.title} | Risk Kapture™`;
title.textContent = record.title;
subtitle.textContent = record.subtitle;
summary.textContent = record.summary;
audience.textContent = record.audience;
purpose.textContent = record.purpose;
version.textContent = record.version;
classification.textContent = record.classification;
decision.textContent = record.decision;
statusText.textContent = record.status;

const financialCta = document.getElementById("financialCta");
if (["master", "executive", "investor"].includes(documentKey)) {
  financialCta.hidden = false;
}

content.innerHTML = record.sections.map((section, index) => {
  const id = section.id || `section-${index + 1}`;
  return `
    <section class="doc-section" id="${id}">
      <span class="section-number">${String(index + 1).padStart(2, "0")} / ${record.sections.length.toString().padStart(2, "0")}</span>
      <h2>${section.title}</h2>
      ${section.html}
    </section>
  `;
}).join("");

tocList.innerHTML = record.sections.map((section, index) => {
  const id = section.id || `section-${index + 1}`;
  return `<li><a href="#${id}">${section.title}</a></li>`;
}).join("");

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("rk-publication-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("rk-publication-theme", next);
});

document.getElementById("printDocument").addEventListener("click", () => window.print());

document.getElementById("copyLink").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const original = button.textContent;
  try {
    await navigator.clipboard.writeText(window.location.href);
    button.textContent = "Link copied";
  } catch (error) {
    button.textContent = "Copy failed";
  }
  setTimeout(() => { button.textContent = original; }, 1600);
});

const progress = document.getElementById("progress");
const sections = [...document.querySelectorAll(".doc-section")];
const tocLinks = [...document.querySelectorAll(".toc a")];

function updateProgress() {
  const root = document.documentElement;
  const max = root.scrollHeight - root.clientHeight;
  const percent = max > 0 ? (root.scrollTop / max) * 100 : 0;
  progress.style.width = `${percent}%`;

  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 150) current = section.id;
  }
  tocLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
