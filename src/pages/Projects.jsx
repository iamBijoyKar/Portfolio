import React from 'react'
import Layout from '../Layouts/Layout'
import BackBtn from '../components/BackBtn'

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-srart min-h-screen mt-[4.5rem]">
        <h1 className="text-4xl font-bold">Projects Page</h1>
        <BackBtn />
      </div>
    </Layout>
  )
}
