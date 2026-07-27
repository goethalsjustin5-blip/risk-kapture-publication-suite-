/* global RK_DOCUMENTS */

(() => {
  const investor = RK_DOCUMENTS.investor;
  if (!investor) return;

  investor.status = "The strategy, product thesis, funding ask, use of funds, five-year planning model, and base-case path to operating break-even are now defined. Pricing, customer counts, sales timing, gross margins, hiring assumptions, financing terms, and market sizing remain management assumptions requiring diligence and validation.";
  investor.decision = "Determine whether to invest in or support a $2.0 million pre-seed round designed to fund Risk Kapture through pilot-ready product completion, controlled paid deployments, commercial validation, and base-case monthly operating break-even in Month 27.";

  const oldCapital = investor.sections.find((section) => section.id === "capital");
  if (oldCapital) {
    oldCapital.title = "Capital strategy and milestone discipline";
    oldCapital.html = `
      <p>Risk Kapture is seeking a <strong>$2.0 million pre-seed round</strong>. The round is sized to finance the company through product hardening, security and legal controls, controlled paid pilots, enterprise customer development, and a base-case path to monthly operating break-even in Month 27.</p>
      <div class="metric-row">
        <div class="metric"><b>$2.0M</b><span>Recommended pre-seed raise</span></div>
        <div class="metric"><b>$750K</b><span>Minimum viable first close</span></div>
        <div class="metric"><b>24–27</b><span>Months of modeled runway</span></div>
      </div>
      <h3>Capital release should follow measurable de-risking</h3>
      <ul>
        <li><strong>Month 3:</strong> production foundation, evidence architecture, identity, intake, and security plan.</li>
        <li><strong>Month 6:</strong> pilot-ready vertical slice with mobile capture, evidence upload, human review, export, and audit events.</li>
        <li><strong>Month 9:</strong> first paid deployment with baseline metrics and operating procedures.</li>
        <li><strong>Month 12:</strong> carrier read-only validation of completeness, quality, and review effort.</li>
        <li><strong>Month 18:</strong> repeatable onboarding, multiple deployments, referenceable results, and measurable gross margin.</li>
        <li><strong>Month 24–27:</strong> contracted revenue acceleration and base-case monthly operating break-even.</li>
      </ul>
      <div class="callout warning"><strong>FIRST-CLOSE LIMIT</strong><p>A $750,000 first close can fund approximately nine to ten months of product hardening and pilot preparation. It does not independently fund the full path to profitability.</p></div>
    `;
  }

  const financialSection = {
    id: "financial-cost-strategy",
    title: "Financial cost and strategy",
    html: `
      <p>The financial plan is built as a management planning case rather than a guarantee. It connects the funding ask to specific operating milestones, a measured revenue build, and the time required to reach profitability.</p>

      <h3>Recommended use of funds</h3>
      <div class="table-wrap"><table><thead><tr><th>Category</th><th>Amount</th><th>Share</th><th>Purpose</th></tr></thead><tbody>
        <tr><td>Product and engineering</td><td>$780,000</td><td>39%</td><td>Technical leadership, mobile/full-stack development, backend/data, UX, QA, and testing</td></tr>
        <tr><td>Pilot delivery and customer success</td><td>$300,000</td><td>15%</td><td>Implementation, field operations, onboarding, training, support, equipment, and measurement</td></tr>
        <tr><td>Security, compliance, legal, and insurance</td><td>$260,000</td><td>13%</td><td>Privacy and insurance counsel, contracts, security review, penetration testing, E&O, and cyber coverage</td></tr>
        <tr><td>Sales, partnerships, and market development</td><td>$220,000</td><td>11%</td><td>Business development, proposals, industry outreach, demonstrations, and partner recruitment</td></tr>
        <tr><td>Contingency and working capital</td><td>$200,000</td><td>10%</td><td>Schedule slippage, payment delays, incidents, and unplanned pilot requirements</td></tr>
        <tr><td>Cloud, data, software, and devices</td><td>$140,000</td><td>7%</td><td>Storage, database, mapping, observability, security tools, and controlled pilot environments</td></tr>
        <tr><td>G&A, finance, and administration</td><td>$100,000</td><td>5%</td><td>Accounting, payroll, filings, recruiting, communications, and basic administration</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>$2,000,000</strong></td><td><strong>100%</strong></td><td><strong>Recommended pre-seed round</strong></td></tr>
      </tbody></table></div>

      <h3>Base-case five-year projection</h3>
      <div class="table-wrap"><table><thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Year 4</th><th>Year 5</th></tr></thead><tbody>
        <tr><td>Revenue</td><td>$200,000</td><td>$1,250,000</td><td>$4,500,000</td><td>$10,200,000</td><td>$19,000,000</td></tr>
        <tr><td>Gross margin</td><td>60%</td><td>68%</td><td>74%</td><td>78%</td><td>81%</td></tr>
        <tr><td>Gross profit</td><td>$120,000</td><td>$850,000</td><td>$3,330,000</td><td>$7,956,000</td><td>$15,390,000</td></tr>
        <tr><td>Operating expense</td><td>$1,050,000</td><td>$1,450,000</td><td>$2,850,000</td><td>$5,250,000</td><td>$8,500,000</td></tr>
        <tr><td>Operating EBITDA</td><td>($930,000)</td><td>($600,000)</td><td>$480,000</td><td>$2,706,000</td><td>$6,890,000</td></tr>
      </tbody></table></div>

      <div class="metric-row">
        <div class="metric"><b>Month 27</b><span>Base-case monthly operating break-even</span></div>
        <div class="metric"><b>Year 3</b><span>First full profitable operating year</span></div>
        <div class="metric"><b>36%</b><span>Approximate Year 5 operating EBITDA margin</span></div>
      </div>

      <h3>Revenue strategy</h3>
      <p>The model does not rely on consumer subscriptions alone. The principal economic engine is a mix of municipal implementation and SaaS, carrier pilots and enterprise white-label licensing, partner workspaces, claim-package or event fees, and later portfolio analytics under strict consent and governance controls.</p>
      <ul>
        <li><strong>Municipal:</strong> paid pilots, implementation, annual platform subscription, and expansion across assets and residents.</li>
        <li><strong>Carrier:</strong> controlled pilot, setup and integration, policy or claim usage, and enterprise licensing.</li>
        <li><strong>Partner:</strong> contractor and professional workspaces, assigned cases, evidence review, and export workflows.</li>
        <li><strong>Transaction:</strong> sponsored or per-completed claim packages where permitted and operationally justified.</li>
        <li><strong>Analytics:</strong> later-stage aggregated portfolio and readiness intelligence with explicit privacy controls.</li>
      </ul>

      <h3>Scenario boundaries</h3>
      <div class="table-wrap"><table><thead><tr><th>Scenario</th><th>Monthly operating break-even</th><th>Additional capital</th></tr></thead><tbody>
        <tr><td>Upside</td><td>Month 22</td><td>Not required by the model</td></tr>
        <tr><td>Base case</td><td>Month 27</td><td>No planned follow-on</td></tr>
        <tr><td>Downside</td><td>Month 42</td><td>Approximately $1.0 million–$1.2 million likely</td></tr>
      </tbody></table></div>

      <div class="callout risk"><strong>FINANCIAL DILIGENCE</strong><p>Break-even means positive monthly operating EBITDA before interest, taxes, depreciation, stock compensation, and unusual legal or financing costs. Pricing, customer volume, procurement timing, carrier sales cycles, gross margins, compensation, and financing terms must be replaced with contracted and quoted inputs before formal investment reliance.</p></div>
      <p><a href="financial-model.html"><strong>Open the complete Financial Model & Funding Ask</strong></a> for the interactive scenario model, detailed assumptions, downloadable CSV schedules, monthly runway, and print-ready financial memorandum.</p>
    `
  };

  const existingIndex = investor.sections.findIndex((section) => section.id === financialSection.id);
  if (existingIndex >= 0) {
    investor.sections[existingIndex] = financialSection;
  } else {
    const riskIndex = investor.sections.findIndex((section) => section.id === "risks");
    investor.sections.splice(riskIndex >= 0 ? riskIndex : investor.sections.length, 0, financialSection);
  }
})();
