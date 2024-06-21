import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import jsonIcon from '../../assets/jsondb.jpg'
import xCodeImg from '../../assets/x-code.png'
import floatingHippoImg from '../../assets/Floating-hippo2.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.2,
          delay: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 "
      id="projects"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          <ProjectCard
            title="Floating Hippo"
            description="Floating Hippo is a easy to use python 2D simulation library."
            image={floatingHippoImg}
            link="https://github.com/iamBijoyKar/floating_hippo"
            delay={1}
          />
          <ProjectCard
            title="JsonDb"
            description="JsonDb is a open source project of a database cli app, made with json files. It is written in C++."
            image={jsonIcon}
            link="https://github.com/iamBijoyKar/jsondb"
            delay={1.3}
          />
          <ProjectCard
            title="X Code"
            description="X Code is a Visual Code Editor made with Tauri and React. It is inspired by Visual Studio Code."
            image={xCodeImg}
            link="https://github.com/iamBijoyKar/x-code"
            delay={1.6}
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
            onClick={() => navigate('projects')}
            variant="outlined"
            color="primary"
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  )
}
