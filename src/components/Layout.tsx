import { ReactNode } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        minHeight: '100vh',
      }}>
      <Navbar />
      {children}
    </div>
  );
}
