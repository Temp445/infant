import HeroSection from '@/components/MachineryPage/HeroSection'
import MachineryDetails from '@/components/MachineryPage/MachineryDetails'
import Machine from '@/components/MachineryPage/Machine'
import ShopFloor from '@/components/MachineryPage/ShopFloor'
import Capability from '@/components/MachineryPage/Capability'
import ContactSection from '@/components/MachineryPage/ContactSection'
import { Metadata } from 'next'

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL || '';

export const metadata : Metadata = {
  title: "Machinery | Infant Engineers Pvt Ltd",
  description: "We use advanced machinery and precision equipment to manufacture high-quality automotive components. Our modern technology ensures accuracy, efficiency, and consistent product performance.",
  
  openGraph: {
    title: "Machinery | Infant Engineers Pvt Ltd",
    description: "We use advanced machinery and precision equipment to manufacture high-quality automotive components. Our modern technology ensures accuracy, efficiency, and consistent product performance.",
    url: `${domainUrl}/machinery`,
    siteName: "Infant Engineers Pvt Ltd",
    images: [
       {
        url: `${domainUrl}/og-images/Logo.png`,
        width: 1200,
        height: 630,
        alt: 'Infant Engineers Pvt Ltd',
      },
    ],
    type: 'website'
  },
}


const Machinery = () => {
  return (
    <div>
      <HeroSection/>
      <Capability/>
      <MachineryDetails/>
      <Machine/>
      <ShopFloor/>
      <ContactSection/>
    </div>
  )
}

export default Machinery