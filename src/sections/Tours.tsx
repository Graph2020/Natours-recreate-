import type { JSX } from "react";
import FlipCard from "../components/FlipCard";
import { flipCards } from "../const";
import MainButton from "../components/MainButton";

const Tours = (): JSX.Element => {
  return (
    <section className="page-container center-elements flex-col">
      <h1 className="main-title">Most popular tours</h1>

      <div className="mb-20 flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
        {flipCards.map((card) => (
          <FlipCard key={`${card.title}-${card.subtitle}`} {...card} />
        ))}
      </div>

      <MainButton
        text="discover all tours"
        textColor="text-white "
        bgColor="bg-medium-green"
        padding="py-3 px-8"
        afterBgColor="after:bg-medium-green"
        fontWeight="font-bold"
      />
    </section>
  );
};

export default Tours;
