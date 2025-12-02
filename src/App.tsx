import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './layout/Navbar'
import HomePage from './CustomComponents/HomePage'
import WhyUs from './whyus/WhyUs'
import Review from './reviews/Review'
import ScrollToTop from './layout/ScrollToTop'
import { Toaster } from "sonner"    

function App() {
  return (
    <>
      <Toaster 
        richColors 
        position="top-center" 
        closeButton 
        expand
      />

      <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/whyus" element={<WhyUs/>}/>
        <Route path="/review" element={<Review/>} />
      </Routes>
    </>
  )
}

export default App
