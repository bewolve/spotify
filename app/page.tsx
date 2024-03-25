import { PopularSongs } from "@/components/PopularSongs";
import { authOptions } from "@/lib/auth";
import { User } from "@/types";
import { getServerSession } from "next-auth";
import { BsPeople } from "react-icons/bs";

export default async function Home() {
  const user: User | null = await getServerSession(authOptions);
  const data = await fetch(
    `${process.env.API}/artists/5r3wPya2PpeTTsXsGhQU8O`,
    {
      headers: {
        Authorization: `Bearer ${user?.access}`,
      },
      cache: "force-cache",
    },
  ).then((res) => res.json());

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="container flex flex-1 flex-col py-8">
      <div className="wrapper grid flex-1 grid-cols-[1fr] grid-rows-[1_1fr_1fr] gap-4 md:grid-cols-4 md:grid-rows-[1_1fr]">
        <img
          src={data.images[0].url}
          alt="sadas"
          className="col-span-2 h-full object-cover"
        />

        <div className="headers z-50 space-y-4 text-secondary md:col-span-2 md:flex md:flex-col md:justify-center">
          <h1 className="text-5xl">
            Follow{" "}
            <a
              className="font-bold text-primary underline decoration-secondary underline-offset-4"
              href={data.external_urls.spotify}
              target="_blank"
            >
              {data.name}
            </a>
          </h1>

          <p className="max-w-sm">
            {`Get to know more about the ${data.name} who have been doing wonders in ${data.genres[0]}`}{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit vero Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor
            odio.
          </p>

          <p className="followers flex items-center gap-2">
            <BsPeople />
            {formatter.format(data.followers.total)} Followers
          </p>
        </div>

        <div className="popular row-start-3 space-y-4 self-center overflow-x-scroll scrollbar-hide md:col-span-4">
          <h1 className="text-xl font-semibold text-secondary">
            Popular Track You May Like
          </h1>
          <PopularSongs />
        </div>
      </div>
    </section>
  );
}
