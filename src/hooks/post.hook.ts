// import { useMutation } from "@tanstack/react-query";
// import { FieldValues } from "react-hook-form";
// import { toast } from "sonner";

// export const useCreatePost = () => {
//   return useMutation<any, Error, FieldValues>({
//     mutationKey: ["CREATE_POST"],
//     mutationFn: async (postData) => await createPost(postData),
//     onSuccess: () => {
//       toast.success("Post created successfully");
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     },
//   });
// };
