"use client";
import MenuIcon from "@/src/assets/icons/fill/Menu";
import SearchIcon from "@/src/assets/icons/fill/Search";
import { useUser } from "@/src/context/user.provider";
import { useSidebarStore } from "@/src/stores/useSidebar";
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
import { Avatar, Card, Divider, Input, Kbd } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import MainTooltip from "./MainTooltip";
import SettingsIcon from "@/src/assets/icons/fill/Settings";
import NotificationPin from "@/src/assets/icons/fill/NotificationPin";
import { ThemeSwitch } from "../UI/theme-switch";
import PopOver from "./Popover";
import UserPopoverContent from "./UserPopoverContent";

export default function Topbar() {
  const { t } = useTranslation();
  const { isSidebarOpen, toggleSidebar, isSidebarExpanded } = useSidebarStore();
  const { user } = useUser();

  return (
    <Card className="dark:bg-black dark:shadow-md dark:shadow-white rounded-full py-3 px-5 flex-row justify-between items-center sticky top-5 z-20">
      <div className="flex items-center gap-2">
        <span
          onClick={() => toggleSidebar(true)}
          className="cursor-pointer md:hidden"
        >
          <MenuIcon />
        </span>
        {/* //TODO should fix this when we Login the title is Login */}
        {!isSidebarOpen && (
          <h1 className="ltr:font-poppinsRegular text-lg md:text-2xl">
            {t("Dashboard")}
          </h1>
        )}
      </div>
      <div className="flex items-center gap-.5 2xs:gap-1 sm:gap-5">
        <Input
          classNames={{
            inputWrapper: ["rounded-full"],
          }}
          className={`font-poppinsRegular hidden ${
            isSidebarExpanded ? "lg:block lgb:block" : "lg:block"
          }`}
          startContent={<SearchIcon />}
          endContent={
            <Kbd className="" keys={["command"]}>
              K
            </Kbd>
          }
          placeholder={t("search")}
        />
        <MainTooltip content={t("settings")}>
          <span className="cursor-pointer hidden sm:block">
            <SettingsIcon />
          </span>
        </MainTooltip>
        <MainTooltip content={t("notification")}>
          <span className="cursor-pointer hidden sm:block">
            <NotificationPin />
          </span>
        </MainTooltip>
        <div className="hidden sm:block">
          <ThemeSwitch />
        </div>

        <Divider className="rotate-90 w-5 h-[2px] bg-primaryGray" />
        <PopOver content={<UserPopoverContent user={user} />}>
          <div>
            <Avatar
              src={user?.profilePhoto as string}
              className={`block ${
                isSidebarExpanded ? "md:block" : "md:block"
              } mdb:hidden cursor-pointer`}
            />
          </div>
        </PopOver>
      </div>
    </Card>
  );
}
