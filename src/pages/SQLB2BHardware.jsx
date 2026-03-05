import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function SQLB2BHardware() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sqlCode = `/* Data Cleaning
*/
SELECT DISTINCT sp.product
FROM sales_pipeline sp
LEFT JOIN products p
    ON sp.product = p.product
WHERE p.product IS NULL


UPDATE sales_pipeline
SET product = 'GTX Pro'
WHERE product = 'GTXPro';

/* Question 1: How many opportunities are in each deal_stage, and what percentage of total pipeline do they represent?
*/
SELECT
    deal_stage,
    COUNT(*) AS opportunity_count,
    CAST(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER ()
        AS DECIMAL(5,2)
    ) AS percentage_of_pipeline
FROM sales_pipeline
GROUP BY deal_stage
ORDER BY opportunity_count DESC;

/* Question 2: What is the win (won) rate by product?
*/
SELECT
    p.product,
    SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) AS won_deals,
    CAST(
        SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
        / COUNT(*)
        AS DECIMAL(5,2)
    ) AS win_rate,
    SUM(CASE WHEN sp.deal_stage = 'Lost' THEN 1 ELSE 0 END) AS lost_deals,
    CAST(
        SUM(CASE WHEN sp.deal_stage = 'Lost' THEN 1 ELSE 0 END) * 100.0
        / COUNT(*)
        AS DECIMAL(5,2)
    ) AS lost_rate
FROM sales_pipeline AS sp
JOIN products AS p 
    ON p.product = sp.product
WHERE sp.deal_stage IN ('Won','Lost')
GROUP BY p.product
ORDER BY win_rate DESC;

/* Question 3: For each product, what are the total revenue and average deal size?
*/
SELECT
    product,
    SUM(close_value) AS total_revenue,
    AVG(close_value) AS avg_deal_size
FROM sales_pipeline
WHERE deal_stage = 'Won'
GROUP BY product
ORDER BY total_revenue DESC;

/* Question 4: Which account sectors have the highest close rate and average deal value?
*/
SELECT
    a.sector,
    SUM(sp.close_value) AS total_value,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN sp.close_value END) AS avg_deal_value,
    CAST(
         SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
         / COUNT(*)
         AS DECIMAL(5,2)
        ) AS win_rate
FROM sales_pipeline AS sp
JOIN accounts AS a ON sp.account = a.account
WHERE sp.deal_stage IN ('Won','Lost')
GROUP BY a.sector
ORDER BY total_value DESC

/* Question 5: What is the average number of days from engage_date to close_date, and how does it vary by product and sector?
*/
SELECT
    p.product,
    a.sector,
    AVG(DATEDIFF(DAY, sp.engage_date, sp.close_date)) AS avg_days_to_close
FROM sales_pipeline AS sp
JOIN products AS p ON p.product = sp.product
JOIN accounts AS a ON a.account = sp.account
WHERE sp.deal_stage = 'Won'
GROUP BY p.product, a.sector
ORDER BY avg_days_to_close;

/* Question 6: How do deal value, win rate and average sales cycle length differ by company size (employees)?
*/
SELECT
    CASE
        WHEN a.employees < 50 THEN 'Small'
        WHEN a.employees >=50 AND a.employees < 250 THEN 'Medium'
        WHEN a.employees >=250 AND a.employees < 1000 THEN 'Large'
        ELSE 'Enterprise'
    END AS company_size,
    SUM(sp.close_value) AS total_value,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN sp.close_value END) AS avg_deal_value,
    CAST(
         SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
         / COUNT(*)
         AS DECIMAL(5,2)
        ) AS win_rate,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN DATEDIFF(day, sp.engage_date, sp.close_date) END) AS avg_sales_cycle_days
FROM sales_pipeline AS sp
JOIN accounts AS a ON sp.account = a.account
WHERE sp.deal_stage IN ('Won','Lost')
GROUP BY
      CASE
            WHEN a.employees < 50 THEN 'Small'
            WHEN a.employees >=50 AND a.employees < 250 THEN 'Medium'
            WHEN a.employees >=250 AND a.employees < 1000 THEN 'Large'
            ELSE 'Enterprise'
       END
ORDER BY total_value DESC


/* Question 7: How do revenue, win rate, and deal size vary by regional_office and manager?
*/
SELECT
    st.regional_office,
    st.manager,
    SUM(sp.close_value) AS revenue,
    CAST(
         SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
         / COUNT(*)
         AS DECIMAL(5,2)
        ) AS win_rate,
    AVG(CASE WHEN sp.deal_stage = 'Won' THEN sp.close_value END) AS avg_deal_value
FROM sales_pipeline AS sp
JOIN sales_teams AS st ON sp.sales_agent = st.sales_agent
WHERE sp.deal_stage IN ('Won', 'Lost')
GROUP BY st.regional_office, st.manager
ORDER BY revenue DESC`;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          B2B Sales Pipeline & Revenue Optimisation
        </h1>
        
        {/* Project Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">📌 Project Objective</h2>
          <p className="text-slate-600 mb-4">
            Analysed a B2B hardware company's sales pipeline using SQL Server to identify revenue drivers, 
            product performance, vertical opportunities, and sales cycle dynamics.
          </p>
          <p className="text-slate-600">
            The goal was to transform structured CRM-style data into actionable marketing insights that support 
            prioritisation, segmentation, and revenue growth strategy.
          </p>
        </div>

        {/* Method */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">💻 Method</h2>
          <ul className="text-slate-600 space-y-2">
            <li>• Designed and validated a relational data model (fact + dimension structure)</li>
            <li>• Enforced primary and foreign key relationships to ensure referential integrity</li>
            <li>• Applied:
              <ul className="ml-6 mt-1 space-y-1">
                <li>- Conditional aggregation for win-rate analysis</li>
                <li>- Revenue and deal size calculations</li>
                <li>- Sales cycle analysis using DATEDIFF</li>
                <li>- Segmentation by sector, company size, and region</li>
              </ul>
            </li>
            <li>• Standardised reporting outputs using proper decimal casting for clean metric presentation</li>
            <li>• Interpreted results through a marketing lens, focusing on conversion efficiency and revenue impact</li>
          </ul>
        </div>

        {/* Key SQL Snippet */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">📊 Key SQL Snippet</h2>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-3">
            <pre className="text-sm"><code>{`SELECT
    p.product,
    COUNT(*) AS total_opportunities,
    SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) AS won_deals,
    CAST(
        SUM(CASE WHEN sp.deal_stage = 'Won' THEN 1 ELSE 0 END) * 100.0
        / COUNT(*)
        AS DECIMAL(5,2)
    ) AS win_rate_pct
FROM sales_pipeline sp
JOIN products p ON p.product = sp.product
WHERE sp.deal_stage IN ('Won','Lost')
GROUP BY p.product;`}</code></pre>
          </div>
          <p className="text-slate-600 text-sm">
            Demonstrates conversion analysis, conditional aggregation, and metric accuracy control.
          </p>
        </div>

        {/* Key Insights */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">📈 Key Insights</h2>
          <ul className="text-slate-600 space-y-2">
            <li>• ~48% overall win rate indicates strong baseline pipeline performance.</li>
            <li>• Revenue is concentrated in GTX Pro and GTX Plus Pro product lines.</li>
            <li>• GTK 500 generates the highest average deal size, signaling enterprise positioning.</li>
            <li>• Retail, Technology, Medical, and Software sectors drive the strongest revenue impact.</li>
            <li>• Enterprise accounts generate the highest total revenue; mid-market accounts convert slightly faster.</li>
            <li>• Higher-value products show longer sales cycles, requiring structured nurture strategies.</li>
          </ul>
        </div>

        {/* Data Source & Limitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">🗂 Data Source</h2>
            <p className="text-slate-600 mb-3">
              Fictitious B2B sales pipeline dataset (CRM-style structure) from <a href="https://www.kaggle.com/datasets/innocentmfa/crm-sales-opportunities/data?select=products.csv" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Kaggle</a>.
            </p>
            <p className="text-slate-600 mb-2">4 relational tables:</p>
            <ul className="text-slate-600 ml-4 space-y-1">
              <li>• sales_pipeline (fact table)</li>
              <li>• accounts</li>
              <li>• products</li>
              <li>• sales_teams</li>
            </ul>
            <p className="text-slate-600 mt-3">
              Dataset simulates opportunity lifecycle, revenue, product portfolio, industry segmentation, and firmographics.
            </p>
            <p className="text-slate-600 mt-2 text-sm italic">
              This project focuses on analytical methodology and business interpretation rather than real proprietary data.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">⚠️ Limitations</h2>
            <ul className="text-slate-600 space-y-2">
              <li>• Data is simulated and does not include real marketing channel attribution.</li>
              <li>• No lead source, campaign, or customer acquisition cost data available.</li>
              <li>• Sales cycle analysis assumes consistent stage definitions across products.</li>
              <li>• No time-series trend analysis was performed due to limited temporal segmentation.</li>
            </ul>
          </div>
        </div>

        {/* Full SQL Code */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-800">💻 Complete SQL Code</h2>
            <a 
              href="/projects/sql-b2b-hardware.sql" 
              download
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download SQL File
            </a>
          </div>
          <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm"><code>{sqlCode}</code></pre>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SQLB2BHardware;
