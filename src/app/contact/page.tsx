import type { Metadata } from 'next';
import Contact from './ContactClient';

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL || '';

export const metadata: Metadata = {
  title: 'Contact Us | Infant Engineers Pvt Ltd',
  description: 'Get in touch with our team for automotive component manufacturing solutions. Contact us today for OEM parts, precision engineering, and reliable global supply support.',
 
  openGraph: {
    title: 'Contact Us | Infant Engineers Pvt Ltd',
    description: 'Get in touch with our team for automotive component manufacturing solutions. Contact us today for OEM parts, precision engineering, and reliable global supply support.',
    url: `${domainUrl}/contact`,
    siteName: 'Infant Engineers Pvt Ltd',
    images: [
      {
        url: `${domainUrl}/og-images/Logo.png`, 
        width: 1200,
        height: 630,
        alt: 'Infant Engineers Pvt Ltd',
      },
    ],
    type: 'website',
  },
};

export default function ContactPage() {
  return <Contact/>;
}