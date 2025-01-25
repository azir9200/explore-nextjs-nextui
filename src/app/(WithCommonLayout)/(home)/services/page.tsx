import Container from "@/src/components/UI/Container";

export default async function RecentPosts() {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">
          {" "}
          All Services From Our Company are showing here
        </h2>
        <p className="text-center">
          Discover, review, and rate your favorite service. Join a community of
          car service lovers and share your experiences
        </p>
      </div>
    </Container>
  );
}
