import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './layout/Navbar'
import HomePage from './CustomComponents/HomePage'

function App() {
  return (
    <>
      {/* Navbar visible on all routes */}
      <Navbar />

      {/* Your page routes */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  )
}

export default App
