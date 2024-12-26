import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(`${envConfig.baseApi}/services`);

  return res.json();
};

export const getSingleService = async (_id: string) => {
  const res = await fetch(`${envConfig.baseApi}/services/${_id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }
  return res.json();
};
