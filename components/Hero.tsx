//@ts-nocheck
import { authOptions } from "@/lib/auth";
import { User } from "@/types";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

export const Hero = async () => {
  const user: User | null = await getServerSession(authOptions);
  const data = await fetch(
    `${process.env.API}/artists/5r3wPya2PpeTTsXsGhQU8O`,
    {
      headers: {
        Authorization: `Bearer ${user?.access}`,
      },
      cache: "force-cache",
    }
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-2 h-[50vh] gap-x-4">
      <div className="headings space-y-5 text-secondary self-center pl-12">
        <h1 className="text-6xl">
          Follow <span className="font-bold text-primary">{data.name}</span>
        </h1>
        <h5 className="text-2xl">
          Get to know the latest sensation in Punjabi Modern World{" "}
          <a
            target="_blank"
            href={data.external_urls.spotify}
            className="font-bold font-primary"
          >
            {data.name}
          </a>
          .
        </h5>
      </div>
      <div className="image relative rounded-md overflow-hidden">
        <Image
          src={data.images[0].url}
          fill
          alt="heroimage"
          className="object-cover"
        />
      </div>
    </div>
  );
};
