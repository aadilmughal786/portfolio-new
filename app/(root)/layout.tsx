"use client";

import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen duration-150 ease-in">
      <NavBar />
      <div>
        <main className="overflow-hidden">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
