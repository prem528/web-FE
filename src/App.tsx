import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './layout/Navbar'
import HomePage from './CustomComponents/HomePage'
import WhyUs from './whyus/whyus'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/whyus' element={<WhyUs/>}/>
       
      </Routes>
    </>
  )
}

export default App
