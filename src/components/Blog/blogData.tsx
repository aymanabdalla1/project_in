import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Project 1",
    paragraph:
      "This project is super cool and will help you learn a lot about front end development.",
    image: "/fullstack.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["python", "react", "c"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Project 2",
    paragraph:
      "This project is super cool and will help you learn a lot about back end development.",
    image: "/fullstack.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["java","swift","azure"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Project 3",
    paragraph:
      "This project is super cool and will help you learn a lot about full stack development.",
    image: "/fullstack.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["nextjs", "tailwind", "typescript"],
    publishDate: "2025",
  },
];
export default blogData;
