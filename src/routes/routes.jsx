import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { HashLoader } from 'react-spinners'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Home from '../pages/index.jsx'

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
    element: handleFallback(Home),
    children: [],
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
