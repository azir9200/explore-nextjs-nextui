import Books from "@/src/components/books/books";
import Banner from "@/src/components/home/banner";
import Hero from "@/src/components/home/hero";
import HeroSection from "@/src/components/home/HeroSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroSection />
      <Banner />
      <Books />
    </>
  );
};

export default HomePage;
