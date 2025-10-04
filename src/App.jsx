import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import './style/navbar.css'
import { Navbar1 } from './components/Navbar1'
import { Footer } from './components/Footer'
import './style/Footer.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Navbar1/>

      <Footer/>
    </div>
  )
}

export default App
