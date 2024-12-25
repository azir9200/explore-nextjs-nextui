"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";
import { logout } from "../services/service/AuthService";
import { useUser } from "@/src/context/user.provider";

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onPress={() => handleNavigation("dashboard/admins")}
          key="profile"
        >
          Admin
        </DropdownItem>
        <DropdownItem
          onPress={() => handleNavigation("dashboard/admin-service")}
          key="settings"
        >
          Admin/service
        </DropdownItem>
        <DropdownItem
          onPress={() => handleNavigation("/profile/create-post")}
          key="create-post"
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onPress={() => handleLogout()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
