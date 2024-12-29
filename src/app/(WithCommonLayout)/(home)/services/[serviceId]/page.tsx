import Image from "next/image";

import { getSingleService } from "@/src/components/services/RecentPosts";
import Link from "next/link";

type TProps = {
  params: {
    serviceId: string;
  };
};

const ServiceDetail = async ({ params }: TProps) => {
  const service = await getSingleService(params.serviceId);

  return (
    <div className="flex justify-center rounded-md items-center bg-base-100 shadow-xl">
      <div className="justify-center items-center">
        <Image
          alt="book image"
          height={500}
          src={service.data.image}
          width={500}
          className="items-center justify-center  rounded-md"
        />

        <h2 className="card-title text-4xl  p-8 text-center ">
          {service.data.name}
        </h2>
        <h2 className="text-2xl p-4">
          {" "}
          Service Duration for this specific order : {service.data.duration} .00
          Minutes
        </h2>
        <p className="text-2xl p-4"> We will make {service.data.description}</p>

        <div className=" flex justify-center items-center text-xl ">
          <Link href={"/"}>
            <h1 className=" rounded-md px-8 py-4 text-xl text-black bg-white hover:bg-emerald-400 font-semibold">
              Go Home{" "}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
