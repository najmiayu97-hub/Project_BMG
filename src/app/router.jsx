import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import Services from '../pages/Services.jsx'
import Event from '../pages/Event.jsx'
import Contact from '../pages/Contact.jsx'
import Compare from '../pages/Compare.jsx'
import NotFound from '../pages/NotFound.jsx'
import OurTeam from '../pages/OurTeam.jsx'
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx'

// BASE_URL is '/' locally and e.g. '/bmg/' on GitHub Pages; React Router
// expects a basename without a trailing slash.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'about-us/our-team', element: <OurTeam /> },
      { path: 'services', element: <Services /> },
      { path: 'event', element: <Event /> },
      { path: 'portfolio', element: <Navigate to="/event" replace /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'bandingkan', element: <Compare /> },
      { path: '*', element: <NotFound /> },
    ],
  },
], { basename })
