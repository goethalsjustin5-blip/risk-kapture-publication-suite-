const RK_DOCUMENTS = {
  master: {
    title: "Master Strategy Book",
    subtitle: "The authoritative strategy, product, policy, commercialization, and implementation source for Risk Kapture™.",
    summary: "Risk Kapture changes disaster recovery by creating a trusted record before a loss, using that record to verify damage after a loss, and organizing the evidence required to move insurance and public recovery workflows faster.",
    audience: "Founders, board, senior operators, strategic advisers",
    purpose: "Canonical internal strategy",
    version: "1.0 · July 26, 2026",
    classification: "Confidential draft",
    status: "Publication-quality strategic draft. Core product and technical direction is decision-ready. Market sizing, pricing, legal opinions, procurement pathways, and customer-specific ROI remain validation workstreams.",
    decision: "Approve the platform thesis, first vertical slice, pilot design, operating model, and the sequencing required to move from executive demonstration to a controlled real-world pilot.",
    sections: [
      {
        id: "thesis",
        title: "Executive thesis",
        html: `
          <blockquote><p>Document before disaster. Verify after disaster. Move money faster. Rebuild smarter.</p></blockquote>
          <p>Risk Kapture is a disaster-readiness data and workflow platform. It creates structured pre-loss records for homes, contents, public assets, policies, facilities, and critical recovery information. After a loss, the same record becomes the baseline for damage documentation, claim-package preparation, public-assistance organization, mitigation analysis, and recovery coordination.</p>
          <p>The core strategic insight is that disaster recovery is frequently constrained less by the theoretical availability of money than by the absence of organized, trusted, reviewable evidence. The platform therefore should not compete as another isolated estimating application. Its defensible position is the shared record connecting the policyholder, carrier, municipality, contractor, engineer, adjuster, grant manager, and public agency.</p>
          <div class="metric-row">
            <div class="metric"><b>3</b><span>Operating lanes: Home, Carrier, Civic</span></div>
            <div class="metric"><b>4</b><span>Data-control layers</span></div>
            <div class="metric"><b>1</b><span>Shared evidence and recovery foundation</span></div>
          </div>
          <div class="callout success"><strong>STRATEGIC POSITION</strong><p>The moat is the governed, reusable record and the workflow around it—not one estimate, one model, or one user interface.</p></div>
        `
      },
      {
        id: "problem",
        title: "The system problem",
        html: `
          <p>Disasters destroy or separate the people, property, records, and operating capacity required to document the loss. Policyholders must inventory contents after items have been damaged or discarded. Municipal teams must establish pre-loss condition, insurance, dimensions, ownership, procurement history, and eligible work after facilities are impaired. Carriers receive incomplete files while field resources are overloaded.</p>
          <h3>Observed failure pattern</h3>
          <ul>
            <li>Evidence is collected after the event rather than maintained before it.</li>
            <li>Insurance, municipal, contractor, and federal workflows operate in separate systems.</li>
            <li>Residents do not know what documentation, assistance, appeal, or mitigation path applies.</li>
            <li>Repeated inspections and duplicate data entry increase cost and delay.</li>
            <li>Weak provenance makes otherwise useful photos, estimates, and records harder to rely upon.</li>
          </ul>
          <h3>Why point solutions are insufficient</h3>
          <p>Estimating, floor-plan capture, photo documentation, claim administration, grant management, and mapping products each solve part of the process. Risk Kapture should integrate with useful incumbents rather than attempt to replace every one. Its differentiated job is to maintain a cross-event record, enforce evidence controls, and route information into the appropriate downstream workflow.</p>
          <div class="callout warning"><strong>DISCIPLINE</strong><p>Avoid unsupported claims that the platform will autonomously settle claims, determine coverage, replace licensed professionals, or guarantee eligibility. The first proof must be documentation quality and workflow speed.</p></div>
        `
      },
      {
        id: "platform",
        title: "Platform and product lanes",
        html: `
          <h3>Risk Kapture Home</h3>
          <p>For homeowners, renters, small businesses, and insured residents. Before loss, users create a secure property and contents record through guided mobile capture. After loss, they enter an event-specific workflow to document damage, emergency work, receipts, contractor information, and claim-support materials.</p>
          <ul><li>Property profile, occupancy, construction, and geolocation</li><li>Room, exterior, appliance, mechanical, and contents records</li><li>Policy, mortgagee, emergency contact, receipt, and warranty organization</li><li>Post-loss photos, video, waterline or impact evidence, and expense records</li><li>Structured exports for review by the policyholder and authorized professionals</li></ul>
          <h3>Risk Kapture Carrier</h3>
          <p>For insurers, Write Your Own flood carriers, reinsurers, servicers, and claim organizations. The carrier experience should be a desktop review environment, separate from the field capture application.</p>
          <ul><li>White-labeled enrollment and policyholder property vault</li><li>Pre-loss versus post-loss comparison</li><li>Evidence completeness, quality, provenance, and exception queues</li><li>Human-reviewed estimate and payment-support workflows</li><li>API export to existing claims and document systems</li></ul>
          <h3>Risk Kapture Civic</h3>
          <p>For municipalities, counties, parishes, tribes, utilities, school districts, housing authorities, and emergency-management organizations.</p>
          <ul><li>Public asset and facility registry</li><li>Insurance schedules and pre-loss condition records</li><li>Damage inventory and Public Assistance work categorization support</li><li>Mitigation-opportunity tracking and recovery scenarios</li><li>Community command map and public-resource layers</li></ul>
        `
      },
      {
        id: "journeys",
        title: "Core user journeys",
        html: `
          <div class="table-wrap"><table><thead><tr><th>Stage</th><th>Resident / insured</th><th>Carrier</th><th>Municipality</th></tr></thead><tbody>
            <tr><td>Enroll</td><td>QR or direct onboarding; identity, property, policy, consent</td><td>Offer white-labeled enrollment; associate policy and account</td><td>Define pilot geography, assets, roles, and resident campaign</td></tr>
            <tr><td>Prepare</td><td>Capture rooms, contents, exterior, systems, receipts</td><td>Monitor readiness and missing-data indicators</td><td>Document facilities, insurance, condition, replacement context</td></tr>
            <tr><td>Event</td><td>Open claim mode; capture damage and emergency work</td><td>Receive verified evidence and review exceptions</td><td>Activate damage inventory, command map, and field teams</td></tr>
            <tr><td>Package</td><td>Review, sign, export, and submit through authorized channels</td><td>Review completeness, estimates, anomalies, and decisions</td><td>Organize sites, work, insurance, procurement, and mitigation records</td></tr>
            <tr><td>Recover</td><td>Track repairs, receipts, appeals, and replaced inventory</td><td>Maintain decision trail and supplemental documentation</td><td>Track projects, closeout, mitigation, and after-action findings</td></tr>
          </tbody></table></div>
          <p>Every journey must preserve the difference between a user assertion, uploaded evidence, system-derived metadata, model output, professional opinion, and authorized final decision.</p>
        `
      },
      {
        id: "data",
        title: "Data strategy and defensibility",
        html: `
          <h3>Layer 1 — Public and open data</h3><p>Disaster declarations, flood-hazard layers, weather and gauge data, public parcel information, demographic context, public grant data, and public facility information. These sources establish baseline risk and eligibility context but require freshness, provenance, licensing, and quality controls.</p>
          <h3>Layer 2 — Government-funded community data</h3><p>Public asset inventories, non-sensitive facility records, vulnerability assessments, mitigation scopes, and public recovery information created under approved public work. Contract terms must clearly establish ownership, reuse, publication, and retention rights.</p>
          <h3>Layer 3 — Restricted and consented private data</h3><p>Home scans, policy information, receipts, personal claim records, private photos and video, and sensitive facility details. This layer requires explicit consent, least-privilege access, retention controls, segregation, redaction, and auditability.</p>
          <h3>Layer 4 — Proprietary intelligence</h3><p>Readiness scoring, document-completeness logic, workflow routing, estimate versioning, quality controls, anomaly detection, municipal recovery readiness, mitigation opportunity analysis, and portfolio analytics.</p>
          <div class="callout success"><strong>DEFENSIBILITY</strong><p>Public data reduces the cost of the baseline. Customer value is created by trusted workflow, evidence governance, integration, and accumulated operational learning.</p></div>
        `
      },
      {
        id: "public-sector",
        title: "Public-sector alignment and current program status",
        html: `
          <p>Risk Kapture should be positioned as a technology and documentation platform that may support eligible preparedness, mapping, mitigation, insurance, and recovery work when used by an eligible entity under an appropriate procurement and program structure. It is not itself a federal grant program and cannot determine eligibility.</p>
          <h3>Current pathways worth validating</h3>
          <ul>
            <li>Flood Mitigation Assistance for eligible flood-risk reduction activities associated with NFIP-insured structures.</li>
            <li>Hazard Mitigation Grant Program project scoping and post-declaration mitigation activities.</li>
            <li>Risk MAP and Cooperating Technical Partner relationships, usually through eligible governmental, regional, tribal, university, or nonprofit partners.</li>
            <li>CAP-SSSE relationships with state NFIP and floodplain-management programs.</li>
            <li>Public Assistance management, documentation, insurance, Categories A–G, Section 406 mitigation, and Section 428 fixed-cost workflow support when eligible and properly procured.</li>
            <li>DHS science, innovation, preparedness, and small-business solicitations only when an active notice specifically fits the work.</li>
          </ul>
          <div class="callout risk"><strong>PROGRAM CORRECTION</strong><p>BRIC is not treated as an active funding pathway in this publication. FEMA announced the program's termination on April 4, 2025. Any future revival, replacement, litigation outcome, or legislative change must be verified before use.</p></div>
          <h3>Required operating posture</h3>
          <p>Every public-sector proposal should identify the eligible applicant, authority, procurement method, scope, cost principles, data rights, security classification, matching requirements, reporting duties, and responsible professional before describing federal reimbursement as possible.</p>
          <ol class="source-list">
            <li><a href="https://www.fema.gov/print/pdf/node/694058" target="_blank" rel="noreferrer">FEMA announcement regarding BRIC termination</a></li>
            <li><a href="https://www.congress.gov/crs-product/IN12609" target="_blank" rel="noreferrer">Congressional Research Service: BRIC recent developments</a></li>
            <li><a href="https://www.fema.gov/flood-maps/cooperating-technical-partners" target="_blank" rel="noreferrer">FEMA Cooperating Technical Partners</a></li>
            <li><a href="https://www.fema.gov/floodplain-management/manage-risk/state-tribal" target="_blank" rel="noreferrer">FEMA state and tribal floodplain-management resources</a></li>
          </ol>
        `
      },
      {
        id: "business-model",
        title: "Business model",
        html: `
          <p>The commercial model should combine durable recurring revenue with implementation, transaction, and integration revenue without monetizing private information in ways that undermine trust.</p>
          <div class="table-wrap"><table><thead><tr><th>Revenue motion</th><th>Customer</th><th>Commercial unit</th><th>Validation required</th></tr></thead><tbody>
            <tr><td>Municipal platform</td><td>Local or regional public entity</td><td>Implementation plus annual subscription</td><td>Procurement, budget owner, scope, support burden</td></tr>
            <tr><td>Carrier white label</td><td>Carrier or WYO organization</td><td>Setup, policy volume, claim volume, or enterprise license</td><td>Integration cost, adoption, loss-adjustment benefit, compliance</td></tr>
            <tr><td>Claim package</td><td>Authorized policyholder or partner</td><td>Per completed package or sponsored access</td><td>State public-adjusting rules, willingness to pay, abandonment rate</td></tr>
            <tr><td>Government pilot</td><td>Eligible public or research partner</td><td>Fixed-price milestone contract or subaward</td><td>Allowable cost, data rights, reporting, procurement</td></tr>
            <tr><td>Analytics</td><td>Carrier, reinsurer, lender, public entity</td><td>Subscription or portfolio license</td><td>Consent, aggregation threshold, model performance, privacy</td></tr>
          </tbody></table></div>
          <p>Pricing has intentionally not been invented in this edition. It should be established through customer discovery, pilot cost accounting, comparable contract research, and a unit-economics model.</p>
        `
      },
      {
        id: "go-to-market",
        title: "Go-to-market sequence",
        html: `
          <ol>
            <li><strong>Prove the resident documentation loop.</strong> Complete property intake, evidence capture, human-reviewed scope, structured package, and authorized export.</li>
            <li><strong>Recruit one operational partner.</strong> A flood specialist, licensed adjuster, contractor network, or municipal emergency-management partner can validate usability and evidence quality.</li>
            <li><strong>Run one bounded geographic pilot.</strong> Select a community with a defined hazard, responsible sponsor, manageable population, and measurable baseline.</li>
            <li><strong>Add carrier read-only review.</strong> Test whether the prepared record reduces missing information and review effort without promising automated settlement.</li>
            <li><strong>Expand to civic assets.</strong> Apply the evidence architecture to public facilities and recovery documentation.</li>
          </ol>
          <h3>Distribution strategy</h3>
          <p>Trust is local. Risk Kapture should support carrier, municipality, state, nonprofit, contractor, and partner branding while preserving one governed backend. White labeling is a distribution strategy, not a reason to fragment the core platform.</p>
        `
      },
      {
        id: "technology",
        title: "Product and technology direction",
        html: `
          <p>The recovered prototype is useful as a visual and workflow demonstration, but the production product should separate mobile field capture from desktop review. The immediate architecture should remain modular and bootstrap-first.</p>
          <ul>
            <li><strong>Field applications:</strong> Expo / React Native, offline-first capture, secure local queue, camera, location, and upload status.</li>
            <li><strong>Web applications:</strong> TypeScript React for carrier, civic, administrative, and audit workflows.</li>
            <li><strong>API:</strong> FastAPI with standards-based OpenAPI contracts and typed clients.</li>
            <li><strong>Data:</strong> PostgreSQL with PostGIS for properties, parcels, hazards, facilities, routes, and event extents.</li>
            <li><strong>Evidence:</strong> versioned S3-compatible object storage, immutable identifiers, signed URLs, hashes, metadata, retention controls, and audit events.</li>
            <li><strong>Processing:</strong> separate job workers for media processing, document generation, quality checks, and later computer vision.</li>
            <li><strong>Observability:</strong> traces, metrics, logs, and end-to-end correlation for capture, upload, processing, review, and export.</li>
          </ul>
          <div class="callout warning"><strong>SEQUENCING</strong><p>Computer vision, automated reconstruction, autonomous estimating, and broad carrier integration remain behind feature flags until a real pilot dataset and measurable accuracy standard exist.</p></div>
        `
      },
      {
        id: "governance",
        title: "Governance, security, and legal controls",
        html: `
          <ul>
            <li>Organization-based tenancy and role-based access with default-deny principles.</li>
            <li>Explicit consent and purpose limitation for private property and claim records.</li>
            <li>Separation of public, private, sensitive-infrastructure, and derived intelligence data.</li>
            <li>Encryption in transit and at rest, managed keys, secrets controls, and secure device storage.</li>
            <li>Evidence versioning, provenance, audit logs, time records, and retention policies.</li>
            <li>Human review of estimates, anomaly flags, model outputs, and submission packages.</li>
            <li>Clear distinction between software assistance and licensed public adjusting, legal advice, engineering, appraisal, or coverage decisions.</li>
            <li>Incident response, business continuity, vulnerability management, vendor review, and data-deletion procedures.</li>
          </ul>
          <p>A SHA-256 hash is useful for integrity validation but is not, by itself, a chain of custody. The platform must record who captured, uploaded, accessed, transformed, reviewed, exported, and relied upon each evidence item.</p>
        `
      },
      {
        id: "pilot",
        title: "First vertical slice and pilot",
        html: `
          <h3>Vertical slice</h3>
          <ol><li>User and organization access</li><li>Property and policy intake</li><li>Room-by-room capture</li><li>Immutable evidence upload with metadata</li><li>Human-created scope and line-item estimate</li><li>Versioned pricing and documented overrides</li><li>Claim-package generation</li><li>Audit and evidence export</li><li>Read-only carrier review</li></ol>
          <h3>Pilot shape</h3>
          <ul><li>One hazard and one defined geography</li><li>One accountable public or commercial sponsor</li><li>Twenty-five to one hundred completed records or claim packages</li><li>Sanitized demonstration data before any public sharing</li><li>Written consent, operating SOP, review protocol, and escalation path</li></ul>
          <h3>Primary metrics</h3>
          <div class="metric-row"><div class="metric"><b>Time</b><span>Median time to complete a usable package</span></div><div class="metric"><b>Quality</b><span>Missing-document and rejected-evidence rate</span></div><div class="metric"><b>Review</b><span>Professional review time and correction cycles</span></div></div>
          <p>Secondary metrics include capture completion, usable-photo rate, inventory completeness, resident satisfaction, reviewer confidence, upload reliability, export success, and documented mitigation opportunities.</p>
        `
      },
      {
        id: "roadmap",
        title: "Roadmap, risks, and decisions",
        html: `
          <div class="table-wrap"><table><thead><tr><th>Window</th><th>Outcome</th><th>Required evidence</th></tr></thead><tbody>
            <tr><td>Days 1–15</td><td>Publication suite, source register, pilot brief, product requirements</td><td>Approved messaging, scope, assumptions, and decision rights</td></tr>
            <tr><td>Days 15–45</td><td>Working vertical-slice prototype</td><td>Test fixtures, completed package, security baseline, usability findings</td></tr>
            <tr><td>Days 30–60</td><td>Pilot partner and operating plan</td><td>Letter of intent, data map, procurement path, SOP, metrics</td></tr>
            <tr><td>Days 60–90</td><td>Controlled beta readiness</td><td>Training, consent, support, incident response, demo, acceptance test</td></tr>
          </tbody></table></div>
          <h3>Principal risks</h3>
          <ul><li>Overpromising automated accuracy before a labeled dataset exists</li><li>Unauthorized public-adjusting or professional-services activity</li><li>Slow or unsuitable public procurement and grant timelines</li><li>Data sensitivity, critical-infrastructure restrictions, or weak consent</li><li>Carrier integration cost and change-management burden</li><li>Attempting Home, Carrier, Civic, AI, and federal work simultaneously</li></ul>
          <h3>Immediate decisions</h3>
          <ol><li>Confirm the first hazard and pilot geography.</li><li>Choose the first accountable operating partner.</li><li>Approve the exact vertical slice and defer everything else.</li><li>Commission legal review of claims-assistance boundaries and pilot consent.</li><li>Create a customer-discovery and pricing model before publishing financial projections.</li></ol>
        `
      }
    ]
  },

  investor: {
    title: "Investor Strategy Memorandum",
    subtitle: "A capital-focused case for building the governed disaster record and workflow layer.",
    summary: "Risk Kapture can become durable recovery infrastructure by owning the pre-loss record, post-loss evidence workflow, and integrations that connect residents, carriers, municipalities, and recovery professionals.",
    audience: "Strategic investors, venture partners, family offices",
    purpose: "Investment and diligence discussion",
    version: "1.0 · July 26, 2026",
    classification: "Confidential draft",
    status: "Strategy and product thesis are developed. Financial forecasts, market sizing, pricing, customer pipeline, ownership, and capital requirements are intentionally not represented as verified until supplied and diligence-tested.",
    decision: "Determine whether to fund or support the evidence-first vertical slice and a bounded pilot that can produce measurable product, customer, and unit-economics proof.",
    sections: [
      { id: "investment-thesis", title: "Investment thesis", html: `<blockquote><p>Risk Kapture is not another estimating tool. It is the governed record and workflow layer that begins before disaster and becomes more valuable when a loss occurs.</p></blockquote><p>The investment case rests on five propositions: pre-loss evidence reduces post-loss reconstruction; one record can serve multiple stakeholders; disaster workflows remain fragmented; trusted distribution can be white-labeled; and accumulated evidence, process, integration, and operational data can create defensibility beyond a single model.</p><div class="callout success"><strong>CAPITAL DISCIPLINE</strong><p>Fund proof of workflow value first. Do not fund a broad autonomous-insurtech narrative before the core loop has been measured.</p></div>` },
      { id: "problem-market", title: "Problem and market entry", html: `<p>The initial market entry is not all property insurance or all disaster recovery. It is a documentation-heavy event workflow where pre-loss evidence and guided package creation can be measured.</p><h3>Recommended beachhead</h3><ul><li>Flood and NFIP-adjacent documentation because evidence, inventory, timelines, and forms are explicit.</li><li>One high-risk community or partner network rather than a nationwide consumer launch.</li><li>Policyholder-led documentation with authorized professional review.</li><li>Carrier read-only review after package quality has been demonstrated.</li></ul><p>Expansion follows the shared data model: other property hazards, carrier programs, public assets, municipal recovery, mitigation, portfolio analytics, and partner workspaces.</p>` },
      { id: "solution", title: "Product and customer value", html: `<div class="table-wrap"><table><thead><tr><th>Customer</th><th>Current friction</th><th>Risk Kapture value</th></tr></thead><tbody><tr><td>Resident</td><td>Lost records, confusion, incomplete inventory</td><td>Guided property vault, event capture, organized package</td></tr><tr><td>Carrier</td><td>Incomplete files, repeated requests, review congestion</td><td>Structured evidence, provenance, completeness and exception workflow</td></tr><tr><td>Municipality</td><td>Post-event asset reconstruction and fragmented records</td><td>Pre-loss registry, damage inventory, insurance and recovery workspace</td></tr><tr><td>Partner</td><td>Disconnected capture, estimates, forms, and handoffs</td><td>Shared case record, assigned work, versioning, export, audit trail</td></tr></tbody></table></div>` },
      { id: "business-model", title: "Commercial model", html: `<p>The platform supports several revenue motions, but the first model should remain simple enough to measure.</p><ul><li>Implementation and annual municipal platform subscription</li><li>Carrier white-label setup plus policy, claim, or enterprise licensing</li><li>Sponsored or per-package resident workflows</li><li>Fixed-price public, research, or innovation pilots through eligible partners</li><li>Later portfolio analytics with strict aggregation, consent, and governance</li></ul><p>No pricing or revenue forecast is presented as fact in this draft. The first financial model should be built from pilot labor, storage, media processing, support, professional review, acquisition, implementation, and integration costs.</p>` },
      { id: "moat", title: "Defensibility", html: `<h3>Data moat</h3><p>Structured pre-loss and post-loss records produce event-linked, longitudinal evidence that is difficult to recreate after the fact.</p><h3>Workflow moat</h3><p>Forms, permissions, evidence states, professional review, exceptions, audit events, and authorized exports create embedded operating process.</p><h3>Distribution moat</h3><p>Carrier, municipal, state, contractor, and community partners can distribute a white-labeled experience while the platform remains common underneath.</p><h3>Learning moat</h3><p>Real pilot outcomes can improve capture guidance, quality controls, completeness scoring, estimate review, and operational benchmarks. Models should be treated as a later multiplier, not the initial moat.</p>` },
      { id: "go-to-market", title: "Go-to-market and proof plan", html: `<ol><li>Complete publication, source, product, and technical package.</li><li>Secure one operating partner and one bounded pilot sponsor.</li><li>Deploy the evidence-first vertical slice.</li><li>Measure package completion, missing information, review time, correction cycles, and support cost.</li><li>Use results to sell a carrier-sponsored or municipal expansion.</li></ol><div class="metric-row"><div class="metric"><b>Adoption</b><span>Enrollment and completion</span></div><div class="metric"><b>Quality</b><span>Usable evidence and missing information</span></div><div class="metric"><b>Economics</b><span>Cost per completed record and support hour</span></div></div>` },
      { id: "technology", title: "Technology and execution", html: `<p>The current demonstration validates concept and interface direction. The MVP requires separate field and desktop applications, a secure API, a geospatial relational model, versioned evidence storage, asynchronous processing, and document generation.</p><p>The recommended stack is Expo / React Native for field capture, TypeScript React for desktop workflows, FastAPI, PostgreSQL/PostGIS, S3-compatible storage, a job queue and Python workers, and OpenTelemetry-based observability.</p><div class="callout warning"><strong>EXECUTION GUARD</strong><p>Do not spend early capital rebuilding every interface, adding complex enterprise infrastructure, or training proprietary models before the vertical slice and pilot workflow are stable.</p></div>` },
      { id: "capital", title: "Capital use and milestones", html: `<p>The first capital tranche should be milestone-based and directed toward demonstrable de-risking:</p><ul><li>Product engineering for the vertical slice</li><li>Security, privacy, consent, and legal review</li><li>Pilot implementation and professional review</li><li>Customer discovery, pricing, and integration diligence</li><li>Documentation, source control, and operating SOPs</li></ul><p>A use-of-funds schedule requires founder-provided team, compensation, contractor, hosting, legal, insurance, travel, sales, and runway assumptions. Until those inputs exist, a dollar ask would be invented rather than decision-grade.</p>` },
      { id: "risks", title: "Investment risks and diligence", html: `<div class="table-wrap"><table><thead><tr><th>Risk</th><th>Diligence question</th><th>Mitigation</th></tr></thead><tbody><tr><td>Regulatory boundary</td><td>Does the workflow cross into licensed adjusting, appraisal, legal, or engineering activity?</td><td>Licensed partners, state review, user-controlled submissions, clear product boundaries</td></tr><tr><td>Adoption</td><td>Will users document property before a loss?</td><td>Carrier or municipal sponsorship, simple onboarding, readiness incentives</td></tr><tr><td>Integration</td><td>Can the product fit existing claim and public systems?</td><td>Export-first MVP, standards contracts, phased APIs</td></tr><tr><td>Accuracy</td><td>Can model outputs be trusted?</td><td>Human review, feature flags, labeled pilot data, measurable thresholds</td></tr><tr><td>Procurement</td><td>Can public buyers contract and fund the work?</td><td>Eligible prime or partner, narrow scope, multiple commercial channels</td></tr><tr><td>Focus</td><td>Will the company attempt too many markets?</td><td>One hazard, geography, partner, and vertical slice</td></tr></tbody></table></div>` }
    ]
  },

  government: {
    title: "Government & FEMA White Paper",
    subtitle: "Pre-disaster records as public recovery infrastructure.",
    summary: "This paper proposes a controlled public-private pilot that helps eligible communities establish governed pre-loss property and public-asset records, then use those records to improve disaster documentation and recovery coordination.",
    audience: "Federal, state, tribal, territorial, and local officials",
    purpose: "Policy and pilot evaluation",
    version: "1.0 · July 26, 2026",
    classification: "External discussion draft",
    status: "Federal program descriptions were source-reviewed for this edition. Eligibility, funding availability, cost share, procurement, and legal authority remain fact-specific and must be confirmed for each proposal.",
    decision: "Authorize due diligence and design of a bounded demonstration with an eligible public sponsor, documented procurement pathway, privacy controls, and independent performance evaluation.",
    sections: [
      { id: "public-problem", title: "Public problem", html: `<p>Communities often begin assembling the recovery record after assets, records, staff capacity, and normal communications have been disrupted. The resulting delay affects insurance, damage inventory, eligible-work organization, project formulation, mitigation analysis, and public communication.</p><p>A pre-disaster record does not determine federal eligibility or replace inspections. It can improve the quality, organization, provenance, and availability of information supplied to authorized officials and professionals.</p>` },
      { id: "proposed-platform", title: "Proposed public capability", html: `<ul><li>Public asset and facility inventory with ownership, location, condition, insurance, and pre-loss evidence</li><li>Opt-in resident property and contents vault with explicit consent</li><li>Event activation, field capture, damage pins, and evidence status</li><li>Insurance and Public Assistance documentation workspaces</li><li>Relief-resource and recovery-information mapping</li><li>Mitigation-opportunity and project-scoping register</li><li>Exportable audit and evidence packages</li></ul><div class="callout success"><strong>PUBLIC VALUE</strong><p>The platform prepares the record and coordinates work. Government and authorized professionals retain eligibility, coverage, engineering, procurement, and funding decisions.</p></div>` },
      { id: "policy-fit", title: "Policy and program fit", html: `<p>Potential alignment should be evaluated through existing authorities and active solicitations rather than presented as guaranteed funding.</p><ul><li><strong>FMA:</strong> possible fit for eligible capability, scoping, or flood-risk reduction work associated with NFIP-insured structures.</li><li><strong>HMGP:</strong> possible fit for post-declaration project scoping and eligible mitigation activities.</li><li><strong>Risk MAP / CTP:</strong> possible partnership route for hazard identification, risk communication, outreach, and mapping-related work through qualified partners.</li><li><strong>CAP-SSSE:</strong> strategic relationship path through state NFIP and floodplain-management programs.</li><li><strong>Public Assistance:</strong> documentation, insurance, project formulation, Categories A–G, Section 406, Section 428, and closeout support when allowable and properly procured.</li><li><strong>DHS and other innovation programs:</strong> only through an active notice with matching objectives and an eligible applicant.</li></ul>` },
      { id: "program-status", title: "Current program-status correction", html: `<div class="callout risk"><strong>BRIC STATUS</strong><p>FEMA announced the termination of the Building Resilient Infrastructure and Communities program on April 4, 2025. Risk Kapture therefore does not rely on BRIC as an active 2026 funding pathway. Any replacement, court action, reauthorization, or revived notice must be verified at the time of application.</p></div><p>This correction is material because earlier strategy drafts listed BRIC among possible pathways. The stronger approach is to maintain a living funding register rather than embed static assumptions in sales material.</p><ol class="source-list"><li><a href="https://www.fema.gov/print/pdf/node/694058" target="_blank" rel="noreferrer">FEMA BRIC termination announcement</a></li><li><a href="https://www.congress.gov/crs-product/IN12609" target="_blank" rel="noreferrer">CRS analysis of BRIC developments</a></li></ol>` },
      { id: "nfip", title: "NFIP documentation opportunity", html: `<p>FEMA materials emphasize prompt claim reporting, photographs and video, inventories, receipts, review of the adjuster's estimate, and submission of required supporting documentation. FEMA training also states that a Proof of Loss is signed and sworn by the policyholder and that the policyholder remains responsible for timely submission, subject to applicable extensions.</p><p>Risk Kapture can support the policyholder by organizing evidence, inventory, forms, timestamps, estimates, and an export package. It should not determine coverage, negotiate the claim without proper licensing, or represent that a generated package will be accepted.</p><ol class="source-list"><li><a href="https://www.floodsmart.gov/claims-checklist" target="_blank" rel="noreferrer">NFIP Claims Checklist for Policyholders</a></li><li><a href="https://www.floodsmart.gov/recover/document-damage" target="_blank" rel="noreferrer">NFIP guidance on documenting flood damage</a></li><li><a href="https://nfipservices.floodsmart.gov/claims" target="_blank" rel="noreferrer">NFIP claims resources and policy documents</a></li></ol>` },
      { id: "public-assistance", title: "Public Assistance workflow support", html: `<p>FEMA organizes Public Assistance work into emergency work Categories A and B and permanent work Categories C through G. The platform can assist with site records, dimensions, descriptions, photos, insurance, procurement files, estimate versions, mitigation flags, and closeout evidence.</p><div class="table-wrap"><table><thead><tr><th>Category</th><th>General work type</th><th>Potential platform support</th></tr></thead><tbody><tr><td>A</td><td>Debris removal</td><td>Locations, quantities, routes, photos, tickets, contracts</td></tr><tr><td>B</td><td>Emergency protective measures</td><td>Assignments, labor, equipment, materials, operational records</td></tr><tr><td>C–D</td><td>Roads, bridges, water control</td><td>Asset baseline, dimensions, condition, damage, engineering files</td></tr><tr><td>E–G</td><td>Buildings, equipment, utilities, parks and other facilities</td><td>Inventory, insurance, pre-loss condition, scope, estimate, mitigation, closeout</td></tr></tbody></table></div><ol class="source-list"><li><a href="https://emilms.fema.gov/is_1010/groups/112.html" target="_blank" rel="noreferrer">FEMA Public Assistance categories</a></li><li><a href="https://emilms.fema.gov/is_1011/groups/119.html" target="_blank" rel="noreferrer">FEMA Section 406 mitigation training</a></li><li><a href="https://emilms.fema.gov/is_1000/groups/206.html" target="_blank" rel="noreferrer">FEMA Section 428 alternative procedures training</a></li></ol>` },
      { id: "pilot", title: "Pre-Disaster Community Asset and Claims Readiness Pilot", html: `<h3>Purpose</h3><p>Test whether governed pre-loss records and guided post-loss workflows improve the speed, completeness, and usability of insurance and public recovery documentation.</p><h3>Recommended initial scope</h3><ul><li>One to three communities rather than a large national launch</li><li>One primary hazard with defined exposure</li><li>Public asset inventory and limited critical-facility records</li><li>Opt-in resident enrollment with explicit consent</li><li>Post-event or exercise-based capture and package workflow</li><li>Independent evaluator and published after-action findings without private data</li></ul><h3>Not included in the first pilot</h3><ul><li>Automated coverage decisions</li><li>Autonomous damage valuation</li><li>Federal eligibility determinations</li><li>Unrestricted publication of private or sensitive infrastructure data</li></ul>` },
      { id: "governance", title: "Governance and procurement", html: `<ul><li>Identify eligible applicant, prime contractor, subrecipients, subcontractors, and responsible officials.</li><li>Document procurement authority, competition, scope, pricing basis, conflicts, and cost allowability.</li><li>Define data ownership, permitted use, public-record treatment, retention, deletion, and export.</li><li>Classify resident data, public data, sensitive infrastructure, CUI, and any protected critical-infrastructure information.</li><li>Establish role-based access, consent, audit, incident response, and breach-notification obligations.</li><li>Require human approval for claims, estimates, submissions, and funding decisions.</li></ul>` },
      { id: "metrics", title: "Evaluation framework", html: `<div class="metric-row"><div class="metric"><b>Speed</b><span>Time to complete usable record and package</span></div><div class="metric"><b>Completeness</b><span>Missing information and correction cycles</span></div><div class="metric"><b>Recovery</b><span>Documented handoffs and project readiness</span></div></div><p>Additional measures should include enrollment, accessibility, upload reliability, evidence quality, professional review time, duplicate requests, resident satisfaction, municipal staff burden, identified mitigation opportunities, privacy incidents, and cost per completed record.</p>` },
      { id: "recommendation", title: "Recommendation", html: `<p>Proceed to a 60-day pilot-design phase, not a national procurement. The design phase should produce a confirmed sponsor, legal and procurement memo, data map, technical security plan, participant consent, implementation budget, independent evaluation protocol, and go/no-go criteria.</p>` }
    ]
  },

  carrier: {
    title: "Carrier Executive Brief",
    subtitle: "A pre-loss property record and post-loss evidence workflow for faster, cleaner claim review.",
    summary: "Risk Kapture gives carriers a white-labeled way to help policyholders document property before a catastrophe and supply structured, governed evidence after a loss.",
    audience: "Carrier claims, innovation, operations, underwriting, compliance",
    purpose: "Carrier pilot evaluation",
    version: "1.0 · July 26, 2026",
    classification: "External discussion draft",
    status: "Operational concept is defined. ROI claims require carrier baseline data and a controlled pilot. The product is not represented as an automated coverage, settlement, or fraud-decision system.",
    decision: "Approve a read-only carrier pilot that measures evidence completeness, correction cycles, review time, policyholder experience, and integration requirements.",
    sections: [
      { id: "carrier-problem", title: "Carrier operating problem", html: `<p>Catastrophe files arrive during peak demand, often with incomplete inventories, inconsistent photographs, missing receipts, unclear pre-loss condition, and repeated information requests. The carrier must reconstruct a record while serving a displaced policyholder and managing workforce constraints.</p>` },
      { id: "offering", title: "Carrier offering", html: `<ul><li>Carrier-branded policyholder onboarding</li><li>Pre-loss property, room, contents, appliance, and system record</li><li>Post-loss guided capture and emergency-expense organization</li><li>Evidence metadata, versioning, provenance, and completeness controls</li><li>Human-reviewed scope and estimate workspace</li><li>Read-only claim package and exception queue</li><li>Export or API integration into existing claim systems</li></ul>` },
      { id: "workflow", title: "Workflow", html: `<div class="table-wrap"><table><thead><tr><th>Step</th><th>Policyholder</th><th>Risk Kapture</th><th>Carrier</th></tr></thead><tbody><tr><td>Pre-loss</td><td>Captures and maintains record</td><td>Validates completeness and stores governed evidence</td><td>May sponsor, remind, and monitor adoption</td></tr><tr><td>First notice</td><td>Reports event and activates claim mode</td><td>Associates event, policy, property, and capture session</td><td>Creates or links claim</td></tr><tr><td>Documentation</td><td>Captures damage, inventory, expenses, repairs</td><td>Checks quality, metadata, duplication, missing items</td><td>Reviews exceptions and requests clarification</td></tr><tr><td>Estimate</td><td>Reviews facts and authorizes submission</td><td>Supports human-created, versioned scope and pricing</td><td>Applies coverage and claim decision processes</td></tr><tr><td>Close</td><td>Maintains repair and replacement record</td><td>Preserves audit and export package</td><td>Maintains claim system of record</td></tr></tbody></table></div>` },
      { id: "value", title: "Value and ROI framework", html: `<p>ROI should be tested against carrier baselines rather than asserted.</p><ul><li>Average handling time for targeted file types</li><li>Number of outbound missing-information contacts</li><li>Independent-adjustment and reinspection expense</li><li>Time to first eligible payment or advance</li><li>Supplement and correction cycles</li><li>Policyholder satisfaction and complaint rate</li><li>Fraud-referral precision and false-positive burden</li></ul><div class="callout warning"><strong>MEASUREMENT</strong><p>Risk Kapture should claim a benefit only after the carrier provides a baseline, the pilot defines a comparable cohort, and the result is independently reviewed.</p></div>` },
      { id: "integration", title: "Integration model", html: `<p>The first pilot should be export-first and read-only. Integration can progress from secure package export, to claim-link and document ingestion, to event webhooks and APIs, and finally to embedded workflows.</p><ul><li>OpenAPI-based service contracts</li><li>Stable organization, policy, property, claim, and evidence identifiers</li><li>Signed URLs and least-privilege document access</li><li>Event and audit export</li><li>Configurable retention and legal hold</li><li>Carrier-controlled decision and system-of-record authority</li></ul>` },
      { id: "controls", title: "Claims, compliance, and model controls", html: `<ul><li>No automated coverage determination</li><li>No unlicensed negotiation or representation</li><li>Human review of estimate, anomaly, and payment-support outputs</li><li>Clear labeling of user assertions, source evidence, derived data, and decisions</li><li>Consent, purpose limitation, segregation, redaction, and retention</li><li>Model version, input, output, confidence, reviewer, override, and final decision records</li></ul>` },
      { id: "pilot", title: "Recommended carrier pilot", html: `<h3>Scope</h3><ul><li>One product or peril</li><li>One geographic or distribution cohort</li><li>Twenty-five to one hundred completed records</li><li>Read-only carrier reviewer group</li><li>No automated settlement</li></ul><h3>Acceptance metrics</h3><ul><li>Package completion and abandonment</li><li>Evidence usability and missing-information rate</li><li>Reviewer time and correction cycles</li><li>Policyholder satisfaction</li><li>Storage, processing, support, and integration cost</li><li>Security and privacy exceptions</li></ul>` },
      { id: "next-step", title: "Decision and next step", html: `<p>Authorize a four-week design workshop covering the target claim type, baseline metrics, user cohort, policy and legal review, integration boundary, security questionnaire, pilot economics, and success criteria.</p>` }
    ]
  },

  municipal: {
    title: "Municipal Pilot Proposal",
    subtitle: "A bounded deployment for public-asset readiness, resident documentation, and recovery coordination.",
    summary: "The pilot establishes a governed pre-loss record for selected public assets and opt-in residents, then tests exercise-based or real-event damage documentation and recovery workflows.",
    audience: "Mayor, county executive, emergency management, public works, finance",
    purpose: "Local pilot authorization",
    version: "1.0 · July 26, 2026",
    classification: "External proposal draft",
    status: "Scope is ready for sponsor customization. Site count, population, hazards, budget, procurement route, security classification, and responsible departments must be completed for a binding proposal.",
    decision: "Authorize pilot scoping, designate an executive sponsor and project manager, and permit inventory, legal, security, and procurement discovery.",
    sections: [
      { id: "objective", title: "Pilot objective", html: `<p>Determine whether a governed pre-loss asset and resident documentation platform improves local readiness and reduces the administrative burden of post-event damage and recovery organization.</p>` },
      { id: "scope", title: "Recommended scope", html: `<ul><li>One defined geography and primary hazard</li><li>Twenty to fifty priority public assets</li><li>Critical facilities included only at an approved sensitivity level</li><li>Opt-in resident cohort with accessible enrollment</li><li>Community command map and resource layer</li><li>Exercise-based activation before live-event use</li><li>Independent after-action review</li></ul>` },
      { id: "workstreams", title: "Workstreams", html: `<div class="table-wrap"><table><thead><tr><th>Workstream</th><th>Activities</th><th>Deliverables</th></tr></thead><tbody><tr><td>Governance</td><td>Roles, consent, data classification, procurement, legal review</td><td>Governance plan and approved SOP</td></tr><tr><td>Asset readiness</td><td>Inventory, ownership, insurance, location, condition, photos</td><td>Public asset registry</td></tr><tr><td>Resident readiness</td><td>Campaign, enrollment, capture support, accessibility</td><td>Opt-in property records</td></tr><tr><td>Activation</td><td>Exercise or event workflow, field teams, damage pins</td><td>Damage and evidence packages</td></tr><tr><td>Recovery</td><td>Insurance, PA organization, mitigation flags, resource map</td><td>Recovery workspace and exports</td></tr><tr><td>Evaluation</td><td>Baseline, metrics, interviews, after-action</td><td>Independent results report</td></tr></tbody></table></div>` },
      { id: "timeline", title: "Illustrative timeline", html: `<ol><li><strong>Weeks 1–2:</strong> sponsor, governance, scope, data map, procurement and security review.</li><li><strong>Weeks 3–6:</strong> asset inventory, configuration, staff training, resident campaign.</li><li><strong>Weeks 7–9:</strong> enrollment, quality review, exercise preparation.</li><li><strong>Weeks 10–11:</strong> functional exercise and package generation.</li><li><strong>Week 12:</strong> after-action review, cost analysis, scale recommendation.</li></ol>` },
      { id: "roles", title: "Roles and responsibilities", html: `<ul><li><strong>Executive sponsor:</strong> authority, cross-department decisions, escalation.</li><li><strong>Project manager:</strong> schedule, risks, vendors, reporting.</li><li><strong>Emergency management:</strong> activation, exercise, resource map.</li><li><strong>Public works / facilities:</strong> asset and condition records.</li><li><strong>Finance / insurance:</strong> schedules, values, procurement, cost documentation.</li><li><strong>IT / security:</strong> access, integration, incident response, retention.</li><li><strong>Risk Kapture:</strong> configuration, training, platform, support, export, metrics.</li><li><strong>Independent evaluator:</strong> baseline, observation, analysis, final report.</li></ul>` },
      { id: "budget", title: "Budget structure", html: `<p>The final price should be constructed from site and participant counts rather than guessed. Budget components include discovery, configuration, asset inventory assistance, resident outreach, training, hosting, storage, media processing, professional review, exercise support, help desk, travel, independent evaluation, security review, and contingency.</p><div class="callout warning"><strong>NO INVENTED PRICE</strong><p>A binding proposal requires the community's geography, asset count, enrollment target, integrations, data sensitivity, travel, procurement terms, and support level.</p></div>` },
      { id: "metrics", title: "Success measures", html: `<div class="metric-row"><div class="metric"><b>Readiness</b><span>Assets and residents with complete baseline records</span></div><div class="metric"><b>Activation</b><span>Time and success rate for field capture and package creation</span></div><div class="metric"><b>Burden</b><span>Staff time, duplicate requests, and correction cycles</span></div></div><ul><li>Evidence quality and missing-information rate</li><li>Public-asset insurance and condition completeness</li><li>Accessibility and resident satisfaction</li><li>Number and quality of mitigation opportunities identified</li><li>Security, privacy, and incident metrics</li><li>Cost per completed record</li></ul>` },
      { id: "authorization", title: "Requested authorization", html: `<p>Designate the sponsor and project manager; authorize a 30-day scoping and legal-security discovery period; identify the pilot hazard and geography; and permit development of a final statement of work, budget, data agreement, and evaluation plan.</p>` }
    ]
  },

  congressional: {
    title: "Congressional Brief",
    subtitle: "Pre-Disaster Community Asset and Claims Readiness Pilot Program.",
    summary: "A policy concept for testing whether communities and residents can prepare the documentation needed for insurance and public recovery before disaster disrupts the evidence and workforce.",
    audience: "Members of Congress and committee staff",
    purpose: "Legislative and oversight discussion",
    version: "1.0 · July 26, 2026",
    classification: "External policy draft",
    status: "Concept paper, not legislative text. Authorization, jurisdiction, scoring, appropriation, administering agency, and interaction with current FEMA policy require congressional counsel and committee review.",
    decision: "Direct staff-level evaluation of a small, independently measured pilot using existing authority where available or narrowly drafted authority if required.",
    sections: [
      { id: "problem", title: "The constituent problem", html: `<p>Families and local governments are often forced to reconstruct property, contents, insurance, public assets, and damage records after a disaster has destroyed evidence and overloaded the people responsible for recovery. The result is avoidable delay, repeated inspections, incomplete submissions, and greater administrative burden.</p>` },
      { id: "proposal", title: "The proposal", html: `<blockquote><p>Help communities prepare the recovery record before disaster, so families and cities are not rebuilding their paperwork while rebuilding their lives.</p></blockquote><p>Create or authorize a limited pilot that supports governed public-asset inventories, opt-in resident property records, post-loss evidence workflows, insurance documentation, Public Assistance organization, relief-resource mapping, and mitigation-opportunity identification.</p>` },
      { id: "scope", title: "Recommended pilot scope", html: `<ul><li>Three to ten participating communities</li><li>Priority for high-risk, repetitive-loss, rural, coastal, tribal, territorial, and underserved areas</li><li>One primary hazard and defined geography per site</li><li>Public assets plus opt-in resident enrollment</li><li>Independent evaluation and public after-action report</li><li>Strict privacy, security, procurement, and data-rights controls</li></ul>` },
      { id: "guardrails", title: "Guardrails", html: `<ul><li>No federal coverage or claim decisions by the platform</li><li>No autonomous loss valuation or payment authorization</li><li>No publication of private resident or sensitive infrastructure records</li><li>No circumvention of state professional licensing or public procurement</li><li>No representation that participation guarantees assistance or reimbursement</li><li>Clear termination, data export, deletion, and audit provisions</li></ul>` },
      { id: "metrics", title: "Required reporting", html: `<ul><li>Time to complete pre-loss and post-loss records</li><li>Missing-information and correction rates</li><li>Professional and public staff review time</li><li>Participant accessibility and satisfaction</li><li>Cost per completed record</li><li>Duplicate inspections or information requests</li><li>Security and privacy incidents</li><li>Mitigation opportunities and recovery projects advanced</li></ul>` },
      { id: "current-status", title: "Current program context", html: `<p>The pilot should not be premised on BRIC as an active program. FEMA announced BRIC's termination in April 2025. Staff should instead examine current authorities, active notices, eligible partnerships, and whether a narrow authorization or appropriation is necessary.</p><ol class="source-list"><li><a href="https://www.fema.gov/print/pdf/node/694058" target="_blank" rel="noreferrer">FEMA BRIC announcement</a></li><li><a href="https://www.congress.gov/crs-product/IN12609" target="_blank" rel="noreferrer">CRS: BRIC recent developments</a></li><li><a href="https://www.floodsmart.gov/claims-checklist" target="_blank" rel="noreferrer">NFIP policyholder documentation checklist</a></li></ol>` },
      { id: "request", title: "Requested next step", html: `<p>Convene a staff briefing with FEMA, state and local emergency management, floodplain-management officials, carrier representatives, privacy and security experts, and disaster survivors. The output should be a jurisdictional memo, pilot authority analysis, cost estimate, evaluation design, and go/no-go recommendation.</p>` }
    ]
  },

  partner: {
    title: "Strategic Partner Overview",
    subtitle: "How carriers, municipalities, contractors, engineers, adjusters, universities, and public entities can participate.",
    summary: "Risk Kapture should remain the governed data and workflow layer while qualified partners provide trusted distribution, field capacity, professional judgment, implementation, and domain expertise.",
    audience: "Commercial, technical, public, and professional partners",
    purpose: "Partner qualification and role design",
    version: "1.0 · July 26, 2026",
    classification: "External discussion draft",
    status: "Partner framework is ready for outreach. Commercial terms, exclusivity, territory, data rights, professional responsibility, insurance, and referral rules require partner-specific agreements.",
    decision: "Determine whether the organization is a distribution, implementation, professional-review, data, technology, research, or pilot-sponsor partner and authorize a scoped diligence process.",
    sections: [
      { id: "principle", title: "Partner principle", html: `<blockquote><p>The local trusted brand can sit on the front end. Risk Kapture powers the governed record, forms, maps, workflows, and audit trail underneath.</p></blockquote>` },
      { id: "partner-types", title: "Partner types", html: `<div class="table-wrap"><table><thead><tr><th>Partner</th><th>Primary contribution</th><th>Example role</th></tr></thead><tbody><tr><td>Carrier / WYO</td><td>Distribution, claims expertise, baseline metrics</td><td>White-labeled policyholder and reviewer pilot</td></tr><tr><td>Municipality / tribe / public entity</td><td>Geography, assets, residents, public workflows</td><td>Pilot sponsor and operating site</td></tr><tr><td>Adjuster / attorney / engineer</td><td>Licensed or professional judgment</td><td>Review, certification, escalation, training</td></tr><tr><td>Contractor / restoration network</td><td>Field capacity, estimates, emergency work records</td><td>Capture and repair documentation partner</td></tr><tr><td>University / nonprofit</td><td>Research, evaluation, eligible partnerships, community trust</td><td>Independent evaluator or public-program partner</td></tr><tr><td>Technology / data provider</td><td>Maps, imagery, measurements, pricing, integrations</td><td>Licensed component or API</td></tr></tbody></table></div>` },
      { id: "operating-model", title: "Operating model", html: `<ul><li>One shared case and evidence model</li><li>Partner-specific roles and least-privilege access</li><li>Clear source, assertion, review, approval, and decision states</li><li>Configurable branding without fragmented codebases</li><li>Contracted data rights and retention</li><li>Professional responsibility remains with the qualified professional</li><li>Referral, fee, and marketplace arrangements reviewed for legal and ethical compliance</li></ul>` },
      { id: "qualification", title: "Partner qualification", html: `<ul><li>Relevant authority, license, experience, or customer access</li><li>Security and privacy maturity appropriate to the data</li><li>Documented conflicts, insurance, and professional responsibility</li><li>Ability to support a bounded pilot and provide baseline metrics</li><li>Willingness to use shared SOPs, audit trails, and evaluation</li><li>No demand for ungoverned access to resident or community data</li></ul>` },
      { id: "commercial", title: "Commercial structures", html: `<p>Possible structures include implementation subcontract, referral, reseller, white-label license, professional review agreement, research subaward, prime-subcontractor relationship, data license, or joint pilot. The structure must match actual responsibility and cannot be selected merely to obtain funding or avoid regulation.</p>` },
      { id: "pilot", title: "Partner pilot package", html: `<ol><li>Mutual NDA and conflict disclosure</li><li>Partner capability and authority review</li><li>Defined use case, geography, user cohort, and data</li><li>Statement of work and responsibility matrix</li><li>Security, privacy, insurance, and incident requirements</li><li>Training, support, professional review, and escalation</li><li>Metrics, baseline, independent evaluation, and exit plan</li></ol>` },
      { id: "next", title: "Partner next step", html: `<p>Complete a 60-minute qualification session and a written role matrix before discussing exclusivity, equity, broad territory, or long-term commercial rights.</p>` }
    ]
  },

  technical: {
    title: "Technical Architecture",
    subtitle: "A modular, offline-first, evidence-governed architecture for field capture and institutional review.",
    summary: "The production system should separate mobile capture, desktop workflows, API services, geospatial data, immutable evidence storage, asynchronous processing, and observability while preserving a shared domain model.",
    audience: "CTO, engineers, security, architecture, technical partners",
    purpose: "Architecture and implementation decision",
    version: "1.0 · July 26, 2026",
    classification: "Confidential technical draft",
    status: "Target architecture is implementation-ready at the system-design level. Cloud provider, identity provider, compliance scope, recovery objectives, data residency, and integration contracts remain selection decisions.",
    decision: "Approve the separated field/web/API architecture and require an implementation plan for the evidence-first vertical slice before restructuring the recovered prototype.",
    sections: [
      { id: "current-state", title: "Current state", html: `<p>The recovered React/Vite prototype is appropriate as a demonstration and design reference. It is not a production architecture: roles are combined, data is fixture-based, there is no backend, authentication, tenancy, offline queue, immutable evidence store, processing pipeline, or operational security boundary.</p>` },
      { id: "target", title: "Target architecture", html: `<pre class="callout">Field apps (Expo / React Native)       Desktop apps (TypeScript React)
              |                                      |
              +-------------- API Gateway -----------+
                                     |
                              FastAPI services
                                     |
        +----------------------------+----------------------------+
        |                            |                            |
 PostgreSQL / PostGIS       S3-compatible evidence         Redis / job queue
        |                            |                            |
        +----------------------------+----------------------------+
                                     |
                          Python processing workers
             PDF generation · media quality · extraction · later CV
                                     |
                         OpenTelemetry traces / metrics / logs</pre>` },
      { id: "clients", title: "Client applications", html: `<h3>Field capture</h3><ul><li>Secure device enrollment and local storage</li><li>Offline-first capture sessions and resumable upload queue</li><li>Camera, video, location, timestamp, device, and user metadata</li><li>Explicit local, queued, uploading, verified, failed, and deleted states</li><li>Accessibility, low-bandwidth, and interrupted-session support</li></ul><h3>Desktop review</h3><ul><li>Carrier, civic, professional, administrative, and audit workspaces</li><li>Large tables, maps, review queues, versions, exceptions, and reports</li><li>Separate role-specific shells rather than a simulated mobile UI</li></ul>` },
      { id: "domain", title: "Initial domain model", html: `<ul><li>Organizations, memberships, users, roles, and permissions</li><li>Properties, structures, rooms, surfaces, systems, and contents</li><li>Policies, coverages, mortgagees, and authorized parties</li><li>Events, claims, claim versions, and submissions</li><li>Capture sessions, evidence objects, evidence versions, and derivatives</li><li>Estimates, versions, line items, pricing sources, and overrides</li><li>Public assets, facilities, sites, work categories, and projects</li><li>Audit events, model runs, reviews, decisions, exports, and retention holds</li></ul>` },
      { id: "evidence", title: "Evidence integrity and chain of custody", html: `<p>Every evidence item requires an immutable identifier, content hash, original object version, uploader, organization, capture session, timestamps, device and location context when permitted, source type, transformations, access events, review state, export history, and retention status.</p><div class="callout warning"><strong>IMPORTANT</strong><p>A hash detects change to bytes. It does not prove who created the item, whether the clock was accurate, whether the location was trusted, or how the item was handled. Chain of custody is the complete event history.</p></div>` },
      { id: "security", title: "Security architecture", html: `<ul><li>OIDC identity, MFA, organization tenancy, and least privilege</li><li>Policy enforcement in service logic plus database controls</li><li>Encryption in transit and at rest; managed key and secret rotation</li><li>Signed short-lived object access; no public evidence buckets</li><li>Input validation, media scanning, rate limiting, and abuse controls</li><li>Immutable audit pipeline and administrator action review</li><li>Data classification, regional storage, retention, legal hold, deletion, and export</li><li>Vulnerability management, dependency scanning, penetration testing, incident response, and backups</li></ul>` },
      { id: "processing", title: "Asynchronous processing", html: `<p>Video processing, image extraction, document generation, quality analysis, estimate processing, and model inference must run outside request handlers. Jobs should be idempotent, retryable, observable, versioned, and tied to a source object and output derivative.</p><ul><li>Queue state and dead-letter handling</li><li>Deterministic document templates and version records</li><li>Resource limits and cost observability</li><li>Human review gates before authoritative use</li><li>Feature flags for experimental models</li></ul>` },
      { id: "apis", title: "API and integrations", html: `<ul><li>OpenAPI contracts and generated typed clients</li><li>Stable external IDs and idempotency keys</li><li>Export-first integration for the pilot</li><li>Webhooks with signatures, retries, and replay protection</li><li>Document and evidence manifests</li><li>Carrier, mapping, pricing, e-signature, and public-data adapters behind interfaces</li></ul>` },
      { id: "observability", title: "Reliability and observability", html: `<div class="metric-row"><div class="metric"><b>Trace</b><span>Follow capture through export</span></div><div class="metric"><b>Measure</b><span>Latency, failure, queue, storage, and cost</span></div><div class="metric"><b>Audit</b><span>Explain access, transformation, review, and decision</span></div></div><p>Define recovery time and recovery point objectives after the pilot's operational criticality is known. The first production baseline should include automated backups, restore tests, object versioning, job replay, and degraded offline capture.</p>` },
      { id: "delivery", title: "Delivery sequence and acceptance", html: `<ol><li>Architecture decision records and domain contracts</li><li>Authentication, organizations, property and policy intake</li><li>Offline capture and immutable upload</li><li>Evidence review, scope, estimate versions, and audit</li><li>Claim-package generation and read-only reviewer</li><li>Pilot instrumentation, security testing, and acceptance</li><li>Only then: CV experiments, deeper integrations, civic expansion</li></ol><h3>Vertical-slice acceptance</h3><ul><li>Interrupted upload resumes without duplicate evidence</li><li>Original bytes remain retrievable and immutable under policy</li><li>Every transformation is linked to source and version</li><li>Permissions prevent cross-organization access</li><li>Package can be regenerated deterministically from structured data</li><li>Reviewer decisions and overrides are auditable</li></ul>` }
    ]
  },

  product: {
    title: "Product Specification",
    subtitle: "Evidence-first MVP requirements for Risk Kapture Home and read-only institutional review.",
    summary: "The MVP proves one loop: property and policy intake, guided evidence capture, immutable upload, human-reviewed scope and estimate, structured package generation, audit export, and read-only reviewer access.",
    audience: "Product, engineering, design, QA, pilot operators",
    purpose: "MVP scope and acceptance",
    version: "1.0 · July 26, 2026",
    classification: "Confidential product draft",
    status: "MVP scope is defined. Field research, accessibility testing, pilot jurisdiction, form versions, pricing source, identity provider, and detailed UX flows remain implementation inputs.",
    decision: "Freeze the evidence-first MVP scope and prevent unrelated carrier, civic, AI, marketplace, and advanced-estimating features from entering the first release.",
    sections: [
      { id: "goal", title: "Product goal", html: `<blockquote><p>A user can create a governed pre-loss property record, document a loss, and generate a complete review package whose evidence, versions, and human decisions are traceable.</p></blockquote>` },
      { id: "personas", title: "Primary personas", html: `<ul><li><strong>Policyholder:</strong> creates and controls the property and claim-support record.</li><li><strong>Field assistant:</strong> helps capture evidence under assigned authority.</li><li><strong>Estimator / reviewer:</strong> creates or reviews scope, quantities, pricing, and exceptions.</li><li><strong>Carrier reviewer:</strong> receives read-only package and evidence access.</li><li><strong>Administrator:</strong> manages organization, roles, templates, retention, and audit.</li></ul>` },
      { id: "in-scope", title: "MVP in scope", html: `<ol><li>Account, organization, role, consent, and authentication</li><li>Property, structure, policy, and authorized-party intake</li><li>Rooms, exterior, systems, appliances, and contents</li><li>Capture sessions, photos, video, documents, metadata, and upload queue</li><li>Evidence quality and missing-information checks</li><li>Human-created scope, quantities, line items, pricing source, and overrides</li><li>Claim-support package, evidence manifest, and PDF export</li><li>Audit log and read-only institutional reviewer</li><li>Pilot analytics and support tools</li></ol>` },
      { id: "out-scope", title: "Explicitly out of scope", html: `<ul><li>Automated coverage or eligibility determination</li><li>Autonomous estimate approval or settlement</li><li>Unreviewed computer-vision damage conclusions</li><li>Marketplace, payments, contractor dispatch, or broad CRM</li><li>Full FEMA Public Assistance project management</li><li>Nationwide policy and form support</li><li>Deep carrier core-system integration</li><li>Consumer social features or public damage feeds</li></ul>` },
      { id: "stories", title: "Critical user stories", html: `<ul><li>As a policyholder, I can see what evidence is local, uploading, verified, or failed.</li><li>As a policyholder, I can stop and resume a room capture without losing work.</li><li>As a reviewer, I can distinguish original evidence from derivatives and user assertions.</li><li>As an estimator, I can document the source and reason for every price override.</li><li>As a carrier reviewer, I can inspect the package without changing the policyholder record.</li><li>As an auditor, I can see who accessed, transformed, reviewed, exported, or deleted each item.</li></ul>` },
      { id: "workflow", title: "End-to-end workflow", html: `<div class="table-wrap"><table><thead><tr><th>Stage</th><th>Required outcome</th></tr></thead><tbody><tr><td>Enroll</td><td>Verified account, organization, consent, property, and policy context</td></tr><tr><td>Prepare</td><td>Complete baseline rooms, exterior, systems, contents, and documents</td></tr><tr><td>Activate</td><td>Event and claim-support session linked to baseline</td></tr><tr><td>Capture</td><td>Guided damage evidence with local and server state</td></tr><tr><td>Review</td><td>Quality, completeness, scope, estimate, and documented overrides</td></tr><tr><td>Authorize</td><td>User reviews facts, signs where applicable, and authorizes export</td></tr><tr><td>Package</td><td>PDF, structured data, evidence manifest, and audit extract</td></tr><tr><td>Institutional review</td><td>Read-only access, comments, exceptions, and recorded outcome</td></tr></tbody></table></div>` },
      { id: "functional", title: "Functional requirements", html: `<ul><li>FR-01: Create and manage organizations, users, roles, and invitations.</li><li>FR-02: Capture consent version, purpose, timestamp, actor, and revocation state.</li><li>FR-03: Create property, structure, room, item, policy, and claim-support records.</li><li>FR-04: Capture media offline and queue resumable uploads.</li><li>FR-05: Generate hash and metadata records at capture and server receipt.</li><li>FR-06: Preserve original object version and link all derivatives.</li><li>FR-07: Run configurable quality and completeness checks.</li><li>FR-08: Create versioned scope, estimate, line items, sources, and overrides.</li><li>FR-09: Generate deterministic package and evidence manifest.</li><li>FR-10: Provide read-only reviewer workflow and immutable audit events.</li></ul>` },
      { id: "nonfunctional", title: "Nonfunctional requirements", html: `<ul><li>Offline capture must survive app restart and network loss.</li><li>Uploads must be resumable, idempotent, and visibly recoverable.</li><li>Cross-organization access must be denied by default.</li><li>Sensitive objects must never be publicly addressable.</li><li>Every material action must generate an attributable audit event.</li><li>Package generation must be repeatable from a recorded template and data version.</li><li>Core mobile flows must meet defined accessibility criteria.</li><li>Operational metrics must expose failure, latency, queue age, storage, and cost.</li></ul>` },
      { id: "evidence-states", title: "Evidence state model", html: `<div class="table-wrap"><table><thead><tr><th>State</th><th>Meaning</th><th>Allowed transition</th></tr></thead><tbody><tr><td>Local</td><td>Exists only on device</td><td>Queued or deleted by authorized user</td></tr><tr><td>Queued</td><td>Prepared for upload</td><td>Uploading, failed, cancelled</td></tr><tr><td>Uploading</td><td>Transfer in progress</td><td>Received, failed, paused</td></tr><tr><td>Received</td><td>Server has object and receipt metadata</td><td>Verified or quarantined</td></tr><tr><td>Verified</td><td>Integrity and required metadata checks complete</td><td>Reviewed, retained, derivative created</td></tr><tr><td>Quarantined</td><td>Security or integrity exception</td><td>Rejected or released by authorized review</td></tr><tr><td>Finalized</td><td>Included in authorized package</td><td>Supplemented; original remains preserved</td></tr></tbody></table></div>` },
      { id: "analytics", title: "Pilot analytics", html: `<ul><li>Enrollment, start, completion, abandonment, and support events</li><li>Capture count, usable evidence rate, upload failure, and retry success</li><li>Missing-information flags and correction cycles</li><li>Estimator and reviewer time</li><li>Package generation and export success</li><li>User satisfaction and accessibility findings</li><li>Infrastructure and support cost per completed record</li></ul>` },
      { id: "acceptance", title: "Release acceptance criteria", html: `<ol><li>A test user completes the workflow offline and later synchronizes without data loss.</li><li>A second organization cannot access any object, metadata, or derived URL.</li><li>An original evidence object cannot be silently overwritten.</li><li>A reviewer can explain the source and version of every included line item and evidence item.</li><li>The same approved data and template produce an equivalent package.</li><li>All privileged actions appear in the audit export.</li><li>A carrier reviewer can inspect and comment without modifying the source record.</li><li>Security, privacy, accessibility, restore, and incident-response tests pass the pilot baseline.</li></ol>` },
      { id: "backlog", title: "Post-MVP backlog", html: `<ul><li>Additional hazards and forms</li><li>Carrier claim-link and document-ingestion APIs</li><li>Municipal asset and Public Assistance workspace</li><li>Advanced measurement and spatial reconstruction</li><li>Computer-vision quality, comparison, and damage-assistance models</li><li>Portfolio readiness and mitigation analytics</li><li>Partner marketplace and professional assignment</li></ul>` },
      { id: "governance", title: "Product governance", html: `<p>Every requested feature must identify the target user, operational decision, legal boundary, required data, measurable benefit, security impact, support burden, and reason it belongs before the current pilot milestone. Features without that case remain deferred.</p>` }
    ]
  },

  executive: {
    title: "Corporate Overview",
    subtitle: "Risk Kapture™ at a glance.",
    summary: "A concise executive introduction to the problem, platform, products, pilot, and strategic positioning.",
    audience: "Executives, prospective partners, initial meetings",
    purpose: "Executive orientation",
    version: "1.0 · July 26, 2026",
    classification: "External discussion draft",
    status: "Concise overview derived from the master strategy. Audience-specific claims should be supported by the corresponding detailed publication.",
    decision: "Decide whether Risk Kapture merits a focused technical, commercial, government, carrier, or pilot discussion.",
    sections: [
      { id: "idea", title: "The core idea", html: `<blockquote><p>Risk Kapture gives people and communities a record before disaster and a faster path after disaster.</p></blockquote><p>The platform creates governed pre-loss property and public-asset records, then uses them to support post-loss documentation, claim packages, professional review, public recovery organization, and mitigation planning.</p>` },
      { id: "products", title: "Three connected products", html: `<ul><li><strong>Home:</strong> resident property vault and guided event documentation.</li><li><strong>Carrier:</strong> white-labeled enrollment, evidence review, exceptions, and integration.</li><li><strong>Civic:</strong> public asset registry, damage inventory, recovery workspace, and command map.</li></ul>` },
      { id: "difference", title: "Why it is different", html: `<p>Risk Kapture is not positioned as another stand-alone estimator. It connects pre-loss evidence, post-loss capture, versioned estimates, forms, permissions, audit events, and downstream workflows through one shared data model.</p>` },
      { id: "pilot", title: "First proof", html: `<ol><li>Property and policy intake</li><li>Room-by-room evidence capture</li><li>Immutable upload and metadata</li><li>Human-reviewed scope and estimate</li><li>Structured package generation</li><li>Read-only institutional review</li></ol>` },
      { id: "model", title: "Commercial model", html: `<p>Potential revenue includes municipal subscriptions, carrier white-label licensing, sponsored or per-package workflows, implementation, integrations, and later governed analytics. Pricing and financial forecasts require customer and cost validation.</p>` },
      { id: "next", title: "The next decision", html: `<p>Select one hazard, one geography, one accountable partner, and one measurable vertical slice. Prove documentation quality and review speed before expanding the product narrative.</p>` }
    ]
  }
};