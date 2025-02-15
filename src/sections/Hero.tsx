"use-client";

// import memojiImage from "@/assets/images/memoji-computer-fe.png";

// import { motion } from "framer-motion";
import devImage from "@/assets/images/dev-img.jpeg";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { BsLinkedin } from "react-icons/bs";
// import { HeroBg } from "@/components/HeroBg";
import { FaGithubSquare } from "react-icons/fa";

const linHref = "http://linkedin.com/in/bakshi-shreya/";
const gitHref = "https://github.com/bshreya15";

export const HeroSection = () => {
  return (
    <section>
      <div className="py-24 md:py-32 md:mt-8 lg:py-28 lg:mt-12 relative z-0 overflow-x-clip">
        {/* <HeroBg /> */}
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              className="size-[150px] md:size-[230px] rounded-full border-[0.35rem] border-white object-cover"
              src={devImage}
              alt="dev image"
              quality={100}
              priority={true}
            />
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 mt-4 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
              </div>
              <div className="text-sm font-medium lg:text-lg">
                Actively looking for new roles !
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-2xl md:text-5xl text-center mt-4 tracking-wide">
              Building Exceptional User Experiences
            </h1>

            <p className="my-8 text-center font-semibold text-white/70 md:text-lg">
              <span className="font-bold">Hello! I'm Shreya.</span> I'm a{" "}
              <span className="font-bold">frontend developer</span> with{" "}
              <span className="font-bold">4 years</span> of experience. I
              specialize in{" "}
              <span className="italic">
                transforming designs into functional, high-performing
                applications.
              </span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-8 rounded-xl cursor-pointer hover:scale-110 active:scale-105 transition"
            >
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </Link>

            <Link
              href="/CV-Shreya_Bakshi.pdf"
              className="inline-flex items-center gap-2 border border-white/15 px-10 h-[3.4rem] rounded-xl cursor-pointer hover:scale-[1.15] active:scale-105 transition"
              download
              target="_blank"
            >
              <span className="font-semibold">Download CV</span>
              <ArrowDown className="size-4" />
            </Link>

            <div className="flex gap-4">
              <a
                href={linHref}
                target="_blank"
                className="border-white bg-white text-gray-900 h-12 p-4 rounded-xl cursor-pointer flex items-center hover:scale-[1.15] active:scale-105 transition"
              >
                <BsLinkedin className="size-8" />
              </a>

              <a
                href={gitHref}
                target="_blank"
                className="border-white bg-white text-gray-900 h-12 p-4 rounded-xl cursor-pointer flex items-center hover:scale-110 active:scale-105 transition"
              >
                <FaGithubSquare className="size-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
