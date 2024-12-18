import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(`${envConfig.baseApi}/services`);

  return res.json();
};

// export const getAllPosts = async (type?: string, wait = false) => {
//   let fetchOptions = {};

//   if (type === "ssr") {
//     fetchOptions = {
//       cache: "no-store",
//     };
//   } else if (type === "isr") {
//     fetchOptions = {
//       next: {
//         tags: ["Posts"],
//       },
//     };
//   }

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_API}/posts`,
//     fetchOptions
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts data");
//   }

//   return res.json();
// };
