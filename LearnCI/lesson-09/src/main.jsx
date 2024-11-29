import { createRoot } from 'react-dom/client'
import './index.css'
import StoreProvider from './StoreProvider';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
)
