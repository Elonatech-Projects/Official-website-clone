import About from "@/components/About";
import ClientsCarousel from "@/components/Clients";
import Footer from "@/components/Footer";
import FreeConsultation from "@/components/FreeConsultation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import ServiceGoals from "@/components/ServiceGoals";
import ServicesGrid from "@/components/Services";
import TestimonialsCarousel from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex flex-col items-center">
        <About />
        <ServicesGrid />
      </div>
      <ClientsCarousel />
      <TestimonialsCarousel />
      <ServiceGoals />
      <FreeConsultation />
      <LatestProducts />
      <Footer />
    </>
  );
}
