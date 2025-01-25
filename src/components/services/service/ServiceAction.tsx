import { TServices } from "../../../types/index";

export const getAllServices = async (type?: string) => {
  let fetchOptions = {};

  if (type === "ssr") {
    fetchOptions = {
      cache: "no-store",
    };
  } else if (type === "isr") {
    fetchOptions = {
      next: {
        tags: ["TServices"],
      },
    };
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/product`,
    fetchOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts data");
  }

  return res.json();
};

//getSingleService
export const getSingleService = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  return res.json();
};

// createPost
export const createPost = async (data: TServices) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  return res.json();
};
