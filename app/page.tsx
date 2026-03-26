import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Products from "@/components/sections/Products";
import Market from "@/components/sections/Market";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Problem />
      <Solution />
      <Market />
      <Products />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
