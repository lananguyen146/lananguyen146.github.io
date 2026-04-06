import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function PowerBIElectronics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          Global Electronics Retail Performance Analysis
        </h1>
        <p className="text-xl text-slate-600 mb-6">Interactive Sales & Customer Intelligence Dashboard (2017–2021)</p>
        
        {/* Interactive Dashboard */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📊 Interactive Dashboard</h2>
          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <div className="relative w-full" style={{ paddingBottom: '62.25%' }}>
              <iframe 
                title="Electronic Retailer - Lana Nguyen" 
                src="https://app.powerbi.com/view?r=eyJrIjoiZDJhZmUzZTItNzdhZi00YmNlLWJkMjAtMzQ5ZDkxZGQ0NGMwIiwidCI6ImI1NzhjYmRlLTk2YTMtNDUyOS05NDdlLTU1NTVjZWVhMDI4NCJ9&pageName=75e8ce99133442e7502e" 
                frameBorder="0" 
                allowFullScreen={true}
                className="absolute top-0 left-0 w-full h-full rounded"
              ></iframe>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="/projects/electronic-retailer.pbix" 
              download
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Power BI File (.pbix)
            </a>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">📌 Overview</h2>
          <p className="text-slate-600">
            This project analyses transactional sales data from a global electronics retailer to identify revenue drivers, customer behaviour patterns, and channel performance trends. The dashboard translates multi-dimensional sales data into an interactive decision-support tool.
          </p>
        </div>

        {/* Key Business Questions */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">❓ Key Business Questions Answered</h2>
          <ul className="text-slate-600 space-y-2 ml-6">
            <li>• Which product categories drive the majority of revenue?</li>
            <li>• How balanced is the online vs in-store channel mix?</li>
            <li>• Which customer segments contribute most to repeat purchases?</li>
            <li>• Does store size influence revenue performance?</li>
          </ul>
        </div>

        {/* Executive Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">📈 Executive Summary</h2>
          <p className="text-slate-600 mb-4">
            Between 2017–2020, the retailer achieved strong revenue growth, generating $55.76M in total revenue and $32.66M in profit, driven primarily by the Computers category and U.S. market performance. However, performance concentration across category and channel presents strategic growth and risk considerations.
          </p>
          
          <div className="space-y-4 text-slate-600">
            <div>
              <p className="font-semibold">1. Revenue Concentration Risk</p>
              <p className="mb-2">Revenue is heavily dependent on the Computers category ($19.3M), with all Top 10 products belonging to this segment. While profitable, this creates exposure to demand shifts and competitive pressure.</p>
              <p className="italic">Opportunity: Diversify revenue by scaling high-margin but under-leveraged categories (Cameras, TV & Video) and implementing cross-sell strategies.</p>
            </div>
            
            <div>
              <p className="font-semibold">2. Online Channel Underpenetration</p>
              <p className="mb-2">Despite global digital acceleration, 78.8% of orders are in-store, with online contributing only 21.2%.</p>
              <p className="italic">Opportunity: Optimise digital acquisition and UX to rebalance channel mix and reduce fixed-cost dependency on physical stores.</p>
            </div>
            
            <div>
              <p className="font-semibold">3. Strong Retention Foundation</p>
              <p className="mb-2">The business maintains a 47.6% repeat purchase rate and stable CLV trend, indicating strong retention mechanics. Revenue contribution skews toward Baby Boomers and Gen X, while Gen Z remains underdeveloped.</p>
              <p className="italic">Opportunity: Deploy lifecycle marketing and targeted digital campaigns to future-proof customer growth.</p>
            </div>
            
            <div>
              <p className="font-semibold">4. Geographic Dependency</p>
              <p className="mb-2">The U.S. accounts for $24M (~43% of total revenue), significantly outperforming other regions.</p>
              <p className="italic">Opportunity: Scale high-performing markets while reassessing expansion strategy in lower-performing regions.</p>
            </div>
          </div>
        </div>

        {/* Business Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">💡 Business Recommendations</h2>
          <ul className="text-slate-600 space-y-2 ml-6">
            <li>• Accelerate online growth to rebalance channel dependency</li>
            <li>• Reduce revenue concentration risk by promoting adjacent categories</li>
            <li>• Implement structured retention strategy to maximise CLV</li>
            <li>• Optimise store portfolio using revenue-per-square-metre analysis</li>
          </ul>
        </div>

        {/* My Role */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">👤 My Role</h2>
          <div className="text-slate-600 space-y-3">
            <div>
              <p className="font-semibold">Data Preparation</p>
              <p>Cleaned and transformed transactional data using Power Query. Built a star schema linking sales, product, customer, store, and calendar dimensions.</p>
            </div>
            <div>
              <p className="font-semibold">Data Modelling & DAX Development</p>
              <p>Developed DAX measures including Revenue, Profit, AOV, CLV, Margin, Repeat Purchase Rate, and time-intelligence metrics (MoM, YoY growth).</p>
            </div>
            <div>
              <p className="font-semibold">Analysis & Segmentation</p>
              <p>Conducted segmentation analysis across age groups, channels, and geography. Analysed category concentration, channel mix evaluation, customer behaviour, and store size performance correlation.</p>
            </div>
            <div>
              <p className="font-semibold">Strategic Recommendations</p>
              <p>Translated data insights into actionable marketing recommendations focused on channel optimisation, revenue diversification, and customer lifecycle management.</p>
            </div>
          </div>
        </div>

        {/* Skills & Data Source */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">🛠️ Skills Demonstrated</h2>
            <ul className="text-slate-600 space-y-1">
              <li>• Power BI Desktop</li>
              <li>• DAX (Data Analysis Expressions)</li>
              <li>• Data Modelling (Star Schema)</li>
              <li>• Power Query (ETL)</li>
              <li>• Interactive Dashboard Design</li>
              <li>• Time Intelligence Analysis</li>
              <li>• Customer Behaviour Analytics</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">🗂️ Data Source</h2>
            <p className="text-slate-600 mb-4">
              Synthetic dataset sourced from <a href="https://mavenanalytics.io/data-playground/global-electronics-retailer" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700 underline">Maven Analytics</a>. Includes transactional sales, product hierarchy, customer demographics, and store-level data (2017–2021).
            </p>
            <h3 className="text-xl font-bold text-slate-800 mb-2">⚠️ Notes & Limitations</h3>
            <ul className="text-slate-600 space-y-1">
              <li>• Dataset is simulated and does not reflect real commercial operations.</li>
              <li>• CLV is calculated within the available transaction window only.</li>
              <li>• External market factors and operational cost data were not included.</li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-block bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PowerBIElectronics;
