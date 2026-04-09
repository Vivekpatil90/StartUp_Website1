import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Components/HeroSection/LandingPage'
import ServicesSection from './Components/Section/ServicesSection'
import TechnologySection from './Components/TechnologySection/TechnologySection'
import WhyChoose from './Components/ChooseUsSection/WhyChoose'
import WhyTechNova from './Components/WhyTechNova/WhyTechNova'
import Testimonial from './Components/Testimonal/Testimonial'
import HiringModels from './Components/HiringModel/HiringModels'
import PricingSection from './Components/PricingPart/PricingSection'
import Footer from './Components/Footer/Footer'
import AboutSection from './pages/AboutSection'
import SolutionPage from './pages/Solution'
import ContactSection from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

function App() {
  return (
    <>
      <Routes>
        {/* Define the Home Page Route */}
        <Route path="/" element={
          <>
            <div className="LandingPage">
              <LandingPage />
            </div>
            <div>
              <ServicesSection />
              <div className='PricingSection'>
                <PricingSection />
              </div>
              <TechnologySection />
            </div>
            <div className='WhyChoose'>
              <WhyChoose />
              <WhyTechNova />
            </div>
            <div className='Testinomial-Footer'>
              <Testimonial />
              <HiringModels />
            </div>
          </>
        } />

        {/* Define the About Page Route */}
        <Route path='/aboutpage' element={<AboutSection />} />
        <Route path='/SolutionPage' element={<SolutionPage />} />
        <Route path='/ContactPage' element={<ContactSection />} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
      </Routes>

      {/* Footer stays outside if you want it visible on ALL pages */}
      <Footer />
    </>
  )
}

export default App