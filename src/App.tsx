import NoiseOverlay from "./components/NoiseOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Features } from "./components/blocks/features-8";
import Brands from "./components/Brands";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F0F0EB] font-editorial overflow-x-hidden selection:bg-white selection:text-black">
      <NoiseOverlay />
      <Navbar />

      <main className="flex flex-col relative w-full">
        <Hero />
        <Brands />
        <Features />
        <Process />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
