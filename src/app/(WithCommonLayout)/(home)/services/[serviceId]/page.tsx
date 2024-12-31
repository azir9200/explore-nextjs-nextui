import Link from "next/link";
import Image from "next/image";

import { getSingleService } from "@/src/components/services/RecentPosts";

type TProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

const ServiceDetail = async (props: TProps) => {
  const params = await props.params;
  const { serviceId } = params; // Extract serviceId from params
  const service = await getSingleService(serviceId);

  // Handle the case where the service is not found
  if (!service || !service.data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold text-red-500">
          Service not found.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center rounded-md bg-base-100 shadow-xl">
      <div className="text-center">
        <Image
          alt={service.data.name || "Service Image"}
          className="rounded-md"
          height={500}
          src={service.data.image || "/placeholder-image.jpg"} // Handle missing images
          width={500}
        />

        <h2 className="card-title text-4xl p-8">{service.data.name}</h2>
        <h3 className="text-2xl p-4">
          Service Duration for this specific order: {service.data.duration}.00
          Minutes
        </h3>
        <p className="text-2xl p-4">{service.data.description}</p>

        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="rounded-md px-8 py-4 text-xl text-black bg-white hover:bg-emerald-400 font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
