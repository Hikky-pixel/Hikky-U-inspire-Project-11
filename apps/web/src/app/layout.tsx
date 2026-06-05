import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BuildPro Construction Ltd | Building Excellence. Creating the Future.',
    template: '%s | BuildPro Construction Ltd',
  },
  description:
    'BuildPro Construction Ltd is a professional construction and infrastructure company delivering high-quality building projects, civil engineering, and project management services across Nigeria and Africa.',
  keywords: [
    'construction company Nigeria',
    'building construction Lagos',
    'civil engineering Nigeria',
    'project management Lagos',
    'infrastructure development Nigeria',
    'BuildPro Construction',
    'Lekki construction company',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://buildproconstruction.com',
    siteName: 'BuildPro Construction Ltd',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
