"use client";

import FXForm from "@/src/components/form/FXForm";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/context/user.provider";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { useState } from "react";

const ProfilePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const { user, setIsLoading: setUserLoading } = useUser();

  return (
    <div className="my-12 ">
      <Image
        src={
          (user?.profilePhoto as string) ||
          "https://t4.ftcdn.net/jpg/01/24/65/69/360_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg"
        }
        width={300}
        // src={session?.user?.image }
        // width={100}
        height={300}
        alt="user Img"
        className="mx-auto  rounded-3xl"
      />
      <h1 className="text-4xl text-center mt-10">Name :{user?.name} </h1>
      <h1 className="text-4xl text-center mt-10">Email :{user?.email} </h1>
      {/* <h1 className="text-4xl text-center mt-10">Welcome {user?.address} </h1>
      <h1 className="text-4xl text-center mt-10">Welcome {user?.mobile} </h1> */}
    </div>
  );
};

export default ProfilePage;
