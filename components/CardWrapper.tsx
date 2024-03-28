import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "next/image";
import { CardProps } from "@/types";

export const CardWrapper = ({ name, singer, image }: CardProps) => {
  return (
    <Card className="h-60 w-52 overflow-hidden bg-zinc-900 text-secondary transition duration-200 hover:scale-105">
      <CardHeader className="px-2">
        <CardTitle className=" truncate">{name}</CardTitle>
        {singer && (
          <h4 className="text-sm">
            Author: <span className="truncate font-bold">{singer}</span>
          </h4>
        )}
      </CardHeader>
      <CardContent className="relative min-h-48 overflow-hidden">
        <Image
          className="object-cover"
          src={image}
          fill
          alt={`${name} Song Image by ${singer}`}
        />
      </CardContent>
    </Card>
  );
};
