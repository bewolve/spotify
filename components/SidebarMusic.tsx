import { SidebarMusicProps } from "@/types";
import Image from "next/image";
import React from "react";

export const SidebarMusic = ({
  id,
  image,
  name,
  artist,
  url,
}: SidebarMusicProps) => {
  return (
    <a key={id} href={url} target="_blank" className="group block">
      <div className="flex items-center gap-x-4 transition duration-200 group-hover:scale-105">
        <div className="image relative min-h-10 min-w-10 overflow-hidden rounded-md">
          <Image src={image} alt="hahaha" fill className="object-cover" />
        </div>
        <p className="truncate text-secondary">
          {name} - <span className="text-sm font-bold">{artist}</span>
        </p>
      </div>
    </a>
  );
};
