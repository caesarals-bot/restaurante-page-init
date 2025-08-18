import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RestoBase from './RestoBase.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RestoBase/>
  </StrictMode>,
)
