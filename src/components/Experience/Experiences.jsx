import React, { useState, lazy } from 'react'
import { Tab, Tabs, Typography, Chip } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { FaCircleDollarToSlot } from 'react-icons/fa6'
import { BiLogoTailwindCss, BiLogoRedux } from 'react-icons/bi'
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
} from 'react-icons/pi'
import ExpMedia from './ExpMedia'
import skygoalOfferLetter from '../../assets/skygoal-offer-letter.jpg'
import skygoalCompleteLetter from '../../assets/skygoal-complete-letter.jpg'
import ispOfferLetter from '../../assets/isp-offer-letter.jpg'
import ispCompleteLetter from '../../assets/isp-complete-letter.jpg'

export default function Experiences() {
  const [page, setPage] = useState(0)
  const expMediaData1 = [
    {
      img: skygoalOfferLetter,
      title: 'SkyGoal® Inc Offer Letter',
      description: 'Offer Letter for Web Development Intern',
    },
    {
      img: skygoalCompleteLetter,
      title: 'SkyGoal® Inc Complete Letter',
      description: 'Complete Letter for Web Development Intern',
    },
  ]
  const expMediaData2 = [
    {
      img: ispOfferLetter,
      title: 'ISP Offer Letter',
      description: 'Offer Letter for Internshala Student Partner',
    },
    {
      img: ispCompleteLetter,
      title: 'ISP Complete Letter',
      description: 'Complete Letter for Internshala Student Partner',
    },
  ]
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div className="mt-8" style={{ color: colorTheme.primaryText }}>
      <div className="my-4">
        <ExpContainer
          icon={<PiNumberCircleOneBold className="text-3xl" />}
          index={0}
        >
          <Typography variant="h4" className="font-bold text-center">
            Internshala Student Partner
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Dec 2022 - Feb 2023 · 3 mos
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Company :{' '}
            <Link to={''} className=" font-bold">
              {' '}
              Internshala{' '}
            </Link>
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Location : <span className=" font-bold"> Remote </span>
          </Typography>
          <Typography variant="h5" className="text-center mt-3">
            Skills{' '}
          </Typography>
          <div
            className="flex gap-3 justify-center flex-wrap my-2 max-w-[350px]"
            style={{ color: colorTheme.primaryText }}
          >
            <Chip
              label="Marketing"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <MdShoppingCart
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
            <Chip
              label="Sales"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <FaCircleDollarToSlot
                  className="text-lg "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
          </div>
          <ExpMedia media={expMediaData2} />
        </ExpContainer>

        <ExpContainer
          icon={<PiNumberCircleTwoBold className="text-3xl" />}
          index={1}
        >
          <Typography variant="h4" className="font-bold text-center">
            Web Development Intern
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Mar 2023 - Jun 2023 · 4 mos
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Company :{' '}
            <Link to={''} className=" font-bold">
              {' '}
              SkyGoal® Inc
            </Link>
          </Typography>
          <Typography variant="h6" className="text-center mt-2">
            Location : <span className=" font-bold"> Remote </span>
          </Typography>
          <Typography variant="h5" className="text-center mt-3">
            Skills{' '}
          </Typography>
          <div
            className="flex gap-3 justify-center flex-wrap my-2 max-w-[350px]"
            style={{ color: colorTheme.primaryText }}
          >
            <Chip
              label="React"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <FaReact
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
            <Chip
              label="Tailwindcss"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <BiLogoTailwindCss
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
            <Chip
              label="Redux"
              style={{ color: colorTheme.primaryText }}
              onClick={() => null}
              icon={
                <BiLogoRedux
                  className="text-xl "
                  style={{ color: colorTheme.primaryText }}
                />
              }
              className=""
              variant=""
            />
          </div>
          <ExpMedia media={expMediaData1} />
        </ExpContainer>
        <ExpContainer
          icon={<PiNumberCircleThreeBold className="text-3xl" />}
          index={2}
        >
          <Typography variant="h6" className="font-bold text-center">
            Current Status : Self Learning
          </Typography>
        </ExpContainer>
      </div>
    </div>
  )
}

function ExpContainer({ children, index, icon }) {
  const colorTheme = useSelector((state) => state.mode.colorTheme)

  return (
    <div className="flex flex-col items-center justify-center border-l-2 relative md:pl-6 ">
      <span
        style={{ backgroundColor: colorTheme.primaryBg }}
        className="absolute top-0 left-[-1rem] w-8 h-8 rounded-full flex items-center justify-center  "
      >
        {icon}
      </span>
      {children}
    </div>
  )
}
