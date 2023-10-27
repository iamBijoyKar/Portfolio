import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Dialog, Button, ButtonGroup } from '@mui/material'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

export default function ExpMedia({ media }) {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const darkMode = useSelector((state) => state.mode.darkMode)

  const [open, setOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState(media[0])
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handlePrev = () => {
    if (currentImgIndex === 0) return
    setCurrentImg(media[currentImgIndex - 1])
    setCurrentImgIndex((prev) => prev - 1)
  }
  const handleNext = () => {
    if (currentImgIndex === media.length - 1) return
    setCurrentImg(media[currentImgIndex + 1])
    setCurrentImgIndex((prev) => prev + 1)
  }

  return (
    <div className="my-4">
      <Typography variant="h6" className="font-bold text-center">
        Media
      </Typography>
      <div className="flex flex-row gap-3 justify-center items-center ">
        {media &&
          media.map(({ img }, idx) => {
            return (
              <div
                className="p-1 w-fit h-full rounded cursor-pointer"
                style={{ backgroundColor: darkMode ? '#dddddd' : '#00000055' }}
              >
                <img
                  onClick={() => {
                    setOpen(true)
                    setCurrentImgIndex(idx)
                    setCurrentImg(media[idx])
                  }}
                  src={img}
                  alt=""
                  className="w-[100px] "
                />
              </div>
            )
          })}
      </div>
      <Dialog
        onClose={() => setOpen(false)}
        maxWidth={'lg'}
        fullWidth
        open={open}
        className=" "
      >
        <div
          className="flex flex-col items-center justify-center  p-2 md:p-4"
          style={{ backgroundColor: colorTheme.secondaryBg }}
        >
          <img src={currentImg.img} alt="" className=" h-full mb-4" />
          <Typography
            variant="h6"
            className="font-bold text-cente"
            style={{ color: colorTheme.primaryText }}
          >
            {currentImg.title}
          </Typography>
          <Typography
            variant="body1"
            className="text-center"
            style={{ color: colorTheme.primaryText }}
          >
            {currentImg.description}
          </Typography>
          <div className="flex justify-center items-center my-3">
            <ButtonGroup variant="outlined">
              <Button onClick={handlePrev} disabled={currentImgIndex === 0}>
                <AiFillCaretLeft className="text-xl" />
                Prev
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentImgIndex === media.length - 1}
              >
                Next
                <AiFillCaretRight className="text-xl" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
