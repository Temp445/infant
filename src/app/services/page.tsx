
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Service from '@/components/HomePage/Service'

const Services = () => {
  
  return (
    <>
      <Navbar />
<section className="relative w-full bg-gray-900 text-white overflow-hidden">
  <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16 py-14 md:py-28 text-center relative z-10">
    <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-6">
      Powering Innovation with <span className="">Premium Services</span>
    </h1>
    <p className="md:text-xl text-orange-50 max-w-2xl mx-auto mb-8">
      From prototyping to reverse engineering, we deliver excellence at every stage of development.
    </p>
 
  </div>

</section>

<div className='mb-20'>
<Service/>
</div>


      <Footer />
    </>
  )
}

export default Services
