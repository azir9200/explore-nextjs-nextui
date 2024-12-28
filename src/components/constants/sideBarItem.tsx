/* eslint-disable import/order */
import {
  Edit2Icon,
  Home,
  NewspaperIcon,
  ServerIcon,
  User,
  Users,
} from "lucide-react";

export function UserSideBarItem() {
  return [
    {
      title: "Dashboard",
      Icon: <Home size={28} />,
      href: "/dashboard",
    },
    {
      title: "Profile",
      Icon: <User size={28} />,
      href: "/dashboard/profile",
    },
    {
      title: "My Services",
      Icon: <ServerIcon size={28} />,
      href: "/dashboard/my-services",
    },
  ];
}

export function AdminSideBarItem() {
  return [
    {
      title: "Dashboard",
      Icon: <Home size={28} />,
      href: "/dashboard",
    },
    {
      title: "Profile",
      Icon: <User size={28} />,
      href: "/dashboard/profile",
    },
    {
      title: "Service",
      Icon: <NewspaperIcon size={28} />,
      href: "/dashboard/admin-service/create-service",
    },
    {
      title: "Users",
      Icon: <Edit2Icon size={28} />,
      href: "/dashboard/edit-service",
    },
    {
      title: "Admins",
      Icon: <Users size={28} />,
      href: "/dashboard/admins",
    },
  ];
}
