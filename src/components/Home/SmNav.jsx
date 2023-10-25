import * as React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { AiFillHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { AiFillProject, AiOutlinePhone } from 'react-icons/ai'
import { BiCodeAlt, BiNavigation } from 'react-icons/bi'
import { BsFillExplicitFill } from 'react-icons/bs'

const actions = [
  { icon: <AiOutlinePhone />, id: 'contact', name: 'Contact' },
  { icon: <BsFillExplicitFill />, id: 'experience', name: 'Experience' },
  { icon: <AiFillProject />, id: 'projects', name: 'Projects' },
  { icon: <BiCodeAlt />, id: 'skills', name: 'Skills' },
  { icon: <SiAboutdotme />, id: 'about', name: 'About' },
  { icon: <AiFillHome />, id: 'intro', name: 'Home' },
]

export default function SmNav() {
  const [open, setOpen] = React.useState(false)

  const toogleOpen = () => {
    setOpen(!open)
  }

  const handleAction = (action) => {
    const element = document.getElementById(action)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        onClick={toogleOpen}
        open={open}
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={!open ? <BiNavigation className="text-2xl" /> : <SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            open={open}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleAction(action.id)}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
