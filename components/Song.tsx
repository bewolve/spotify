import { CardProps } from "@/types";
import Image from "next/image";
import React from "react";

export const Song = ({ image, singer, name, href }: CardProps) => {
  return (
    <a
      target="_blank"
      href={href}
      className=" min-w-32 min-h-36 text-secondary text-xs overflow-hidden rounded-lg"
    >
      <div className="image w-full h-full relative group">
        <Image src={image} alt="hahaha" fill className="object-cover" />

        <div className="px-2 w-full h-full text-center bg-black/50 opacity-0 group-hover:opacity-100 z-10 absolute transition duration-200 cursor-pointer">
          <div className="top-1/2 -translate-y-1/2 absolute left-1/2 -translate-x-1/2 space-y-2">
            <p className="font-bold text-wrap">{name}</p>
            <p className="text-xs">{singer}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
