import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Dave Kiribwa | Developer Portfolio',
  description: 'Showcasing my software, side quests, and chaos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-black text-white font-sans">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
