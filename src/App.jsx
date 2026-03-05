import './App.css'
import Dashboard from './components/Dashboard'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Lana Nguyen</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600">About</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
          <p className="text-lg text-slate-500 italic mb-4">
            Curious about what the data reveals behind every marketing decision
          </p>
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Marketing · Data · Customer Insights
          </h2>
          <p className="text-xl text-slate-600 mb-6">
            📍 Sydney, Australia
          </p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Data-driven marketer with 4+ years of experience across e-commerce, retail, and events. I combine marketing strategy with analytics, using SQL and Power BI to turn customer data into insights that improve engagement, conversion, and revenue.
          </p>

          {/* Skills Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">My Toolkit</h3>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              {/* Analytics & Data */}
              <div className="border border-slate-200 rounded-lg p-6 text-center">
                <div className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-3">01 — Analytics</div>
                <div className="text-lg font-semibold text-slate-800 mb-4">Analytics & Data</div>
                <p className="text-sm text-slate-600">
                  SQL · Power BI · GA4 · Excel · Data Visualisation
                </p>
              </div>

              {/* Marketing & CRM */}
              <div className="border border-slate-200 rounded-lg p-6 text-center">
                <div className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-3">02 — Marketing</div>
                <div className="text-lg font-semibold text-slate-800 mb-4">Marketing & CRM</div>
                <p className="text-sm text-slate-600">
                  Email Marketing · Automation · Segmentation · A/B Testing
                </p>
              </div>

              {/* Platforms */}
              <div className="border border-slate-200 rounded-lg p-6 text-center">
                <div className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-3">03 — Platforms</div>
                <div className="text-lg font-semibold text-slate-800 mb-4">Tools & Platforms</div>
                <p className="text-sm text-slate-600">
                  HubSpot · Salesforce · Pardot · Shopify · Klaviyo
                </p>
              </div>

              {/* Content & Creative */}
              <div className="border border-slate-200 rounded-lg p-6 text-center">
                <div className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-3">04 — Content</div>
                <div className="text-lg font-semibold text-slate-800 mb-4">Content & Creative</div>
                <p className="text-sm text-slate-600">
                  Content Strategy · SEO · Email Design · Graphic Design
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <a 
              href="https://www.linkedin.com/in/lana-nguyen-1406" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 min-w-[150px] text-center"
            >
              LinkedIn
            </a>
            <a 
              href="#projects" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 min-w-[150px] text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Projects</h2>
          
          {/* Electronic Retailer Project */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">Global Electronics Retail Performance Analysis</h3>
            <p className="text-slate-600 mb-6 text-center">Interactive Sales & Customer Intelligence Dashboard (2017–2021)</p>
            
            {/* Power BI Dashboard */}
            <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-lg mb-6 relative z-10">
              <div className="relative w-full mb-4" style={{ paddingBottom: '62.25%' }}>
                <iframe 
                  title="Electronic Retailer - Lana Nguyen" 
                  src="https://app.powerbi.com/view?r=eyJrIjoiZDJhZmUzZTItNzdhZi00YmNlLWJkMjAtMzQ5ZDkxZGQ0NGMwIiwidCI6ImI1NzhjYmRlLTk2YTMtNDUyOS05NDdlLTU1NTVjZWVhMDI4NCJ9&pageName=75e8ce99133442e7502e" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  className="absolute top-0 left-0 w-full h-full rounded"
                ></iframe>
              </div>
              <div className="text-center mb-4">
                <a 
                  href="/projects/electronic-retailer.pbix" 
                  download
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Power BI File (.pbix)
                </a>
              </div>

              {/* Overview / Preview Card */}
              <div className="bg-white p-6 rounded-lg flex flex-col">
                <h4 className="text-xl font-bold text-slate-800 mb-3">Overview</h4>
                
                <div className="mb-4">
                  <p className="text-slate-600 mb-4">
                    Analysed transactional sales data from a global electronics retailer to identify revenue drivers, customer behaviour patterns, and channel performance trends using Power BI.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-700 mb-2">🛠️ Skills Demonstrated</p>
                  <p className="text-slate-600">
                    Power BI • DAX • Data Modelling • Star Schema • Interactive Dashboards
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-700 mb-2">📊 Dataset</p>
                  <p className="text-slate-600">
                    Transactional sales, product hierarchy, customer demographics, store-level data (2017–2021)
                  </p>
                </div>

                <div className="mb-4 flex-grow">
                  <p className="font-semibold text-slate-700 mb-2">💡 Key Insight</p>
                  <p className="text-slate-600">
                    Generated $55.76M in revenue with 47.6% repeat purchase rate. Revenue grew steadily 2017–2020 with seasonal Q1/Q4 peaks, but sharp Q4 2020 decline suggests external disruption.
                  </p>
                </div>

                <Link 
                  to="/projects/power-bi-electronics"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full text-center"
                >
                  View Full Project Details →
                </Link>
              </div>
            </div>
          </div>

          {/* SQL Projects */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">SQL Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SQL Project 1: B2B Hardware */}
              <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-lg flex flex-col relative z-10">
                <h4 className="text-2xl font-bold text-slate-800 mb-3">B2B Sales Pipeline Analysis</h4>
                
                <div className="mb-4">
                  <p className="text-slate-600 mb-4">
                    Analysed a simulated CRM-style B2B hardware sales dataset to identify product performance, revenue concentration, and high-value industry segments.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-700 mb-2">🛠️ Skills Demonstrated</p>
                  <p className="text-slate-600">
                    SQL Server • Data Modelling • Funnel Analysis • Customer Segmentation
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-700 mb-2">📊 Dataset</p>
                  <p className="text-slate-600">
                    4 relational tables • ~8,800 opportunities analysed
                  </p>
                </div>

                <div className="mb-4 flex-grow">
                  <p className="font-semibold text-slate-700 mb-2">💡 Key Insight</p>
                  <p className="text-slate-600">
                    Nearly 48% of opportunities convert to Won, with revenue concentrated in GTX Pro and GTX Plus Pro product lines and driven primarily by enterprise accounts.
                  </p>
                </div>

                <Link 
                  to="/projects/sql-b2b-hardware"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full text-center"
                >
                  View Full Project →
                </Link>
              </div>

              {/* SQL Project 2: Bookstore */}
              <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-lg flex flex-col relative z-10">
                <h4 className="text-2xl font-bold text-slate-800 mb-3">Advanced SQL Query Techniques</h4>
                
                <div className="mb-4">
                  <p className="text-slate-600 mb-4">
                    Explored a relational bookstore dataset to solve practical data analysis challenges using advanced SQL techniques including window functions, CTEs, ranking, and pivot transformations.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-700 mb-2">🛠️ Skills Demonstrated</p>
                  <p className="text-slate-600">
                    SQL Server • Window Functions • CTE • Views • Pivot Tables • Data Aggregation
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-slate-700 mb-2">📊 Dataset</p>
                  <p className="text-slate-600">
                    15 relational tables • ~22,000 records in largest table
                  </p>
                </div>

                <div className="mb-4 flex-grow">
                  <p className="font-semibold text-slate-700 mb-2">🎯 Key Focus</p>
                  <p className="text-slate-600">
                    Customer segmentation, ranking analysis, demand analysis, cohort analysis, and delivery performance.
                  </p>
                </div>

                <Link 
                  to="/projects/sql-bookstore"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full text-center"
                >
                  View Full Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Get In Touch</h3>
          <p className="text-slate-600 mb-6">📍 Sydney, New South Wales, Australia</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="mailto:lananguyen146@gmail.com"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send me an email
            </a>
            <span className="text-slate-400">|</span>
            <a 
              href="https://www.linkedin.com/in/lana-nguyen-1406" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Lana Nguyen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
