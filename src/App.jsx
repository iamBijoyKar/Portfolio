import { useState } from 'react'
import { Button } from '@mui/material'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid place-items-center">
      <Button variant="contained">Hello World</Button>
    </div>
  )
}

export default App
