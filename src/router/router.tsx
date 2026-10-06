import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/HomePage'
import Portfolio from '../pages/PortfolioPage'
import About from '../pages/AboutPage'
import Service from '../pages/ServicePage'
import Contact from '../pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Service />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

export default router
