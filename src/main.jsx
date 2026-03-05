import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppNew from './AppNew.jsx'
import SQLB2BHardware from './pages/SQLB2BHardware.jsx'
import SQLBookstore from './pages/SQLBookstore.jsx'
import PowerBIElectronics from './pages/PowerBIElectronics.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/new" element={<AppNew />} />
        <Route path="/projects/sql-b2b-hardware" element={<SQLB2BHardware />} />
        <Route path="/projects/sql-bookstore" element={<SQLBookstore />} />
        <Route path="/projects/power-bi-electronics" element={<PowerBIElectronics />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
