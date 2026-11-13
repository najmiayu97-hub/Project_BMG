import { createBrowserRouter, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import Services from '../pages/Services.jsx'
import ServiceDetail from '../pages/ServiceDetail.jsx'
import Event from '../pages/Event.jsx'
import EventDetail from '../pages/EventDetail.jsx'
import Contact from '../pages/Contact.jsx'
import Compare from '../pages/Compare.jsx'
import NotFound from '../pages/NotFound.jsx'
import OurTeam from '../pages/OurTeam.jsx'
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx'
import TermsCondition from '../pages/TermsCondition.jsx'
import Help from '../pages/Help.jsx'
import FAQ from '../pages/FAQ.jsx'

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
      { path: 'services/:slug', element: <ServiceDetail /> },
      { path: 'event', element: <Event /> },
      { path: 'event/:slug', element: <EventDetail /> },
      { path: 'portfolio', element: <Navigate to="/event" replace /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <TermsCondition /> },
      { path: 'help', element: <Help /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'bandingkan', element: <Compare /> },
      { path: '*', element: <NotFound /> },
    ],
  },
], { basename })
