# Lana Nguyen - Marketing & Data Portfolio

A portfolio website showcasing marketing analytics, SQL, and Power BI projects.

🔗 **Live site:** [lananguyen146.github.io](https://lananguyen146.github.io)

## Tech Stack

- **React 19** + **Vite 7** - UI and build tool
- **Tailwind CSS v3** - Styling
- **React Router** - SPA routing
- **GitHub Pages** - Hosting

## Projects

### 1. RFM Customer Segmentation & CRM Strategy
- **Tools:** SQL · Power BI
- **Dataset:** UCI Online Retail II (2009-2011), 1M+ transactions
- **Summary:** Segmented 5,800+ customers using RFM modelling. Cleaned data in SQL, scored with NTILE(5), and built a Power BI dashboard with actionable CRM strategies per segment.
- **Key finding:** Champions (21% of customers) generate 68% of total revenue ($11.78M of $17.37M).

### 2. Global Electronics Retail Performance Analysis
- **Tools:** Power BI · DAX
- **Dataset:** Transactional sales, product hierarchy, customer demographics (2017-2021)
- **Summary:** Interactive dashboard analysing revenue drivers, customer behaviour, and channel performance for a global electronics retailer.
- **Key finding:** $55.76M revenue with 47.6% repeat purchase rate.

### 3. B2B Sales Pipeline Analysis
- **Tools:** SQL Server
- **Dataset:** 4 relational tables, ~8,800 opportunities
- **Summary:** Analysed CRM-style B2B hardware sales data to identify product performance, revenue concentration, and high-value industry segments.

### 4. Advanced SQL Query Techniques
- **Tools:** SQL Server
- **Dataset:** 15 relational tables, ~22,000 records
- **Summary:** Solved data analysis challenges using window functions, CTEs, ranking, pivot transformations, and cohort analysis on a bookstore dataset.

## Project Structure

```
├── src/
│   ├── App.jsx                          # Homepage
│   ├── main.jsx                         # Routes
│   ├── pages/
│   │   ├── RFMSegmentation.jsx          # RFM project detail
│   │   ├── PowerBIElectronics.jsx       # Electronics project detail
│   │   ├── SQLB2BHardware.jsx           # B2B SQL project detail
│   │   └── SQLBookstore.jsx             # Bookstore SQL project detail
│   └── index.css                        # Global styles
├── public/
│   ├── projects/                        # Downloadable .pbix and .sql files
│   └── 404.html                         # SPA routing fix for GitHub Pages
└── index.html
```

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Build for production
npm run deploy     # Build and deploy to GitHub Pages
```

## Contact

**Lana Nguyen**
- 📍 Sydney, Australia
- 📧 lananguyen146@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/lana-nguyen-1406)
