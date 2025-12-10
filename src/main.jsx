import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import Stairs from './components/common/stairs.jsx'
import Navcontext from './components/context/Navcontext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stairs>
    <Navcontext>
      <App />
    </Navcontext>
    </Stairs>
    </BrowserRouter>
  </StrictMode> ,
)
