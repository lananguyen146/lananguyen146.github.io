import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="relative">
      <Navigation />
      
      <div className="relative z-10 max-w-[920px] mx-auto px-10">
        
        {/* HERO */}
        <section id="hero" className="pt-36 pb-20">
          <div className="flex items-center gap-2.5 mb-5 anim-fade-up" style={{animationDelay: '0.1s'}}>
            <div className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0"></div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray">Portfolio</span>
            <div className="w-px h-3.5 bg-border"></div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-warm-gray">Marketing & Data</span>
          </div>

          <h1 className="font-serif text-[clamp(56px,9vw,92px)] leading-[0.93] tracking-tight text-ink anim-fade-up" style={{animationDelay: '0.2s'}}>
            Lana<br/><em className="italic text-terracotta">Nguyen</em>
          </h1>

          <p className="mt-7 text-[15px] font-light leading-[1.75] text-[#4A4540] max-w-[560px] anim-fade-up" style={{animationDelay: '0.35s'}}>
            Curious about what the data reveals behind every marketing decision.<br/>
            <strong className="font-medium text-ink">Data-driven marketer</strong> with 4+ years across e-commerce, retail, and events —
            combining strategy with SQL and Power BI to turn customer data into insights that
            improve engagement, conversion, and revenue.
          </p>

          <div className="flex items-center gap-4 mt-5 flex-wrap anim-fade-up" style={{animationDelay: '0.45s'}}>
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

          <div className="flex gap-3 mt-9 flex-wrap anim-fade-up" style={{animationDelay: '0.55s'}}>
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

export default App
