import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(`${envConfig.baseApi}/services`);

  return res.json();
};