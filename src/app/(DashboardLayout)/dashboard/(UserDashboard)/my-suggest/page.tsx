/* eslint-disable import/order */
"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

const MySuggestPage = () => {

  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="h-[calc(100vh-64px)] bg-cover bg-center bg-slate-700">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-xl font-semibold leading-none text-white">
              Name
            </h4>
            <h5 className="text-md tracking-tight text-white">user?.email</h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          // color=""
          radius="full"
          size="lg"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-8 bg-slate-600 py-12 text-3xl text-white text-center">
        <p>You do not have any activity yet !</p>
      </CardBody>
      <CardFooter className="gap-3 bg-black flex justify-center items-center">
        <div className="flex gap-1">
          <p className="text-white font-extrabold text-xl">Thank You</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MySuggestPage;
