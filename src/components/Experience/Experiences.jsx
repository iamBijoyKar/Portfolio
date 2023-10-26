import React, { useState } from 'react'
import { Tab, Tabs, Typography, Chip } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { FaCircleDollarToSlot } from 'react-icons/fa6'
import { BiLogoTailwindCss, BiLogoRedux } from 'react-icons/bi'

export default function Experiences() {
  const [page, setPage] = useState(0)
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const handleChange = () => {
    if (page === 1) {
      setPage(0)
    } else {
      setPage((prev) => prev + 1)
    }
  }
  return (
    <div className="mt-8" style={{ color: colorTheme.primaryText }}>
      <Tabs
        value={page}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="ISP Candidate" style={{ color: colorTheme.primaryText }} />
        <Tab
          label="Web Development Intern"
          style={{ color: colorTheme.primaryText }}
        />
      </Tabs>
      <div className="mt-4">
        <TabPanel value={page} index={0}>
          <div className="flex flex-col items-center justify-center">
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
          </div>
        </TabPanel>
        <TabPanel value={page} index={1}>
          <div className="flex flex-col items-center justify-center">
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
          </div>
        </TabPanel>
      </div>
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      // id={`scrollable-auto-tabpanel-${index}`}
      // aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}
