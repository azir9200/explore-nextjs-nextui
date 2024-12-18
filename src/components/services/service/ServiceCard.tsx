"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

const ServiceCard = (service: any) => {
  const { name, description, price, duration, image, _id } = service?.service;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-bold"> {name} </p>
        <small className="text-default-500">Duration: {duration} </small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
      <CardFooter>Action: {description}</CardFooter>
    </Card>
  );
};

export default ServiceCard;
