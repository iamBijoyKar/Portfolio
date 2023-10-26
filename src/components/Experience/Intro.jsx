import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

export default function Intro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div className="" style={{ color: colorTheme.primaryText }}>
      <Typography variant="h3" className="font-bold text-center">
        Full Stack Web Developer
      </Typography>
      <Typography variant="h5" className="text-center">
        React | Redux | Node | Express | MongoDB
      </Typography>
    </div>
  )
}
