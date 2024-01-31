import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import React, { lazy } from 'react'
// import HomePage from '../pages/index.jsx'
// import AboutPage from '../pages/About.jsx'
// import SkillsPage from '../pages/Skills.jsx'
// import ProjectsPage from '../pages/Projects.jsx'
// import ContactPage from '../pages/Contact.jsx'
// import Resume from '../pages/Resume.jsx'
// import ConfettiRoom from '../pages/ConfettiRoom.jsx'
// import Page404 from '../pages/404.jsx'
// import Experience from '../pages/Experience.jsx'
import PageLoader from '../components/Loader/PageLoader.jsx'
const HomePage = lazy(() => import('../pages/index.jsx'))
const AboutPage = lazy(() => import('../pages/About.jsx'))
const SkillsPage = lazy(() => import('../pages/Skills.jsx'))
const ProjectsPage = lazy(() => import('../pages/Projects.jsx'))
const ContactPage = lazy(() => import('../pages/Contact.jsx'))
const Resume = lazy(() => import('../pages/Resume.jsx'))
const ConfettiRoom = lazy(() => import('../pages/ConfettiRoom.jsx'))
const Page404 = lazy(() => import('../pages/404.jsx'))
const Experience = lazy(() => import('../pages/Experience.jsx'))

const handleFallback = (Component) => {
  return (
    <Suspense fallback={<PageLoader />}>
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
    path: '/resume',
    element: handleFallback(Resume),
  },
  {
    path: '/confetti',
    element: handleFallback(ConfettiRoom),
  },
  {
    path: '*',
    element: handleFallback(Page404),
  },
  {
    path: '/experience',
    element: handleFallback(Experience),
  },
])

export default function Routes() {
  return (
    <AnimatePresence>
      <RouterProvider router={routes}></RouterProvider>
    </AnimatePresence>
  )
}
