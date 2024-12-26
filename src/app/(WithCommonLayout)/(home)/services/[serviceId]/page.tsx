import { getSingleService } from "@/src/components/services/RecentPosts";
import ServiceDetails from "@/src/components/services/serviceDetails/ServiceDetails";

type TProps = {
  params: {
    serviceId: string;
  };
};

const ServiceDetail = async ({ params }: TProps) => {
  const service = await getSingleService(params.serviceId);

  console.log("service details", service);

  return (
    <div className="p-5">
      <ServiceDetails service={service} />
    </div>
  );
};

export default ServiceDetail;
