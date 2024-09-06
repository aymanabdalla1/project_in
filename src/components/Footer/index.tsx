"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-8 dark:bg-gray-dark md:pt-20 lg:pt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center"> {/* Added justify-center */}
            <div className="w-full px-4 md:w-full lg:w-full xl:w-full">
              <div className="mb-12 lg:mb-16">
                <div className="flex items-center justify-center"> {/* Added justify-center */}
                  <a
                    href="https://github.com/aymanabdalla1/project_in"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    All Rights Reserved © 2024
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full px-6 md:w-1/2 lg:w-4/12 xl:w-3/12">
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
