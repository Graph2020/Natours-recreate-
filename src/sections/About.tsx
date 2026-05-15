import type { JSX } from "react";

import { MdArrowRightAlt } from "react-icons/md";
import { images } from "../const";
const About = (): JSX.Element => {
  return (
    <section className="page-container center-elements flex-col gap-6 sm:-mt-10">
      <h1 className="main-title mb-10">
        Exciting tours for adventurous people
      </h1>

      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-col gap-6 sm:w-1/2">
          <h3 className="mini-title">
            You're going to fall in love with nature
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>
          <h3 className="mini-title">
            Live adventures like you never have before
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>
          <a className="main-link center-elements w-fit">
            Learn more{" "}
            <span>
              <MdArrowRightAlt className="mt-0.5 ml-1" />
            </span>{" "}
          </a>
        </div>

        <div className="group relative h-64 w-full md:h-96">
          {images.map((img, index) => (
            <picture
              key={index}
              className={`${img.classes} hover:shadow-3xl absolute w-1/2 rounded-xl shadow-2xl outline-offset-20 transition-all duration-300 group-hover:scale-95 hover:z-50 hover:scale-110 hover:outline-8 hover:outline-emerald-500`}
            >
              <source media="(max-width: 767px)" srcSet={`${img.source}.jpg`} />
              <img
                className="rounded-xl"
                src={`${img.source}-large.jpg`}
                alt={img.alt}
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
