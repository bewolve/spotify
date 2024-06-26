import { SidebarLinks } from "@/types";
import { AiOutlineHistory } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa6";
import { LuMusic2 } from "react-icons/lu";

export const navLinks = [
  {
    name: "Discover",
    href: "/",
  },
  {
    name: "My Library",
    href: "/library",
  },
  {
    name: "Radio",
    href: "/radio",
  },
];

export const sideBarLinks: SidebarLinks[] = [
  {
    name: "Browse",
    href: "/browse",
    icon: AiOutlineHistory,
  },
  {
    name: "My Playlist",
    href: "/playlist",
    icon: LuMusic2,
  },
  {
    name: "Recommended",
    href: "/recommended",
    icon: FaThumbsUp,
  },
];
