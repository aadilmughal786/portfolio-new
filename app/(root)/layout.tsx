'use client';

import NavBar from '@/components/layout/nav-bar/NavBar';
import Footer from '@/components/layout/footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen duration-150 ease-in">
      <NavBar />
      <div className="bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:2rem_2rem]">
        <main className="overflow-hidden">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
