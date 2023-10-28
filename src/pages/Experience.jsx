import React from 'react'
import Layout from '../Layouts/Layout'
import BackBtn from '../components/BackBtn'
import Intro from '../components/Experience/Intro'
import Experiences from '../components/Experience/Experiences'

export default function Experience() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen mt-[4.5rem]">
        <BackBtn />
        <Intro />
        <Experiences />
      </div>
    </Layout>
  )
}
