import React from 'react'
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

// prop validation for children
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
// default prop for children
Layout.defaultProps = {
  children: <h1>Empty!</h1> | null,
}

export default function Layout({ children }) {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  console.log(colorTheme)
  return (
    <div style={{ backgroundColor: colorTheme.primaryBg }}>
      <Header />
      <main className="container px-3 mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
