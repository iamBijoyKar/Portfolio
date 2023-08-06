import React, { useEffect } from 'react'
import {
  useAnimate,
  AnimatePresence,
  useMotionValue,
  motion,
} from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { contactFormActions } from '../../store'
import { confettiActions } from '../../store'
import Card from '@mui/material/Card'
import { CardHeader } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { ButtonGroup } from '@mui/material'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Hired from './Hired'
import SayHi from './SayHi'

export default function ContactForm() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const name = useSelector((state) => state.contactForm.name)
  const email = useSelector((state) => state.contactForm.email)
  const message = useSelector((state) => state.contactForm.message)
  const isHireMeSubmitted = useSelector(
    (state) => state.contactForm.isHireMeSubmitted,
  )
  const isSayHiSubmitted = useSelector(
    (state) => state.contactForm.isSayHiSubmitted,
  )
  const dispatch = useDispatch()

  const [animateOutRef, animateOut] = useAnimate()
  const [animateInRef, animateIn] = useAnimate()

  const y = useMotionValue(-300)

  useEffect(() => {
    if (isHireMeSubmitted || isSayHiSubmitted) {
      animateOut(
        animateOutRef.current,
        { y: 300, opacity: 0 },
        { duration: 0.5, delay: 0.5 },
      )
      setTimeout(() => {
        animateOutRef.current.style.display = 'none'
      }, 1300)
      animateIn(
        animateInRef.current,
        { y: 0, opacity: 1, display: 'block' },
        { duration: 0.5, delay: 1.5 },
      )
    }
  }, [isHireMeSubmitted, isSayHiSubmitted, animateOut])

  const hireMeHandler = () => {
    dispatch(contactFormActions.updateIsHireMeSubmitted(true))
    dispatch(confettiActions.toggle())

    setTimeout(() => {
      dispatch(confettiActions.toggle())
    }, 20000)
  }

  const sayHiHandler = () => {
    dispatch(contactFormActions.updateIsSayHiSubmitted(true))
  }

  return (
    <>
      <AnimatePresence>
        <motion.div style={{ y }} ref={animateInRef} className="hidden mt-4">
          {isHireMeSubmitted && <Hired />}
          {isSayHiSubmitted && <SayHi />}
        </motion.div>
        <div
          ref={animateOutRef}
          style={{ color: colorTheme.primaryText }}
          className={`max-w-[500px] w-full mt-4`}
        >
          {/* <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1> */}
          <div className="shadow-xl bg-[url('/images/form-bg.jpg')] ">
            <Card
              className="flex flex-col items-center "
              sx={{
                minWidth: 355,
                // backgroundColor: '#ffffffa5',
                // border: '1px solid #ffffff55',
              }}
            >
              <CardHeader
                title={
                  <Typography
                    // color={colorTheme.primaryText}
                    variant="h3"
                    component="div"
                  >
                    Get in Touch
                  </Typography>
                }
              />

              <CardContent className="w-full">
                <TextField
                  id="fullWidth"
                  label="Name"
                  variant="outlined"
                  type="text"
                  inputMode="text"
                  value={name}
                  onChange={(e) =>
                    dispatch(contactFormActions.updateName(e.target.value))
                  }
                  fullWidth
                />
                <TextField
                  id="fullWidth"
                  label="Email"
                  inputMode="email"
                  type="email"
                  variant="outlined"
                  sx={{ marginTop: 2 }}
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    dispatch(contactFormActions.updateEmail(e.target.value))
                  }}
                />
                <TextField
                  id="fullWidth"
                  label="Message"
                  variant="outlined"
                  sx={{ marginTop: 2 }}
                  fullWidth
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    dispatch(contactFormActions.updateMessage(e.target.value))
                  }}
                />
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                <ButtonGroup>
                  <Button
                    onClick={sayHiHandler}
                    sx={{ textTransform: 'capitalize' }}
                    variant="contained"
                    size=""
                  >
                    Say Hi
                  </Button>
                  <Button
                    onClick={hireMeHandler}
                    sx={{ textTransform: 'capitalize' }}
                    variant="contained"
                    size=""
                  >
                    Hire Me! 🎉
                  </Button>
                </ButtonGroup>
              </CardActions>
            </Card>
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}
