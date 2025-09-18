import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="flex flex-col items-center">
        <About />
        <ServicesGrid />
      </div>
    </>
  );
}
