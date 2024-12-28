import Landing from "@/src/components/module/home/LandingPage";
import LatestService from "@/src/components/services/latestService/LatestService";
import { getRecentPosts } from "@/src/components/services/RecentPosts";

const HomePage = async () => {
  const { data: services } = await getRecentPosts();

  return (
    <>
      <Landing />
      <LatestService services={services} />
    </>
  );
};

export default HomePage;
