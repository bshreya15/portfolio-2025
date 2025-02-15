import memojiImage from "@/assets/images/memoji-computer-fe.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { HeroBg } from "@/components/HeroBg";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-32 lg:py-28 relative z-0 overflow-x-clip">
      <HeroBg />
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="size-[150px] md:size-[230px]"
            src={memojiImage}
            alt="dev image"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium lg:text-lg">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-2xl md:text-5xl text-center mt-4 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-8 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
