"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const ServiceCard = (service: any) => {
  const { name, description, price, image, _id } = service?.service;

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Card background"
          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-75"
          src={image}
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <div className=" flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Service Name: {name}
          </h3>
          <p className="text-lg font-bold text-green-600 "> Price: ${price}</p>

          <p className="text-gray-700  flex-grow">Description: {description}</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="font-semibold text-end text-sm underline text-fuchsia-800">
        <Link href={`/services/${_id}`}>View Details</Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
