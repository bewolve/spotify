import { CardWrapper } from "@/components/CardWrapper";
import { authOptions } from "@/lib/auth";
import { User } from "@/types";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Page() {
  const user: User | null = await getServerSession(authOptions);
  const data = await fetch(`${process.env.API}/browse/new-releases`, {
    headers: {
      Authorization: `Bearer ${user?.access}`,
    },
    cache: "force-cache",
  })
    .then((res) => res.json())
    .then((data) => data.albums.items);

  return (
    <section className="container">
      <h1 className="text-3xl font-bold text-secondary">
        Browse Latest Releases
      </h1>
      <div className="wrapper grid grid-cols-3 gap-6 py-4">
        {data.map((album: any) => (
          <a href={album.external_urls.spotify} key={album.id} target="_blank">
            <CardWrapper
              image={album.images[0].url}
              name={album.name}
              singer={album.artists[0].name}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
