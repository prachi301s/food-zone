import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   {/* <Login/> */}
   <Home/>
    </>
  )
}

export default App
