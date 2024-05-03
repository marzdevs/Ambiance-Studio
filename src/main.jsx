import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Library.scss'
import { ReactLenis } from '@studio-freight/react-lenis'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactLenis root>
      <React.StrictMode>
        <BrowserRouter>
        <Header />
          <App />
        </BrowserRouter>
      </React.StrictMode>
  </ReactLenis>
)
