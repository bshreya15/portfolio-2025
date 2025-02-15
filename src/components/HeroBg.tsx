import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroBg = ({}) => {
  return (
    <div className="absolute inset-0 hero-fade">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="md:size-[700px] md:hero-ring"></div>
      <div className="md:size-[900px] md:hero-ring"></div>
      <div className="md:size-[1200px] md:hero-ring"></div>
      <div className="md:size-[1400px] md:hero-ring"></div>

      <HeroOrbit
        size={400}
        rotation={-90}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <SparkleIcon className="size-4 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={400}
        rotation={0}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-3 rounded-full bg-emerald-300/10" />
      </HeroOrbit>

      <HeroOrbit
        size={400}
        rotation={90}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={400}
        rotation={180}
        shouldOrbit={true}
        orbitDuration="25s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-2 rounded-full bg-emerald-300/10" />
      </HeroOrbit>

      <HeroOrbit
        size={430}
        rotation={-45}
        shouldOrbit={true}
        orbitDuration="40s"
        shouldSpin={true}
        spinDuration="3s"
      >
        <div className="size-2 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={440}
        rotation={140}
        shouldOrbit={true}
        orbitDuration="34s"
        shouldSpin={true}
        spinDuration="3s"
      >
        <SparkleIcon className="size-5 text-emerald-300/60" />
      </HeroOrbit>

      <HeroOrbit
        size={440}
        rotation={45}
        shouldOrbit={true}
        orbitDuration="34s"
        shouldSpin={true}
        spinDuration="3s"
      >
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={500}
        rotation={-130}
        shouldOrbit={true}
        orbitDuration="35s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-10 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={600}
        rotation={-30}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-8 text-emerald-300/30" />
      </HeroOrbit>

      <HeroOrbit
        size={600}
        rotation={60}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <StarIcon className="size-8 text-emerald-300/60" />
      </HeroOrbit>

      <HeroOrbit
        size={600}
        rotation={180}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      {/* // */}
      <HeroOrbit
        size={750}
        rotation={30}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={60}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-2 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={90}
        shouldOrbit={true}
        orbitDuration="35s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-10 text-emerald-300" />
      </HeroOrbit>

      {/*  */}
      <HeroOrbit
        size={750}
        rotation={120}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-5 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={150}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-1 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={180}
        shouldOrbit={true}
        orbitDuration="35s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-8 text-emerald-300/40" />
      </HeroOrbit>

      {/*  */}

      <HeroOrbit
        size={750}
        rotation={210}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={240}
        shouldOrbit={true}
        orbitDuration="40s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-3 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={270}
        shouldOrbit={true}
        orbitDuration="35s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-2 text-emerald-300" />
      </HeroOrbit>

      {/*  */}

      <HeroOrbit
        size={750}
        rotation={300}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-10 text-emerald-300/45" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={300}
        shouldOrbit={true}
        orbitDuration="30s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-1 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={750}
        rotation={360}
        shouldOrbit={true}
        orbitDuration="35s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-16 text-emerald-300/90" />
      </HeroOrbit>

      {/*  */}

      <HeroOrbit
        size={900}
        rotation={60}
        shouldOrbit={true}
        orbitDuration="40s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-10 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={900}
        rotation={120}
        shouldOrbit={true}
        orbitDuration="40s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-1 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={900}
        rotation={180}
        shouldOrbit={true}
        orbitDuration="45s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-14 text-emerald-300/90" />
      </HeroOrbit>

      <HeroOrbit
        size={900}
        rotation={240}
        shouldOrbit={true}
        orbitDuration="40s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-10 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={900}
        rotation={300}
        shouldOrbit={true}
        orbitDuration="40s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <div className="size-1 rounded-full bg-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={900}
        rotation={360}
        shouldOrbit={true}
        orbitDuration="45s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-18 text-emerald-300/90" />
      </HeroOrbit>


{/*  */}
<HeroOrbit
        size={1100}
        rotation={40}
        shouldOrbit={true}
        orbitDuration="60s"
        shouldSpin={true}
        spinDuration="5s"
      >
        <SparkleIcon className="size-24 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={1100}
        rotation={140}
        shouldOrbit={true}
        orbitDuration="60s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-24 text-emerald-300/90" />
      </HeroOrbit>

      <HeroOrbit
        size={1100}
        rotation={240}
        shouldOrbit={true}
        orbitDuration="65s"
        shouldSpin={true}
        spinDuration="6s"
      >
         <SparkleIcon className="size-24 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit
        size={1100}
        rotation={340}
        shouldOrbit={true}
        orbitDuration="60s"
        shouldSpin={true}
        spinDuration="6s"
      >
        <StarIcon className="size-24 text-emerald-300/90" />
      </HeroOrbit>
     
    </div>
  )
};
