import Footer from "@/components/Shared/Footer/Footer";
import NavbarPage from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarPage />
      <div className="min-h-screen"> {children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
