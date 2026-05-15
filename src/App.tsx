import type { JSX } from "react";

import Hero from "./sections/Hero";
import BurrgerButton from "./components/BurgerButton";
import About from "./sections/About";

const App = (): JSX.Element => {
  return (
    <div className="center-elements min-h-screen w-full flex-col gap-10 bg-green-200 p-2">
      <Hero />
      <BurrgerButton />
      <About />
    </div>
  );
};

export default App;
