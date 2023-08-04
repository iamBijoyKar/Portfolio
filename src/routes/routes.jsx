import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { HashLoader } from 'react-spinners'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import HomePage from '../pages/index.jsx'
import AboutPage from '../pages/About.jsx'
import SkillsPage from '../pages/Skills.jsx'
import ProjectsPage from '../pages/Projects.jsx'
import ContactPage from '../pages/Contact.jsx'

const handleFallback = (Component) => {
  return (
    <Suspense fallback={<HashLoader />}>
      <Component />
    </Suspense>
  )
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: handleFallback(HomePage),
    children: [],
  },
  {
    path: '/about',
    element: handleFallback(AboutPage),
  },
  {
    path: '/skills',
    element: handleFallback(SkillsPage),
  },
  {
    path: '/projects',
    element: handleFallback(ProjectsPage),
  },
  {
    path: '/contact',
    element: handleFallback(ContactPage),
  },
  {
    path: '*',
    element: <h1>Error</h1>,
  },
])

export default function Routes() {
  return (
    <AnimatePresence>
      <RouterProvider router={routes}></RouterProvider>
    </AnimatePresence>
  )
}
