import HeroSection from '@/components/MachineryPage/HeroSection'
import MachineryDetails from '@/components/MachineryPage/MachineryDetails'
import Machine from '@/components/MachineryPage/Machine'
import ShopFloor from '@/components/MachineryPage/ShopFloor'
import Navbar from '@/components/Navbar'
import Capability from '@/components/MachineryPage/Capability'
import ContactSection from '@/components/MachineryPage/ContactSection'
import Footer from '@/components/Footer'


const Machinery = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Capability/>
      <MachineryDetails/>
      <Machine/>
      <ShopFloor/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Machinery