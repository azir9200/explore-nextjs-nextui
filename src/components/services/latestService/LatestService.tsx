import { Button } from "@nextui-org/button";
import Link from "next/link";

// import { TServices } from "@/src/types";

const LatestService = () => {
  return (
    <div className="my-10 lg:w-[90%] md:w-[60%] sm:w-[30%]  mx-auto">
      <h1 className="text-4xl text-center">
        Latest <span className="text-fuchsia-800">Posts</span>
      </h1>
      <p className="text-gray-400 text-center italic w-2/4 mx-auto mt-2">
        Discover, review, and rate your favorite books. Join a community of book
        lovers and share your reading experiences.
      </p>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2  my-12 gap-8">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="my-8 justify-center gap-10 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {services.slice(5, 11).map((service: TServices) => (
          <ServiceCard key={service?._id} service={service} />
        ))}
      </div> */}

      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/services">See All</Link>
        </Button>
      </div>
    </div>
  );
};

export default LatestService;
