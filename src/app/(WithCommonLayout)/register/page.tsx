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
    <div className="flex w-full min-h-screen flex-col items-center justify-center  bg-cover bg-center px-4">
      <div className="w-full max-w-md p-6 md:p-8 lg:p-10 rounded-md border backdrop-blur-md bg-black/10 text-center">
        <h3 className="mb-6 text-4xl font-bold">Sign Up</h3>
        <FXForm
          // //! Only for development
          // defaultValues={{
          //   name: "First User",
          //   email: "user001@gmail.com",
          //   phone: "011223344",
          //   address: "New Road, ire",
          //   role: "user",
          //   password: "123456",
          // }}
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
          {/* <div className="py-3">
            <FXInput label="Role" name="role" size="sm" />
          </div> */}
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
