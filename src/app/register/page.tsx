/* eslint-disable import/order */
"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import Loading from "@/src/components/UI/Loading";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      alert("Registration successful!");
      router.push("/login"); // Redirect to login page after success
    } catch (error: any) {
      console.error("Registration Error:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full bg-green-950 min-h-screen flex-col items-center justify-center bg-cover bg-center px-4">
      <div className="w-full max-w-md md:p-8 lg:p-10 rounded-md backdrop-blur-md text-center">
        <h3 className="mb-2 text-2xl font-bold">Sign Up</h3>

        {loading ? (
          <Loading />
        ) : (
          <FXForm onSubmitAction={onSubmit}>
            <div className="py-3">
              <FXInput label="Name" name="name" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Email" name="email" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Mobile Number" name="phone" size="sm" />
            </div>
            <div className="py-3">
              <FXInput label="Address" name="address" size="sm" />
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
              Register
            </Button>
          </FXForm>
        )}

        <div className="text-center">
          Already have an account?{" "}
          <Link className="text-amber-600" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
