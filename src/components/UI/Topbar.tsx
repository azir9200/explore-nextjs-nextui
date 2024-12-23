"use client";
import { Card, Divider } from "@nextui-org/react";

export default function Topbar() {
  return (
    <Card className="dark:bg-black dark:shadow-md dark:shadow-white rounded-full py-3 px-5 flex-row justify-between items-center sticky top-5 z-20">
      <div className="flex items-center gap-.5 2xs:gap-1 sm:gap-5">
        <Divider className="rotate-90 w-5 h-[2px] bg-primaryGray" />
      </div>
    </Card>
  );
}
