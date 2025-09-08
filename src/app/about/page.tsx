'use client'

import React from 'react';
import HeroSection from '@/components/AboutPage/HeroSection';
import CompanyOverview from '@/components/AboutPage/CompanyOverview';
import MissionVisionValues from '@/components/AboutPage/MissionVisionValues';
import Machinery from '@/components/AboutPage/Machinery';
import QualityCertifications from '@/components/AboutPage/Milestones';
import TeamSection from '@/components/AboutPage/TeamSection';
import DemoCard from '@/components/AboutPage/DemoCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => (
  <main className="bg-white">
    <Navbar/>
    <HeroSection />
    <CompanyOverview />
    <MissionVisionValues />
    <Machinery/>
    <QualityCertifications />
    <TeamSection />
    <DemoCard/>
    <Footer/>
  </main>
);

export default AboutPage;
