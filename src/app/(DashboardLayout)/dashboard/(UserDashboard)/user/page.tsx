"use client";

import Image from "next/image";
import { useState } from "react";

import { useUser } from "@/src/context/user.provider";

const ProfilePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const { user, setIsLoading: setUserLoading } = useUser();

  return (
    <div className="my-12 ">
      <Image
        alt="user Img"
        width={300}
        // src={session?.user?.image }
        // width={100}
        className="mx-auto  rounded-3xl"
        height={300}
        src={
          (user?.profilePhoto as string) ||
          "https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg"
        }
      />
      <h1 className="text-4xl text-center mt-10">Name :{user?.name} </h1>
      <h1 className="text-4xl text-center mt-10">Email :{user?.email} </h1>
      {/* <h1 className="text-4xl text-center mt-10">Welcome {user?.address} </h1>
      <h1 className="text-4xl text-center mt-10">Welcome {user?.mobile} </h1> */}
    </div>
  );
};

export default ProfilePage;
