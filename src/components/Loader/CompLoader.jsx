import React from 'react'
import { GridLoader } from 'react-spinners'
import { useSelector } from 'react-redux'

export default function CompLoader() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{ backgroundColor: colorTheme.primaryBg }}
    >
      <GridLoader color={colorTheme.primaryText} />
    </div>
  )
}
