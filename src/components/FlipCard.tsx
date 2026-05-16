import type { JSX } from "react";
import MainButton from "./MainButton";

import type { FlipCardProps } from "../const";

const FlipCard = (props: FlipCardProps): JSX.Element => {
  return (
    <div className="group h-100 w-72 perspective-distant lg:h-110 lg:w-96">
      <div className="relative h-full w-full duration-700 transform-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 flex flex-col items-center overflow-hidden rounded-xl bg-white text-gray-400 shadow-xl backface-hidden">
          <div className="relative h-1/2 w-full [clip-path:polygon(0_0,100%_0,100%_90%,0%_100%)]">
            <img
              src={props.imageSrc}
              alt="nature"
              className="h-full w-full object-cover"
            />
            <div
              className={`absolute inset-0 rounded-t-xl ${props.gradient} `}
            ></div>
            <h2 className="font-main absolute right-1 bottom-5 z-10 p-1 text-3xl leading-8 text-white">
              <span className={`${props.gradient}`}>{props.title}</span> <br />{" "}
              <span className={`${props.gradient}`}>{props.subtitle}</span>
            </h2>
          </div>
          <div className="flex h-full flex-col items-center justify-around text-lg">
            <p className="w-full border-b text-center">{props.days}</p>
            <p className="w-full border-b text-center">
              {props.amountOfPeople}
            </p>
            <p className="w-full border-b text-center">{props.difficulty}</p>
          </div>
        </div>

        {/*back card*/}
        <div
          className={`${props.gradient} center-elements absolute inset-0 rotate-y-180 flex-col overflow-hidden rounded-xl text-center text-white shadow-xl backface-hidden`}
        >
          <p className="mb-5 text-base font-bold text-white uppercase">Only</p>
          <h1 className="font-main mb-20 text-5xl font-light">{props.price}</h1>
          <MainButton text="Book now!" padding="py-2 px-6" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
