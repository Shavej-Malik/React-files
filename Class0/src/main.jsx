// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(App())
root.render(<App/>)//we can call like this in jsx
