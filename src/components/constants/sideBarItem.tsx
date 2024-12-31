/* eslint-disable import/order */
import { Home, NewspaperIcon, ServerIcon, User } from "lucide-react";

export function UserSideBarItem() {
  return [
    {
      title: "Dashboard",
      Icon: <Home size={28} />,
      href: "/",
    },
    {
      title: "Profile",
      Icon: <User size={28} />,
      href: "/dashboard/user",
    },
    {
      title: "My Services",
      Icon: <ServerIcon size={28} />,
      href: "/dashboard/my-suggest",
    },
  ];
}

export function AdminSideBarItem() {
  return [
    {
      title: "Dashboard",
      Icon: <Home size={28} />,
      href: "/",
    },
    {
      title: "Profile",
      Icon: <User size={28} />,
      href: "/dashboard/admins",
    },
    {
      title: "Service",
      Icon: <NewspaperIcon size={28} />,
      href: "/dashboard/admin-service/create-service",
    },
  ];
}
