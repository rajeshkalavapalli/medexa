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
import { Hospital } from './components/hospital'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'
import MyHome from './pages/MyHome.jsx'
import { Booklabtest } from './pages/BookLabtest.jsx'
import { BookNursingService } from './pages/BookNursingService.jsx'
import { DoctorConsult } from './pages/DoctorConsult.jsx'
import { HealthPackage } from './pages/HealthPackages.jsx'
import { ScrollToTop } from './pages/ScrollToTop.jsx'
import BookDoctorAppointment from "./pages/BookDoctorAppointment.jsx";




function App() {
  

  return (
    <BrowserRouter>
      <div>
        <ScrollToTop />
      <Navbar/>
      <Navbar1/>
      <Navbar2/>
   
      
    </div>
      <nav>
        {/* <Link to='/'>
        </Link> */}
        {/* <Link to='/BookLabtest'>Book lab test</Link> */}
      </nav>
      <Routes>
          <Route path='/' element={<MyHome/>}/>
          <Route path='/book-lab-test' element={<Booklabtest/>}/>
          <Route path="/book-nursing-service" element={<BookNursingService />} />
          <Route path="/doctor-consultation" element={<DoctorConsult />} />
          <Route path="/health-packages" element={<HealthPackage />} />
          <Route path="/book-doctor-appointment" element={<BookDoctorAppointment />} />

      </Routes>

      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
