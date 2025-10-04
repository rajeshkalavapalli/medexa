import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import './style/navbar.css'
import { Navbar1 } from './components/Navbar1'
import { Footer } from './components/Footer'
import './style/Footer.css'
import { Navbar2 } from './components/Navbar2'
import './style/nav2.css'
import { Header } from './components/header'
import './style/header.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Navbar1/>
      <Navbar2/>
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
