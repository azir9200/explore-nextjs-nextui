/* eslint-disable import/order */
"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import NavbarDropdown from "../UI/NavbarDropdown";
import { Book } from "lucide-react";

export const Navbar = () => {
  // const { user } = useUser();

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-green-950">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit ">
          <NextLink
            className="flex justify-start items-center gap-1  rounded-md"
            href="/"
          >
            <Book className="font-bold text-amber-500" />
            <p className="text-xl text-amber-600 rounded-md pr-2 font-bold text-inherit">
              Golden Book
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 text-amber-800 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "secondary" }),
                  "data-[active=true]:text-amber-500 data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <NavbarDropdown />
        </NavbarItem>
        {/* 
        {user?.email ? (
          <NavbarItem className="hidden sm:flex gap-2">
            <NavbarDropdown />
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden sm:flex gap-2">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )} */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch className="text-amber-700" />
        <NavbarMenuToggle className="text-amber-600 font-extrabold" />
      </NavbarContent>

      <NavbarMenu className="bg-green-950 text-white">
        <div className="mx-4 mt-2 text-amber-600 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-white"
                color={
                  index === 2
                    ? "warning"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
