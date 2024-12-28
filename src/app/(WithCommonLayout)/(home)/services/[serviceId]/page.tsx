import Image from "next/image";

import { getSingleService } from "@/src/components/services/RecentPosts";

type TProps = {
  params: {
    serviceId: string;
  };
};

const ServiceDetail = async ({ params }: TProps) => {
  const service = await getSingleService(params.serviceId);

  console.log("service details", service);

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          alt="book image"
          height={300}
          src={service.data.image}
          width={300}
        />
      </figure>
      <div className="p-12">
        <div className="flex justify-between mb-4">
          <h2 className="card-title">{service.data.name}</h2>
          <div className="badge p-4 bg-fuchsia-500">
            {service.data.category}
          </div>
        </div>
        <p>{service.data.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
