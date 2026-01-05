import Header from "@/components/clinic/Header";
import Hero from "@/components/clinic/Hero";
import Services from "@/components/clinic/Services";
import Booking from "@/components/clinic/Booking";
import Contact from "@/components/clinic/Contact";
import Footer from "@/components/clinic/Footer";

export default function Page() {
  return (
    <main dir="rtl" className="min-h-screen">
      {/* خلفية زرقاء زجاجية */}
      <div className="fixed inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-[#0b1b3a] via-[#123a7a] to-[#0b1b3a]" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.12),transparent_55%)]" />
      </div>

      <Header />
      <Hero />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
