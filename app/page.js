import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-bg">
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
