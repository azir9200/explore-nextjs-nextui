import Footer from "@/src/components/shared/footer";
import { Navbar } from "@/src/components/shared/navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
