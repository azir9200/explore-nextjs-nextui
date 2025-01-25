"use client";

import { useUser } from "@/src/context/user.provider";

const AdminsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-[calc(100vh-64px)] bg-cover bg-center bg-emerald-900 p-8">
      <div className="container mx-auto pt-12 text-stone-100 font-semibold text-3xl space-y-4 text-center justify-center items-center">
        <h2>Welcome Admin</h2>
        <h2>Your personal information is below</h2>
        <h2>Your Name: {user?.name}</h2>
        <p>Your email is: {user?.email}</p>
        <p>{user?.phone}</p>
        <h3>Thank you so much for taking care of our site.</h3>
      </div>
    </div>
  );
};

export default AdminsPage;
