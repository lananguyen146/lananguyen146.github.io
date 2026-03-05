import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'

function AppNew() {
  return (
    <div className="relative">
      <Navigation />
      
      <div className="relative z-10 max-w-[920px] mx-auto px-10">
        
        {/* ═══════════ HERO ═══════════ */}
        <section id="hero" className="pt-36 pb-20">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0"></div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray">Portfolio</span>
            <div className="w-px h-3.5 bg-border"></div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray">Marketing & Data</span>
          </div>

          <h1 className="font-serif text-[clamp(56px,9vw,92px)] leading-[0.93] tracking-tight text-ink">
            Lana<br/><em className="italic text-terracotta">Nguyen</em>
          </h1>

          <p className="mt-7 text-[15px] font-light leading-[1.75] text-[#4A4540] max-w-[560px]">
            Curious about what the data reveals behind every marketing decision.<br/>
            <strong className="font-medium text-ink">Data-driven marketer</strong> with 4+ years across e-commerce, retail, and events —
            combining strategy with SQL and Power BI to turn customer data into insights that
            improve engagement, conversion, and revenue.
          </p>

          <div className="flex items-center gap-4 mt-5 flex-wrap">
            <div className="flex items-center gap-1.5 text-[13px] text-warm-gray">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Sydney, Australia
            </div>
            <div className="w-0.5 h-0.5 bg-border rounded-full"></div>
            <div className="text-[13px] text-warm-gray">Marketing</div>
            <div className="w-0.5 h-0.5 bg-border rounded-full"></div>
            <div className="text-[13px] text-warm-gray">Data Analytics</div>
            <div className="w-0.5 h-0.5 bg-border rounded-full"></div>
            <div className="text-[13px] text-warm-gray">Customer Insights</div>
          </div>

          <div className="flex gap-3 mt-9 flex-wrap">
            <a 
              href="https://www.linkedin.com/in/lana-nguyen-1406/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-wide rounded bg-ink text-cream border-[1.5px] border-ink shadow-[3px_3px_0_#C4622D] hover:shadow-[5px_5px_0_#C4622D] hover:-translate-y-0.5 transition-all no-underline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-wide rounded bg-transparent text-ink border-[1.5px] border-ink shadow-[3px_3px_0_#7A8C6E] hover:shadow-[5px_5px_0_#7A8C6E] hover:-translate-y-0.5 transition-all no-underline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
              View Projects
            </a>
          </div>
        </section>

        {/* ═══════════ TOOLKIT ═══════════ */}
        <section id="toolkit" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-gray whitespace-nowrap">My Toolkit</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Analytics & Data */}
            <div className="bg-card-bg border border-border rounded-lg p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#B8B3A8] group">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-terracotta scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
              <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-warm-gray mb-2.5">01 — Analytics</div>
              <div className="font-serif text-[17px] text-ink mb-3">Analytics & Data</div>
              <div className="flex flex-wrap gap-1.5">
                {['SQL', 'Power BI', 'GA4', 'Excel', 'Data Visualisation'].map(skill => (
                  <span key={skill} className="text-xs px-2.5 py-1 bg-ink/[0.06] rounded-full text-[#3A3530] transition-colors group-hover:bg-ink/10">{skill}</span>
                ))}
              </div>
            </div>

            {/* Marketing & CRM */}
            <div className="bg-card-bg border border-border rounded-lg p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#B8B3A8] group">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-sage scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
              <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-warm-gray mb-2.5">02 — Marketing</div>
              <div className="font-serif text-[17px] text-ink mb-3">Marketing & CRM</div>
              <div className="flex flex-wrap gap-1.5">
                {['Email Marketing', 'Automation', 'Segmentation', 'A/B Testing'].map(skill => (
                  <span key={skill} className="text-xs px-2.5 py-1 bg-ink/[0.06] rounded-full text-[#3A3530] transition-colors group-hover:bg-ink/10">{skill}</span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-card-bg border border-border rounded-lg p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#B8B3A8] group">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-brown scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
              <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-warm-gray mb-2.5">03 — Platforms</div>
              <div className="font-serif text-[17px] text-ink mb-3">Tools & Platforms</div>
              <div className="flex flex-wrap gap-1.5">
                {['HubSpot', 'Salesforce', 'Pardot', 'Shopify', 'Klaviyo'].map(skill => (
                  <span key={skill} className="text-xs px-2.5 py-1 bg-ink/[0.06] rounded-full text-[#3A3530] transition-colors group-hover:bg-ink/10">{skill}</span>
                ))}
              </div>
            </div>

            {/* Content & Creative */}
            <div className="bg-card-bg border border-border rounded-lg p-6 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#B8B3A8] group">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-slate scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></div>
              <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-warm-gray mb-2.5">04 — Content</div>
              <div className="font-serif text-[17px] text-ink mb-3">Content & Creative</div>
              <div className="flex flex-wrap gap-1.5">
                {['Content Strategy', 'SEO', 'Email Design', 'Graphic Design'].map(skill => (
                  <span key={skill} className="text-xs px-2.5 py-1 bg-ink/[0.06] rounded-full text-[#3A3530] transition-colors group-hover:bg-ink/10">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PROJECTS ═══════════ */}
        <section id="projects" className="py-24 border-t border-border-light">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-warm-gray whitespace-nowrap">Projects</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Power BI - Featured Project */}
          <div className="bg-card-bg border border-border rounded-xl overflow-hidden mb-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(26,23,20,0.09)]">
            <div className="grid md:grid-cols-[1fr_340px]">
              
              {/* Project Body */}
              <div className="p-10">
                <div className="relative">
                  <span className="font-serif text-[72px] leading-none text-ink/[0.06] absolute -top-2.5 right-0 pointer-events-none select-none">01</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-white bg-terracotta px-3 py-1.5 rounded-full mb-5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                    Power BI
                  </span>
                </div>

                <h2 className="font-serif text-[26px] leading-tight text-ink mb-1.5">Global Electronics Retail<br/>Performance Analysis</h2>
                <p className="text-[13px] text-warm-gray mb-6">Interactive Sales & Customer Intelligence Dashboard · 2017–2021</p>

                {/* Interactive Dashboard Embed */}
                <div className="bg-slate-100 p-4 rounded-lg mb-6">
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

                <div className="bg-terracotta/[0.08] border-l-[3px] border-terracotta rounded-r-md p-3.5 text-[13px] leading-relaxed text-[#3A3530] mb-7">
                  <strong className="text-terracotta font-medium">💡 Key Insight —</strong> Generated $55.76M in revenue with 47.6% repeat purchase rate.
                  Revenue grew steadily 2017–2020 with seasonal Q1/Q4 peaks, but a sharp Q4 2020 decline suggests external disruption.
                </div>

                <div className="flex gap-2.5 flex-wrap">
                  <a 
                    href="/projects/electronic-retailer.pbix" 
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium bg-ink text-cream border-[1.5px] border-ink rounded shadow-[3px_3px_0_#C4622D] hover:shadow-[5px_5px_0_#C4622D] hover:-translate-y-0.5 transition-all no-underline"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download .pbix
                  </a>
                  <Link 
                    to="/projects/power-bi-electronics"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium bg-transparent text-terracotta border-[1.5px] border-terracotta rounded hover:bg-terracotta hover:text-white transition-all no-underline"
                  >
                    View Full Project →
                  </Link>
                </div>
              </div>

              {/* Stats Sidebar */}
              <div className="bg-ink p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(196,98,45,0.25)_0%,transparent_60%),radial-gradient(circle_at_20%_80%,rgba(122,140,110,0.15)_0%,transparent_60%)]"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="font-serif text-[38px] leading-none text-white mb-1">
                      <em className="italic text-[#E88A5A]">$55.76</em>M
                    </div>
                    <div className="text-[11px] text-white/50 tracking-wider">Total Revenue Generated</div>
                  </div>
                  <div className="h-px bg-white/10 my-6"></div>
                  <div className="mb-8">
                    <div className="font-serif text-[38px] leading-none text-white mb-1">
                      <em className="italic text-[#E88A5A]">47.6</em>%
                    </div>
                    <div className="text-[11px] text-white/50 tracking-wider">Repeat Purchase Rate</div>
                  </div>
                  <div className="h-px bg-white/10 my-6"></div>
                  <div className="mb-8">
                    <div className="font-serif text-[38px] leading-none text-white mb-1">
                      <em className="italic text-[#E88A5A]">4</em>yrs
                    </div>
                    <div className="text-[11px] text-white/50 tracking-wider">Data Span · 2017–2021</div>
                  </div>
                  <div className="h-px bg-white/10 my-6"></div>
                  <div>
                    <div className="font-serif text-[26px] leading-tight text-white mb-1">Q1 / Q4</div>
                    <div className="text-[11px] text-white/50 tracking-wider">Seasonal Revenue Peaks</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* SQL Projects Label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate">SQL Projects</span>
            <div className="flex-1 h-px bg-border-light"></div>
          </div>

          {/* SQL Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            
            {/* SQL Project 1 */}
            <div className="bg-card-bg border border-border rounded-lg p-7 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,23,20,0.08)] flex flex-col group">
              <span className="font-serif text-[52px] leading-none text-ink/[0.06] absolute -top-1.5 right-0 pointer-events-none select-none">02</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-slate bg-slate/10 px-3 py-1.5 rounded-full mb-4 w-fit">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
                SQL
              </span>
              <h3 className="font-serif text-xl leading-tight text-ink mb-3">B2B Sales Pipeline Analysis</h3>
              <p className="text-[13px] leading-relaxed text-[#5A5550] flex-1 mb-5">
                Analysed a simulated CRM-style B2B hardware sales dataset to identify product performance, revenue concentration, and high-value industry segments.
              </p>
              <div className="bg-slate/[0.08] border-l-[3px] border-slate rounded-r-md p-3 text-xs leading-relaxed text-[#3A3530] mb-5">
                Nearly 48% of opportunities convert to Won, with revenue concentrated in GTX Pro and GTX Plus Pro lines, driven primarily by enterprise accounts.
              </div>
              <Link 
                to="/projects/sql-b2b-hardware"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate no-underline transition-all group-hover:gap-2.5 mt-auto"
              >
                View Full Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slate to-sage scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

            {/* SQL Project 2 */}
            <div className="bg-card-bg border border-border rounded-lg p-7 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,23,20,0.08)] flex flex-col group">
              <span className="font-serif text-[52px] leading-none text-ink/[0.06] absolute -top-1.5 right-0 pointer-events-none select-none">03</span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-slate bg-slate/10 px-3 py-1.5 rounded-full mb-4 w-fit">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                </svg>
                SQL · Advanced
              </span>
              <h3 className="font-serif text-xl leading-tight text-ink mb-3">Advanced SQL Query Techniques</h3>
              <p className="text-[13px] leading-relaxed text-[#5A5550] flex-1 mb-5">
                Explored a relational bookstore dataset to solve practical data analysis challenges using advanced SQL including window functions, CTEs, ranking, and pivot transformations.
              </p>
              <div className="bg-slate/[0.08] border-l-[3px] border-slate rounded-r-md p-3 text-xs leading-relaxed text-[#3A3530] mb-5">
                Focus: Customer segmentation, ranking analysis, demand analysis, cohort analysis, and delivery performance.
              </div>
              <Link 
                to="/projects/sql-bookstore"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate no-underline transition-all group-hover:gap-2.5 mt-auto"
              >
                View Full Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slate to-sage scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

          </div>
        </section>

        {/* ═══════════ CONTACT ═══════════ */}
        <section id="contact" className="py-24 border-t border-border-light">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0"></div>
                <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray">Get In Touch</span>
              </div>
              <h2 className="font-serif text-[clamp(36px,5vw,52px)] leading-tight tracking-tight text-ink mb-4">
                Let's work<br/><em className="italic text-terracotta">together</em>
              </h2>
              <p className="text-sm leading-relaxed text-[#5A5550] max-w-[380px]">
                Open to new opportunities in marketing, analytics, and data-driven strategy.
                Whether you have a role in mind or just want to connect — I'd love to hear from you.
              </p>
              <div className="flex items-center gap-2 text-[13px] text-warm-gray mt-7">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Sydney, New South Wales, Australia
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <a 
                href="mailto:lananguyen146@gmail.com"
                className="flex items-center gap-4 p-4 bg-card-bg border border-border rounded-lg no-underline text-ink transition-all hover:translate-x-1 hover:border-terracotta hover:shadow-[-3px_0_0_#C4622D]"
              >
                <div className="w-9 h-9 bg-ink rounded-md flex items-center justify-center flex-shrink-0 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] tracking-widest uppercase text-warm-gray mb-0.5">Email</div>
                  <div className="text-sm font-medium text-ink">lananguyen146@gmail.com</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-gray">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/in/lana-nguyen-1406/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card-bg border border-border rounded-lg no-underline text-ink transition-all hover:translate-x-1 hover:border-terracotta hover:shadow-[-3px_0_0_#C4622D]"
              >
                <div className="w-9 h-9 bg-ink rounded-md flex items-center justify-center flex-shrink-0 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] tracking-widest uppercase text-warm-gray mb-0.5">LinkedIn</div>
                  <div className="text-sm font-medium text-ink">lana-nguyen-1406</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-gray">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-border-light py-7 px-10 flex justify-between items-center max-w-[920px] mx-auto flex-wrap gap-2">
        <span className="text-xs text-warm-gray">
          Lana <em className="font-serif italic text-terracotta text-sm">Nguyen</em> · Marketing & Data Portfolio
        </span>
        <span className="text-[11px] text-warm-gray">Sydney, Australia · 2025</span>
      </footer>

    </div>
  );
}

export default AppNew;
