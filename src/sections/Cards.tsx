import type { JSX } from "react";
import { cards } from "../const";
import ModelCard from "../components/ModelCard";

const Cards = (): JSX.Element => {
  const displayCards = cards.map((card) => (
    <div
      key={card.id}
      className="flex min-h-64 w-full flex-col items-center justify-center gap-6 rounded-sm bg-white/80 p-8 text-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 sm:w-72"
    >
      <ModelCard
        scale={card.scale}
        model={card.model}
        position={card.position}
      />
      <h2 className="font-main text-base font-bold text-gray-500 uppercase">
        {card.title}
      </h2>
      <p className="max-w-64 leading-7 text-gray-500">{card.description}</p>
    </div>
  ));

  return (
    <section
      id="cards-clip"
      className="relative w-full bg-[url('/img/nat-4.jpg')] bg-cover bg-center px-8 py-36 sm:px-10 sm:py-40"
    >
      <div className="main-gradient absolute inset-0 h-full w-full"></div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-14 lg:flex-row">
        {displayCards}
      </div>
    </section>
  );
};

export default Cards;
