import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Patients from './Pages/Patients.jsx'
import Services from './pages/Services.jsx'

const router = createBrowserRouter([
  {
    element : <Layout />,
    children : [
      { path : "/" , element : <Home />},
      { path : "/about" , element : <About />},
      { path : "/patients" , element : <Patients />},
      {path : "/services",element : <Services />}
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
