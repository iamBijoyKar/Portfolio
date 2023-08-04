import React from 'react'
import { useSelector } from 'react-redux'

export default function Footer() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  // const theme = useSelector((state) => state.mode.darkMode)

  return (
    <div
      className="flex items-center gap-3 p-4"
      style={{ color: colorTheme.primaryText }}
    >
      <h1 className="text-4xl font-bold">Footer</h1>
    </div>
  )
}
