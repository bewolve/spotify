import { CardWrapper } from "@/components/CardWrapper";
import { authOptions } from "@/lib/auth";
import { User } from "@/types";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Page() {
  const user: User | null = await getServerSession(authOptions);
  const data = await fetch(`${process.env.API}/users/${user?.id}/playlists`, {
    headers: {
      Authorization: `Bearer ${user?.access}`,
    },
    cache: "force-cache",
  })
    .then((res) => res.json())
    .then((data) => data.items);

  return (
    <section className="container grid grid-cols-3 items-center gap-8">
      {data.map((playlist: any) => (
        <a
          href={playlist.external_urls.spotify}
          target="_blank"
          key={playlist.id}
        >
          <CardWrapper image={playlist.images[0].url} name={playlist.name} />
        </a>
      ))}
    </section>
  );
}
