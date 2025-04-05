import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TBook = {
  id: string;
  title: string;
  genre: string;
  image: string;
  publishedYear: number;
  totalCopies: number;
  availableCopies: number;
  createdAt: string;
  updatedAt: string;
};

export interface IUser {
  _id?: string;
  name: string;
  role: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
