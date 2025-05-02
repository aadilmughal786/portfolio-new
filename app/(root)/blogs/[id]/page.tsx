import ScrollProgressBar from "@/components/nav-bar/ScrollProgressBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Aadil",
  description: "Portfolio Website",
};

export default function Home() {
  return (
    <div className="h-[2000px]">
      <ScrollProgressBar />
    </div>
  );
}
