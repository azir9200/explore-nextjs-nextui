import Landing from "@/src/components/module/home/LandingPage";
import LatestService from "@/src/components/services/latestService/LatestService";
import { getAllServices } from "@/src/components/services/service/ServiceAction";

const HomePage = async () => {
  const { data: services } = await getAllServices();

  return (
    <>
      <Landing />
      <LatestService services={services} />
    </>
  );
};

export default HomePage;
