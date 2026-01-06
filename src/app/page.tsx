import Header from "@/components/clinic/Header";
import Hero from "@/components/clinic/Hero";
import Services from "@/components/clinic/Services";
import Booking from "@/components/clinic/Booking";
import Contact from "@/components/clinic/Contact";
import Footer from "@/components/clinic/Footer";
import Doctors from "@/components/clinic/Doctors";


import WhyUs from "@/components/clinic/WhyUs";
import Reviews from "@/components/clinic/Reviews";
import HoursLocation from "@/components/clinic/HoursLocation";

export default function Page() {
  return (
    <main dir="rtl" className="min-h-screen">
      <Header />

      {/* Hero background like template banner */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/chair.png')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/20" />

        <Hero />
      </section>

      {/* باقي الصفحة (Light like template) */}
      <Services />
            <WhyUs />
      <Doctors />
            <Reviews />
                  <HoursLocation />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
