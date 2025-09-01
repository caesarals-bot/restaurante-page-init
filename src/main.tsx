import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RestoBaseApp from './RestoBaseApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RestoBaseApp/>
  </StrictMode>,
)
