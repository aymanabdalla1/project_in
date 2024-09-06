import Link from "next/link";
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-vil-pattern pb-16 pt-[70px] dark:bg-hero-pattern md:pb-[70px] md:pt-[100px] xl:pb-[110px] xl:pt-[120px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <div className="animate-fade-up flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Image
                    src={"/project_logo.png"}
                    height={120}
                    width={400}
                    alt="project icon"
                  />
                </div>
                <h1 className="animate-fade-up mt-2 mb-2 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Find ideas to start your project!
                </h1>
                <p className="animate-fade-upp mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Explore different software development ideas that will help
                  you decide on your next side project.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd-L9wA0CDC_17SOSXjq7VtrM3DItebqvgkC_A7l8tjWcBa7Q/viewform?usp=sf_link"
                    className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Join the waitlist! 🚀
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
