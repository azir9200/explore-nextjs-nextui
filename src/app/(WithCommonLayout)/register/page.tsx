"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { registerUser } from "@/src/components/services/service/AuthService";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function RegisterPage() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
    };

    console.log("Inside form user data: ", isPending, userData);

    handleUserRegistration(userData);
  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register </h3>

      <div className="w-[35%]">
        <FXForm
          //! Only for development
          defaultValues={{
            name: "First User",
            email: "user001@gmail.com",
            phone: "01711223344",
            address: "New Road, ire",
            role: "user",
            password: "123456",
          }}
          onSubmitAction={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile Number" name="mobileNumber" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Address" name="address" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Role" name="role" size="sm" />
          </div>
          <div className="py-3">
            <FXInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
