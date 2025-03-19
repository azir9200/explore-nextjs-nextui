"use client";

import FXForm from "@/src/components/form/FXForm";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/src/components/schemas/login.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { loginUser } from "@/src/components/services/service/AuthService";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import { useEffect, useState } from "react";
import Loading from "@/src/components/UI/Loading";
import { toast } from "sonner";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { setIsLoading: setUserLoading } = useUser();

  const redirect = searchParams.get("redirect");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsPending(true);
    const res = await loginUser(data);

    // handleUserLogin(data);
    if (res?.success) {
      toast.success(res?.message);
      setIsPending(false);
      setIsSuccess(true);
    }
    if (!res?.success) {
      toast.error(res?.message);
      setIsPending(false);
    }
    setUserLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[100vh] bg-green-950 w-full flex-col items-center justify-center ">
        <h3 className="my-2 text-2xl font-bold">Login with Golden Book</h3>
        <p className="mb-4">Welcome Back ! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FXForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmitAction={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FXInput label="Password" name="password" type="password" />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FXForm>
          <div className="text-center">
            Don&lsquo;t have account ?{" "}
            <Link className="text-amber-700" href={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
