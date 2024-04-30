import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialists from "@/components/UI/HomePage/Specialists/Specialists";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialists />
      <TopRatedDoctors />
    </>
  );
};

export default HomePage;
