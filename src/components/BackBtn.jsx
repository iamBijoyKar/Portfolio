import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export default function BackBtn() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-start items-center w-full mt-4" id="back-btn">
      <Button
        // style={{ color: colorTheme.primaryText }}
        variant="outlined"
        color="primary"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft className="text-xl mr-2" />
        Back
      </Button>
    </div>
  )
}
