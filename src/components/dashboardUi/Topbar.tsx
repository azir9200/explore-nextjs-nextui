"use client";

import { Avatar, Card, Divider } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import PopOver from "./Popover";
import UserPopoverContent from "./UserPopoverContent";

import { useUser } from "@/src/context/user.provider";
import { useSidebarStore } from "@/src/stores/useSidebar";

export default function Topbar() {
  const { t } = useTranslation();
  const { isSidebarOpen, isSidebarExpanded } = useSidebarStore();
  const { user } = useUser();

  return (
    <Card className="dark:bg-green-950 dark:shadow-md dark:shadow-white py-3 px-5 flex-row justify-between items-center sticky top-5 z-20">
      <div className="flex items-center gap-2">
        {/* <span
          onClick={() => toggleSidebar(true)}
          className="cursor-pointer md:hidden"
        >
          <MenuIcon />
        </span> */}

        {!isSidebarOpen && (
          <h1 className="ltr:font-poppinsRegular text-lg md:text-2xl">
            {t("Dashboard")}
          </h1>
        )}
      </div>
      <div className="flex items-center gap-.5 2xs:gap-1 sm:gap-5">
        <Divider className="rotate-90 w-5 h-[2px] bg-primaryGray" />
        <PopOver content={<UserPopoverContent user={user} />}>
          <div>
            <Avatar
              className={`block ${
                isSidebarExpanded ? "md:block" : "md:block"
              } mdb:hidden cursor-pointer`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCixyM2urliFC1w0DyNMJpBRMOXFizr3FR8aRIFfcDUGBzEaXcV6mt4gVWRqGAqqu4PI&usqp=CAU"
            />
          </div>
        </PopOver>
      </div>
    </Card>
  );
}
