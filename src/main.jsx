import './styles/global.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import showConsoleMessage from './utils/showConsoleMessage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

showConsoleMessage('success', 'Aplicação em execulção')