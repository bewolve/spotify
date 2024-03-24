import { authOptions } from "@/lib/auth";
import { User } from "@/types";
import { getServerSession } from "next-auth";
import { Song } from "./Song";

export const PopularSongs = async () => {
  const user: User | null = await getServerSession(authOptions);
  const data = await fetch(
    `${process.env.API}/recommendations?limit=20&market=PK&seed_artists=2oSONSC9zQ4UonDKnLqksx,5r3wPya2PpeTTsXsGhQU8O,4PULA4EFzYTrxYvOVlwpiQ,5HcunTidTUrOaf8V0iJcvl,3uHUKCspaCzAab9A3LlGAr`,
    {
      headers: {
        Authorization: `Bearer ${user?.access}`,
      },
      cache: "force-cache",
    },
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="flex gap-x-4 overflow-y-hidden overflow-x-scroll scrollbar-hide">
      {data.tracks.map((track: any) => (
        <Song
          key={track.id}
          image={track.album.images[0].url}
          name={track.name}
          singer={track.artists[0].name}
          href={track.external_urls.spotify}
        />
      ))}
    </div>
  );
};
