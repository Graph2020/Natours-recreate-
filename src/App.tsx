import type { JSX } from "react";

import Hero from "./sections/Hero";
import BurrgerButton from "./components/BurgerButton";
import About from "./sections/About";
import Cards from "./sections/Cards";
import Tours from "./sections/Tours";

const App = (): JSX.Element => {
  return (
    <div className="center-elements min-h-screen w-full flex-col bg-green-200 p-2">
      <Hero />
      <BurrgerButton />
      <About />
      <Cards />
      <Tours />
    </div>
  );
};

export default App;
