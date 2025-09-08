'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import Image1 from '@/assets/Machine/machine1.png';
import Image2 from '@/assets/Machine/machine2.png';
import Image3 from '@/assets/Machine/machine3.png';
import Image4 from '@/assets/Machine/machine4.png';
import Link from 'next/link';

const Machinery = () => {
  const Details = [
    { img: Image1 , title: 'CNC Machine'},
    { img: Image2 , title: 'Cylindrical Grinding'},
    { img: Image3 , title: 'Turn Mill'},
    { img: Image4 , title: 'VMC Machine'},
  ];

  return (
    <section className="py-16 px-6 lg:px-16 container mx-auto relative">
      <h2 className="text-3xl font-extrabold mb-12">Our <span className='text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-500'>Machinery</span> </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {Details.map((Detail, idx) => (
          <motion.div key={idx} className="bg-white rounded-lg border border-orange-200 shadow-lg p-6 text-center" whileHover={{ y: -5 }}>
            <Image src={Detail.img} alt={Detail.title} className="mb-4 mx-auto rounded" />
            <h3 className="text-xl font-bold mb-2">{Detail.title}</h3>
          </motion.div>
        ))}
      </div>
 <div className="absolute z-10 inset-x-0 bottom-4 flex justify-center md:top-20 md:right-2 md:bottom-auto lg:right-12 md:justify-end px-6">
  <Link
    href="/machinery"
    className="px-5 py-2 border text-black font-medium rounded shadow-md hover:bg-orange-600 hover:text-white hover:border-transparent transition duration-300"
  >
    View More
  </Link>
</div>

    </section>
  );
};

export default Machinery;
