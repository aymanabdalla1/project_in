import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 4,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Us",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Cookie Policy",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Privacy Policy",
        path: "/",
        newTab: false,
      }
    ],
  },
  {
    id: 4,
    title: "Categories",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Front End",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Back End",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Full Stack",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Computer Vison",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Artificial Intellegence",
        path: "/",
        newTab: false,
      }
    ],
  },
];
export default menuData;
