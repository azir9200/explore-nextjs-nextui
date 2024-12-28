"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { Link } from "@nextui-org/link";

const ServiceCard = (service: any) => {
  const { name, description, price, duration, image, _id } = service?.service;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl uppercase font-bold text-center"> {name} </p>
        <div className="flex items-center gap-4 justify-around">
          <small className="text-default-500 ">Duration: {duration} </small>
          <h4 className="font-bold text-large">Price: ${price} </h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src={image}
        />
      </CardBody>
      <CardFooter>Description: {description} </CardFooter>

      <CardFooter className="font-semibold text-end text-sm underline text-fuchsia-800">
        <Link href={`/services/${service.id}`}>View Details</Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
