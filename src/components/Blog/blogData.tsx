import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Super Cool Back End Project",
    paragraph:
      "This project is super cool and will help you learn a lot about back end development.",
    image: "/backend.png",
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
    title: "Awesome Weather App for Front End Developers",
    paragraph:
      "This weather app is awesome and will help you learn a lot about front end development.",
    image: "/weatherapp.jpg",
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
    title: "Full Stack Project for Beginners plus AI!",
    paragraph:
      "Ready to learn full stack development? This project is perfect for beginners and includes AI.",
    image: "/fullstack.jpg",
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
