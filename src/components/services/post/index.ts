import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createPost = async (formData: FieldValues): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/services", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create post");
  }
};
