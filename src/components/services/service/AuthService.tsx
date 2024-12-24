"use server";

import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../../../lib/AxiosInstance";
import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    console.log("register  new user", data);

    if (data.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Login service
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    console.log("login  new user", data);
    if (data.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = Cookies.get("accessToken");

  console.log("accessToken", accessToken);

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
     
      name: decodedToken.name,
      email: decodedToken.email,
      phone: decodedToken.phone,
      role: decodedToken.role,
      address: decodedToken.address,
    };
  }

  return decodedToken;
};
