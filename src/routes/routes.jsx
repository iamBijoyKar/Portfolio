import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { HashLoader } from 'react-spinners'
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
])

export default function Routes() {
  return <RouterProvider router={routes}></RouterProvider>
}
