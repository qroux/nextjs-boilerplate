import Link from 'next/link';

export default function Navbar() {
  return (
    <div style={{ backgroundColor: 'blue', height: '4rem' }}>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  );
}
