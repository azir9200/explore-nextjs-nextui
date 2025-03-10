import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TServices = {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // Duration in minutes
  isDeleted: boolean;
  image: string; // URL to the image
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

export interface ICategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  _id?: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  profilePhoto?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}
