import type { JSX } from "react";
import MainButton from "../components/MainButton";
import { MdTravelExplore } from "react-icons/md";

const Hero = (): JSX.Element => {
  return (
    <div
      id="image-gradient"
      className="center-elements relative mt-5 h-[90vh] w-full bg-[url('/img/hero.jpg')] bg-cover bg-center text-white uppercase"
    >
      <div className="main-gradient absolute z-0 h-full w-full"></div>

      <nav className="md: absolute top-3 left-0 flex h-12 w-full items-center justify-between p-4 sm:p-8">
        <MdTravelExplore className="size-12 md:size-16" />
      </nav>

      <div className="center-elements z-10 flex-col text-center text-white">
        <h1 className="hero-title">Outdoors</h1>
        <h3 className="font-main mb-10 text-lg tracking-widest whitespace-nowrap sm:text-2xl sm:tracking-[6px] lg:tracking-[10px]">
          Is where life happens
        </h3>
        <MainButton padding="px-6 py-3" text="Discover our tours" />
      </div>
    </div>
  );
};

export default Hero;
