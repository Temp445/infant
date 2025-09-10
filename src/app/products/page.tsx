import type { Metadata } from 'next';
import Product from './ProductClient';

const domainUrl = process.env.NEXT_PUBLIC_API_FRONTEND_URL || '';

export const metadata: Metadata = {
  title: 'Products | Infant Engineers Pvt Ltd',
  description: 'Explore our wide range of precision-engineered automotive components designed with advanced technology, strict quality standards, and OEM expertise to meet global industry needs',

  metadataBase: new URL(domainUrl),

  openGraph: {
    title: 'Products | Infant Engineers Pvt Ltd',
    description: 'Explore our wide range of precision-engineered automotive components designed with advanced technology, strict quality standards, and OEM expertise to meet global industry needs',
    url: '/contact',
    siteName: 'Infant Engineers Pvt Ltd',
    images: [
      {
        url: '/og-images/Logo.png', 
        width: 1200,
        height: 630,
        alt: 'Infant Engineers Pvt Ltd',
      },
    ],
    type: 'website',
  },
};

export default function ProductPage() {
  return <Product/>;
}