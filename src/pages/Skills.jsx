import React from 'react'
import Layout from '../Layouts/Layout'
import BackBtn from '../components/BackBtn'

export default function SkillsPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen mt-[4.5rem]">
        <BackBtn />
        <h1 className="text-4xl font-bold">Skills Page</h1>
      </div>
    </Layout>
  )
}
