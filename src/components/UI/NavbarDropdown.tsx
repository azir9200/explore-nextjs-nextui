"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  // const { user, setIsLoading: userLoading } = useUser();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="Joe" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={() => handleNavigation("/profile")}
          key="profile"
        >
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/settings")}
          key="settings"
        >
          Settings
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/create-post")}
          key="create-post"
        >
          Create Post
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
