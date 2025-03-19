"use client";

import { Button } from "@nextui-org/button";
import { FormProvider, useForm } from "react-hook-form";

import FXInput from "@/src/components/form/FXInput";

const CreateService = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
      <h1 className="text-2xl text-center font-semibold">Add New Book</h1>
      <FormProvider {...methods}>
        <form>
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
          <div>
            <Button
              className="my-3 w-full rounded-md bg-base-400 text-2xl"
              type="submit"
            >
              Add Book
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateService;
