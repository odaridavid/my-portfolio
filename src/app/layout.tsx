import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Dave Kiribwa | Developer Portfolio',
  description: 'Showcasing my software, side quests, and chaos.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white font-sans">
        <Navbar />
        <main className="p-4">{children}</main>
        <footer className="p-4 border-t border-neutral-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Dave Kiribwa
        </footer>
      </body>
    </html>
  );
}
