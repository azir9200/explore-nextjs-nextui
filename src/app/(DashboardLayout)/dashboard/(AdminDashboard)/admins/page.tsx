"use client";

import { useUser } from "@/src/context/user.provider";

const AdminsPage = async () => {
  const { user } = useUser();

  return (
    <div className="h-[calc(100vh-64px)] bg-cover bg-center bg-emerald-900 p-8">
      <div className="container mx-auto pt-12   text-stone-100 font-semibold text-3xl space-y-4 text-center  justify-center items-center ">
        {/* <img
         src={
           user?.image ||
           "https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg"
         }
         alt=""
         className="rounded-full sm: w-40 md:48 "
       /> */}

        <h2>Welcome Admin </h2>
        <h2>Your personal information are below </h2>
        <h2>Your Nmae: {user?.name} </h2>
        <p>Your email is: {user?.email} </p>
        {/* <p>Your Address: {user?.address} </p> */}
        <p> {user?.phone} </p>
        <h3>Thank so much for taking care our site.</h3>
      </div>
    </div>
  );
};

export default AdminsPage;
