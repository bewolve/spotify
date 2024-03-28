import { sideBarLinks } from "@/constants";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { SidebarMusic } from "./SidebarMusic";
import { SidebarLinks } from "@/types";

export const Sidebar = async () => {
  const session: any = await getServerSession(authOptions);
  const data = await fetch(`${process.env.API}/me/top/tracks?limit=10`, {
    headers: {
      Authorization: `Bearer ${session?.access}`,
    },
    cache: "force-cache",
  }).then((res) => res.json());

  return (
    <div className="absolute inset-y-0 hidden w-full overflow-x-hidden bg-zinc-900 scrollbar-hide md:block">
      <div className="wrapper space-y-16 px-6 py-8">
        <div className="links space-y-6">
          {sideBarLinks.map((links: SidebarLinks) => (
            <div
              className="navlink-item flex items-center space-x-2 text-base text-secondary transition duration-200 hover:scale-105 hover:text-primary"
              key={links.name}
            >
              <links.icon />
              <Link href={links.href} className="block font-semibold ">
                {links.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="side-bar-music space-y-4">
          <h1 className="text-3xl font-bold text-secondary">Your Top Track</h1>
          <div className="tracks space-y-3">
            {data.items.map((item: any) => (
              <SidebarMusic
                key={item.id}
                id={item.id}
                name={item.name}
                artist={item.artists[0].name}
                image={item.album.images[0].url}
                url={item.external_urls.spotify}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
