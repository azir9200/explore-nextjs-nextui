import { Button } from "@nextui-org/button";
import Link from "next/link";
import { IPost } from "@/src/types";
import Container from "@/src/components/UI/Container";
import { getRecentPosts } from "@/src/components/services/RecentPosts";
import ServiceCard from "@/src/components/services/service/ServiceCard";

export default async function RecentPosts() {
  const { data: services } = await getRecentPosts();

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">
          {" "}
          All Services From Our Company{" "}
        </h2>
        <p className="text-center">
          Discover, review, and rate your favorite service. Join a community of
          car service lovers and share your experiences
        </p>
      </div>
      <div className="my-8 justify-center gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service: IPost) => (
          <ServiceCard key={service?._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
}
