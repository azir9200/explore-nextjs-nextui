import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(`${envConfig.baseApi}/services`);
  console.log("service/recentpost", res);

  return res.json();
};

export const getSingleService = async (id: string) => {
  const res = await fetch(`${envConfig.baseApi}/services/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  // eslint-disable-next-line padding-line-between-statements
  return res.json();
};
