import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Auth0Provider
    domain="dev-qnu5cvcrzdpgms0c.us.auth0.com"
    clientId="ZMQiFiIPpYGm9CN8FzEM0eb4vMbjaZxa"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
    
  </StrictMode>,
)
