"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { User } from "@/types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { navLinks } from "@/constants";

export const Topbar = () => {
  // @ts-ignore
  const { data: user }: { data: User | null } = useSession();
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  return (
    <header className="text-secondary bg-transparent z-[99] flex items-center justify-between px-8 py-2 gap-4">
      <div className="links space-x-4 text-nowrap">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "font-bold text-muted-foreground",
              pathname === link.href && "text-secondary"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="input-element relative">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-full relative text-secondary bg-transparent backdrop-blur-md pl-12"
          placeholder="Search..."
        />
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 " />
      </div>

      <div className="right-side">
        <div className="image relative w-12 h-12 ring-2 ring-primary overflow-hidden rounded-full hover:cursor-pointer">
          <Image src={user?.images[0].url!} fill alt="user-display" />
        </div>
      </div>
    </header>
  );
};
