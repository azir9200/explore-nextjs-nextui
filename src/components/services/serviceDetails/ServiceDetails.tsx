import { TServices } from "@/src/types";

type ServiceDetailsProps = {
  service: TServices;
};

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  return (
    <div>
      <h1>service.name</h1>
      <p>service.description</p>
    </div>
  );
};

export default ServiceDetails;
