import { CardProps } from "@/types";
import Image from "next/image";
import React from "react";

export const Song = ({ image, singer, name, href }: CardProps) => {
  return (
    <a
      target="_blank"
      href={href}
      className=" min-h-36 min-w-32 overflow-hidden rounded-lg text-xs text-secondary"
    >
      <div className="image group relative h-full w-full">
        <Image src={image} alt="hahaha" fill className="object-cover" />

        <div className="absolute z-10 h-full w-full cursor-pointer bg-black/50 px-2 text-center opacity-0 transition duration-200 group-hover:opacity-100">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
            <p className="text-wrap font-bold">{name}</p>
            <p className="text-xs">{singer}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
