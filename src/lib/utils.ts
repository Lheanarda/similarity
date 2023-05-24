import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  //py-2 px-2 -> p-2 (optimize tailwind class)
  return twMerge(clsx(inputs));
}
