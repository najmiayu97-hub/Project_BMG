import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import Services from '../pages/Services.jsx'
import Portfolio from '../pages/Portfolio.jsx'
import Contact from '../pages/Contact.jsx'
import Compare from '../pages/Compare.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'services', element: <Services /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: 'bandingkan', element: <Compare /> },
    ],
  },
])
