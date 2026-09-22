import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //This is used to attached CSS file
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App/>)
