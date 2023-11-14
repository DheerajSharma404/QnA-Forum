import { SidebarLink } from "@/types";

export const theme = [
  { value: "light", label: "Light", icon: "/assets/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/moon.svg" },
  { value: "system", label: "System", icon: "/assets/system.svg" },
];

export const sidebarLink: SidebarLink[] = [
  {
    imgURL: "assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "assets/community.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "assets/collection.svg",
    route: "/collection",
    label: "Collection",
  },
  {
    imgURL: "assets/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "assets/ask_question.svg",
    route: "/ask_question",
    label: "Ask a Question",
  },
];
