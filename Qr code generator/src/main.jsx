import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import QrCode from './Components/QrCode.jsx'
import './css/qr_code.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QrCode/>
  </StrictMode>,
)
