"use client";

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import FXInput from "@/src/components/form/FXInput";
import { useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hook";

export default function CreatePost() {
  const router = useRouter();

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess,
  } = useCreatePost();

  const { user } = useUser();

  const methods = useForm();

  const { control, handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const postData = {
      ...data,
    };

    handleCreatePost(postData);
    console.log("create form", data);
  };

  return (
    <>
      <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
        <h1 className="text-2xl font-semibold">Post a found item</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-3">
              <FXInput label="Name" name="name" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Price" name="price" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Duration" name="duration" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Description" name="description" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Image URL" name="image" size="sm" />
            </div>
            <Button type="submit"> Post</Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
