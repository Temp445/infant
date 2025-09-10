
import React from 'react';
import HeroSection from '@/components/AboutPage/HeroSection';
import CompanyOverview from '@/components/AboutPage/CompanyOverview';
import MissionVisionValues from '@/components/AboutPage/MissionVisionValues';
import Advantage from '@/components/AboutPage/Advantage';
import QualityCertifications from '@/components/AboutPage/Milestones';
import TeamSection from '@/components/AboutPage/TeamSection';
import DemoCard from '@/components/AboutPage/DemoCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Metadata } from 'next'
import Clients from '@/components/HomePage/Clients';

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL || '';

export const metadata : Metadata = {
  title: "About Us | Infant Engineers Pvt Ltd",
  description: "Discover our journey as a trusted automotive component manufacturer. With years of expertise, advanced technology, and commitment to quality, we deliver precision-engineered solutions for global automotive industries.",

  metadataBase: new URL(domainUrl),

  openGraph: {
    title: "About Us | Infant Engineers Pvt Ltd",
    description: "Discover our journey as a trusted automotive component manufacturer. With years of expertise, advanced technology, and commitment to quality, we deliver precision-engineered solutions for global automotive industries.",
    url: '/about',
    siteName: "Infant Engineers Pvt Ltd",
    images: [
       {
        url: '/og-images/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Infant Engineers Pvt Ltd',
      },
    ],
    type: 'website'
  },
}

const AboutPage = () => (
  <div>
    <Navbar/>
    <HeroSection />
    <CompanyOverview />
    <MissionVisionValues />
    <Advantage/>
    <Clients/>
    <QualityCertifications />
    <TeamSection />
    <DemoCard/>
    <Footer/>
  </div>
);

export default AboutPage;
