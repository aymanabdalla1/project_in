import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from 'next/image';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Page" description="" />
      <div className="container-fluid w-50 mt-5 p-4">
        <h1 className="justify-content-center mb-4 text-center">
          What is Project In?
        </h1>
        <p
          className="justify-content-center mb-4 text-center"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          Project In is a dynamic platform designed to empower creators like you
          to showcase your software projects to a wider audience. It serves as a
          collaborative hub where you can not only share your innovations but
          also connect with fellow developers, enthusiasts, and potential
          collaborators. Whether you're unveiling a groundbreaking app, a sleek
          website, or a complex software solution, Project In provides the
          perfect stage to exhibit your work and gather valuable feedback. It's
          more than just a platform; it's a community-driven space where ideas
          flourish and connections thrive.
        </p>
        <p
          className="mb-4 mt-14 text-center"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          From Python to JavaScript, Java to Ruby, and everything in between,
          your projects are welcome here. Whether you're into web development,
          mobile apps, data science, or game design, our platform embraces
          diversity and innovation. So, unleash your creativity and share your
          projects with the world on Project In today!
        </p>
      </div>

      <div className="container-fluid w-75 mt-5">
        <h2 className="mb-4">Why?</h2>
        <p>
          As a side project itself, it emerged from a desire to create a space
          where developers could easily share their work and collaborate with
          others. The founders recognized the challenges many creators face in
          showcasing their projects and connecting with like-minded individuals.
          Thus, Project In was conceived as a solution—a platform that addresses
          these needs and fosters a vibrant community of innovation. So, why?
          Because every great endeavor begins with a question and a passion to
          make a difference.
        </p>
      </div>

      <div className="container-fluid w-75 mt-5">
        <h3 className="mb-4">But...</h3>
        <p>
          Whether you're a seasoned developer or just starting out, Project In
          invites you to break free from constraints and share your projects
          with the world. So, why hold back when you can unleash your potential
          and inspire others? With Project In, there are no excuses—only
          opportunities to shine.
        </p>
      </div>
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
