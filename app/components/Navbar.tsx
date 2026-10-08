import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar" style={{ display: 'flex', gap: '1.5rem', padding: '1rem', background: '#1e293b', color: '#fff' }}>
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/todo">To-Do List</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}