import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialists from "@/components/UI/HomePage/Specialists/Specialists";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialists />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
};

export default HomePage;
