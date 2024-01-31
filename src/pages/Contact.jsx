import React from 'react'
import Layout from '../Layouts/Layout'
import BackBtn from '../components/BackBtn'
import ContactForm from '../components/Contact/ContactForm'
import Warning from '../components/Contact/Warning'

export default function ContactPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen mt-[4.5rem] w-full">
        <Warning />
        <BackBtn />
        <div className="mb-8">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
