import { Navbar } from "@/src/components/UI/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
