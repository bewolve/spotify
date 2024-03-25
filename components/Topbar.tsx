"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "./ui/input";
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
    <header className="z-[99] mb-6 flex items-center justify-between gap-4 bg-transparent px-8 py-2 text-secondary">
      <div className="links space-x-4 text-nowrap">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "font-bold text-muted-foreground",
              pathname === link.href && "text-secondary",
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="input-element group relative hidden md:block">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="relative rounded-full bg-transparent pl-12 text-secondary backdrop-blur-md transition duration-200 focus:scale-105"
          placeholder="Search..."
        />
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
      </div>

      <div className="right-side">
        <div className="image relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary hover:cursor-pointer">
          <img
            src={user?.images[0].url}
            className="absolute object-cover"
            alt="user-display"
          />
        </div>
      </div>
    </header>
  );
};
