"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

import { SidebarOptions } from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";

import { useUser } from "@/src/context/user.provider";

const Sidebar = () => {
  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md">
          <p>Image here</p>
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">name</h1>
          <p className="break-words text-sm">email</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/create-post"}
        >
          Create a post
        </Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        {/* <SidebarOptions
        /> */}
        <p>sidebar options </p>
      </div>
    </div>
  );
};

export default Sidebar;
