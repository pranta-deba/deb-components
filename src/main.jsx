import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/Routes.jsx'
import AllProviders from './providers/AllProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllProviders>
      <RouterProvider router={router} />
    </AllProviders>
  </StrictMode>
)
