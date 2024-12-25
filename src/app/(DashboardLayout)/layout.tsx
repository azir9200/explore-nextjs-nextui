/* eslint-disable import/order */
import { ReactNode } from "react";
import Topbar from "@/src/components/UI/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primaryBg dark:bg-darkPrimaryBg min-h-[100dvh] flex gap-4 items-start p-5 relative">
      <div className="w-[100%]">
        <Topbar />
        {children}
      </div>
    </div>
  );
}
