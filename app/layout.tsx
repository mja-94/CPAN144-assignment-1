import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'My Next.js App',
  description: 'Assignment 1: Foundations of Advanced Front-End Development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* The navbar shows on every page */}
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}