import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import handShake from '../../assets/handshake-v.mp4'
import { confettiActions } from '../../store'
import { useNavigate } from 'react-router-dom'

export default function HireMe() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const dispatch = useDispatch()
  const [handShakeVisible, setHandShakeVisible] = React.useState(false)
  const videoRef = React.useRef(null)
  const navigate = useNavigate()

  const handleClick = () => {
    setHandShakeVisible(true)
    dispatch(confettiActions.toggle())
    setTimeout(() => {
      setHandShakeVisible(false)
    }, 2500)
    setTimeout(() => {
      //   window.open('mailto:bijoykar54321@gmail.com')
      dispatch(confettiActions.toggle())
      navigate('/contact')
    }, 10000)
  }

  return (
    <div className=" flex flex-col justify-center items-center gap-5 ">
      <div
        onClick={handleClick}
        style={{
          color: colorTheme.primaryText,
          backgroundColor: colorTheme.primaryText + '1A',
        }}
        className="border border-[#dddddd] rounded-lg py-4  px-8 cursor-pointer"
      >
        <h1 className="text-xl">Hire Me</h1>
      </div>
      {handShakeVisible && (
        <div className="max-w-[400px] w-full">
          <video autoPlay ref={videoRef} src={handShake}></video>
        </div>
      )}
    </div>
  )
}