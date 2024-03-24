import { sideBarLinks } from "@/constants";
import { authOptions } from "@/lib/auth";
import { axiosInstance } from "@/lib/axios";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { SidebarMusic } from "./SidebarMusic";
import { SidebarLinks } from "@/types";

export const Sidebar = async () => {
  const session: any = await getServerSession(authOptions);
  const data = await axiosInstance
    .get("me/top/tracks?limit=5", {
      headers: {
        Authorization: `Bearer ${session?.access}`,
      },
    })
    .then((res) => res.data);

  return (
    <div className="h-screen bg-zinc-900 scrollbar-hide overflow-y-scroll">
      <div className="wrapper px-6 py-8 space-y-16">
        <div className="links space-y-4">
          {sideBarLinks.map((links: SidebarLinks) => (
            <div
              className="navlink-item text-xl flex items-center gap-3 text-secondary hover:text-primary transition duration-200"
              key={links.name}
            >
              <links.icon />
              <Link href={links.href} className="block font-semibold ">
                {links.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="side-bar-music space-y-3">
          <h1 className="text-3xl font-bold text-secondary mb-12">
            Your Top Track
          </h1>
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
  );
};
