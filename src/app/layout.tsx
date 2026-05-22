import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://odari.dev'),
  title: 'Dave Kiribwa | Developer Portfolio',
  description: 'Showcasing my software, side quests, and chaos.',
  openGraph: {
    title: 'Dave Kiribwa | Developer Portfolio',
    description: 'Showcasing my software, side quests, and chaos.',
    url: 'https://odari.dev',
    siteName: 'odari.dev',
    images: [
      {
        url: '/placeholders/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dave Kiribwa — software engineer, DJ, photographer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dave Kiribwa | Developer Portfolio',
    description: 'Showcasing my software, side quests, and chaos.',
    images: ['/placeholders/og-image.svg'],
    creator: '@_davidodari',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-black text-white font-sans">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
