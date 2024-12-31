"use client";

import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import React from "react";
import { toast } from "sonner";

import FXInput from "@/src/components/form/FXInput";

const EditService = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async () => {
    try {
      toast("Post created successfully!");
    } catch (error) {
      toast("Failed to create the post. Please try again.");
    }
  };

  return (
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
      <h1 className="text-2xl font-semibold">Edit Service</h1>
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
          <Button type="submit"> Edit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditService;
