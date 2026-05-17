import type { JSX } from "react";

interface ReviewProps {
  title: string;
  imgSrc: string;
  name: string;
}

const Review = ({ title, imgSrc, name }: ReviewProps): JSX.Element => {
  return (
    <div className="group w-72 bg-white/85 p-8 text-gray-500 sm:w-md sm:-skew-6">
      <div
        data-name={name}
        className="relative float-left m-3 size-36 overflow-hidden rounded-full [shape-outside:circle(50%)] after:absolute after:inset-x-0 after:-bottom-10 after:z-10 after:text-center after:text-base after:font-light after:text-white after:uppercase after:transition-all after:duration-500 after:content-[attr(data-name)] group-hover:after:bottom-1/2 group-hover:after:translate-y-1/2 sm:skew-6"
      >
        <img
          src={imgSrc}
          alt={name}
          className="h-full w-full scale-110 object-cover transition-all duration-300 group-hover:scale-100 group-hover:blur-xs"
        />
      </div>

      <div className="sm:skew-6">
        <h1 className="mb-1 font-medium uppercase">{title}</h1>
        <p className="md:w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          ipsum sapiente aspernatur libero repellat quis consequatur ducimus
          quam nisi exercitationem omnis earum qui.
        </p>
      </div>
    </div>
  );
};

export default Review;
