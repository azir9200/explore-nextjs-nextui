import Banner from "@/src/components/home/banner";
import Features from "@/src/components/home/features";
import Hero from "@/src/components/home/hero";
import HeroSection from "@/src/components/home/HeroSection";
import Landing from "@/src/components/module/home/LandingPage";

const HomePage = () => {
  return (
    <>
      <Landing />
      <Hero />
      <HeroSection />
      <Banner />
      <Features />
    </>
  );
};

export default HomePage;
