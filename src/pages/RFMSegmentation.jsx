import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function RFMSegmentation() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="text-violet-600 hover:text-violet-700 font-semibold">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="bg-violet-100 text-violet-700 text-xs font-medium px-3 py-1 rounded-full">SQL</span>
            <span className="bg-violet-100 text-violet-700 text-xs font-medium px-3 py-1 rounded-full">Power BI</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">RFM Customer Segmentation & CRM Strategy</h1>
          <p className="text-xl text-slate-600">UCI Online Retail II (2009-2011) - UK-based online gift-ware retail</p>
        </div>

        {/* Power BI Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📊 Interactive Dashboard</h2>
          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <div className="relative w-full" style={{ paddingBottom: '62.25%' }}>
              <iframe
                title="CRM Project"
                src="https://app.powerbi.com/view?r=eyJrIjoiMzEyNGRiMGItYmQ0ZC00OWFmLWExZTYtMzVjYTIwODQ4NWQyIiwidCI6ImI1NzhjYmRlLTk2YTMtNDUyOS05NDdlLTU1NTVjZWVhMDI4NCJ9"
                frameBorder="0"
                allowFullScreen={true}
                className="absolute top-0 left-0 w-full h-full rounded"
              ></iframe>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="/projects/rfm-customer-segmentation.pbix" download className="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download .pbix
            </a>
            <a href="/projects/rfm-customer-segmentation.sql" download className="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download .sql
            </a>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">❓ Problem Statement</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A UK-based online gift-ware retailer selling to both individual buyers and wholesalers had no visibility into which customers were driving revenue - and which were quietly disappearing.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            With over 5,800 customers and two years of transaction data, treating every customer the same meant wasted marketing budget, missed retention opportunities, and no way to prioritise who actually mattered.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The goal: segment every customer by behaviour and turn that into a CRM strategy that tells the business exactly who to reward, who to re-engage, and who to let go.
          </p>
        </div>

        {/* Methodology */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">🔬 Methodology</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Step 1: Data cleaning</h3>
              <p className="text-slate-600 leading-relaxed">Removed cancelled orders, missing customer IDs, negative quantities and zero-price rows. This reduced the raw dataset from ~1M rows to 797,884 clean transactions across 5,878 customers - a 20% reduction documented and accounted for.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Step 2: RFM calculation</h3>
              <p className="text-slate-600 leading-relaxed">Aggregated transactions to one row per customer, calculating three metrics: days since last purchase (Recency), number of distinct orders (Frequency), and total revenue generated (Monetary).</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Step 3: Scoring with NTILE(5)</h3>
              <p className="text-slate-600 leading-relaxed">Used SQL's <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">NTILE(5)</code> window function to rank each customer on a 1-5 scale relative to the full customer base - no manual thresholds, no arbitrary benchmarks. Score 5 always means top 20% of actual customers.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Step 4: Segmentation</h3>
              <p className="text-slate-600 leading-relaxed">Mapped score combinations to six named segments using <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">CASE WHEN</code> logic - translating each pattern into a plain-English customer type with a clear marketing implication.</p>
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">💡 Key Findings</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">The headline</h3>
              <p className="text-slate-600 leading-relaxed">Champions are just 21% of customers but generate 68% of total revenue ($11.78M of $17.37M). This is the single most important number in the analysis - and the clearest argument for a retention-first marketing strategy.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">The hibernating problem</h3>
              <p className="text-slate-600 leading-relaxed">1,295 customers (22% of the base) are hibernating - collectively generating only $0.41M, averaging $318 each. They were never deeply engaged, and the data suggests minimal marketing investment is warranted here.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">The disengaged middle</h3>
              <p className="text-slate-600 leading-relaxed">857 customers haven't returned in an average of 313 days despite spending $950 each when they did. A targeted win-back campaign reaching just 15% of this group recovers ~$122K in revenue.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">The at-risk opportunity</h3>
              <p className="text-slate-600 leading-relaxed">620 At Risk customers average $2,006 spend - double the Needs Attention segment - but with an average recency of 301 days, the window for recovery is closing. Winning back just 10% recovers ~$124K. This is the highest-priority segment for intervention.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">The loyalty gap</h3>
              <p className="text-slate-600 leading-relaxed">Loyal customers make up 22.75% of the base but generate only $2.70M - compared to Champions' $11.78M from a similar-sized group. Frequency and recency drive 4x more value than segment size alone. Growing the Champion tier, not just the customer count, is the real growth lever.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">The potential loyalist opportunity</h3>
              <p className="text-slate-600 leading-relaxed">503 Potential Loyalists average just 1.53 orders and $840 spend. A nurture sequence converting them to 3+ orders could unlock ~$423K in incremental revenue from customers who are already warm.</p>
            </div>
          </div>
        </div>

        {/* CRM Strategy */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📋 CRM Strategy</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Champions - reward and retain</h3>
              <p className="text-slate-600 leading-relaxed">These are the business. Offer early access to new products, invite them into a loyalty programme, and ask for referrals. Avoid heavy discounting - they already buy at full price. Focus spend on making them feel recognised.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Loyal customers - upsell and deepen</h3>
              <p className="text-slate-600 leading-relaxed">The relationship is established. Introduce higher-value gift sets, wholesale bundles, or subscription options. Personalised cross-sell emails based on past category behaviour are most effective here.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Potential loyalists - nurture into habit</h3>
              <p className="text-slate-600 leading-relaxed">The window is open - they bought recently but haven't returned. A 3-email sequence in the two weeks following their first purchase (product highlights, social proof, 10% repeat-purchase offer) is the highest-ROI action for this group.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Needs attention - re-engage before it's too late</h3>
              <p className="text-slate-600 leading-relaxed">313 days is a long time - but they spent $950 when they were active, so they're worth a structured effort. One targeted email highlighting new arrivals, a time-limited offer, and a clear call to action. Monitor for 30 days and move to suppression if no response.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">At risk - win-back urgently</h3>
              <p className="text-slate-600 leading-relaxed">Highest priority after Champions. A personal "we miss you" email with a 15% discount, sent within the next 30 days. Given their $2,006 average spend, even a modest recovery rate has significant revenue impact. Consider a follow-up survey asking why they stopped - the feedback alone has strategic value.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">Hibernating - low-cost reactivation only</h3>
              <p className="text-slate-600 leading-relaxed">One email per quarter maximum. If no response after three attempts, suppress from all campaigns. Protecting sender reputation and marketing budget matters more than chasing customers who were never deeply engaged.</p>
            </div>
          </div>
        </div>

        {/* What I'd Do Next */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">🚀 What I'd Do Next</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            This analysis is a snapshot. The real value comes from running it quarterly and tracking segment migration - how many Potential Loyalists converted to Loyal, how many Loyal customers slipped to At Risk. Movement between segments over time is a much earlier warning signal than waiting for revenue to drop.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I'd also enrich the model with email engagement data. A customer with low recency but high email open rates is very different from one who has gone completely dark - and that distinction should change how aggressively you pursue them.
          </p>
        </div>

        {/* Limitations */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">⚠️ Limitations & Considerations</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Three data gaps worth noting before acting on these findings.</p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-1">1. Wholesaler mix</h3>
              <p className="text-slate-600 leading-relaxed">The dataset combines individual buyers and wholesalers with no way to distinguish between them. The Champion tier's $9,307 average spend is likely inflated by wholesale orders, and the win-back revenue estimates assume consumer-style responses - which wouldn't apply to wholesale accounts. A single "is_wholesaler" flag would significantly sharpen every recommendation here.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">2. Seasonality</h3>
              <p className="text-slate-600 leading-relaxed">RFM penalises seasonal buyers unfairly. A customer who buys reliably every Christmas for three years scores low on frequency - potentially landing in Hibernating - despite being a loyal annual buyer. For a gift-ware retailer, this is a meaningful distortion that could misdirect win-back spend toward customers who are simply waiting for the next occasion.</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-1">3. Snapshot, not trajectory</h3>
              <p className="text-slate-600 leading-relaxed">The scores reflect cumulative behaviour across 2009-2011 as a single point-in-time view. A customer declining month-on-month scores the same as one who has been stable for two years. Running this analysis quarterly and tracking segment migration would turn a static report into an early warning system for churn.</p>
            </div>
          </div>
        </div>

        {/* Skills & Data Source */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">🛠️ Skills Demonstrated</h2>
            <ul className="text-slate-600 space-y-1">
              <li>• SQL Server</li>
              <li>• Power BI</li>
              <li>• DAX (Data Analysis Expressions)</li>
              <li>• RFM Analysis</li>
              <li>• Customer Segmentation</li>
              <li>• CRM Strategy</li>
              <li>• Data Cleaning</li>
              <li>• NTILE Window Functions</li>
              <li>• Data Modelling</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">🗂️ Data Source</h2>
            <p className="text-slate-600 mb-4">
              UCI Online Retail II dataset from <a href="https://www.kaggle.com/datasets/mashlyn/online-retail-ii-uci" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700 underline">Kaggle</a>. 1M+ transactions from a UK-based online gift-ware retailer (2009-2011).
            </p>
            <h3 className="text-xl font-bold text-slate-800 mb-2">⚠️ Note</h3>
            <p className="text-slate-600">
              The dataset cuts off at 09/12/2011 - just before the Christmas peak. This inflates recency scores for customers who would normally purchase in December, potentially misclassifying seasonal buyers as Hibernating or At Risk.
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="text-center">
          <Link to="/" className="inline-block bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RFMSegmentation
