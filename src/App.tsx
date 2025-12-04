import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './layout/Navbar'
import HomePage from './CustomComponents/HomePage'
import WhyUs from './whyus/WhyUs'
import Review from './reviews/Review'
import ScrollToTop from './layout/ScrollToTop'
import { Toaster } from "sonner"    
import TermsAndConditionsPage from './policy/Terms&Conditions'
import CookiePolicyPage from './policy/Cookie-Policy'
import RefundPolicyPage from './policy/Refund-Policy'
import Footer from './layout/Footer'
import InstallationProcessPage from './policy/InstallationGuidePage'
import PrivacyPolicyPage from './policy/Privacy-policy'
import Blogs from './blog/Blogs'
import BlogArticlePage from './blog/pages/BlogArticlePage'
import BlogSearchPage from './blog/pages/BlogSearchPage'

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
        <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}/>
        <Route path='/terms&conditions' element={<TermsAndConditionsPage/>} />
        <Route path='/cookie-policy' element={<CookiePolicyPage/>} /> 
        <Route path='/refund-policy' element={<RefundPolicyPage/>} /> 
        <Route path='/installation-guide' element={<InstallationProcessPage/>} />
        <Route path='/blog' element={<Blogs/>} />

        <Route path="/blog/:id" element={<BlogArticlePage />} />
        <Route path="/blogs/:id" element={<BlogSearchPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
