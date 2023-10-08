import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import createRoutes from './Routes/Routes'
import AuthProvider from './Components/AuthProvider/AuthProvider'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={createRoutes}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
