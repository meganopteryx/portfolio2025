import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import './index.css'
import './styles/case-studies.css'
// Component token definitions (imported globally so variables are available to all component CSS)
import './styles/portfolio-components.css'
// import './styles/modal-components.css'
import App from './App.tsx'
import { ModalProvider } from './components/modal-context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)
