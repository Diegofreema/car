import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'CarShow',
  description: 'Discover cars around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
