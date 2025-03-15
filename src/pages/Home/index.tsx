import AboutSection from "@/components/containers/AboutSection";
import HeroSection from "@/components/containers/HeroSection";
import Highlights from "@/components/containers/Highlights";
import Testimonials from "@/components/containers/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <AboutSection />
    </>
  );
};

export default HomePage;
