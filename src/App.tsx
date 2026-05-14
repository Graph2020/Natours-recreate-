import React from "react";
import type { JSX } from "react";
import MainButton from "./components/MainButton";

const App = (): JSX.Element => {
  return (
    <div className="center-elements min-h-screen w-full bg-green-200 text-2xl text-yellow-500">
      <MainButton padding="px-4" bgColor="bg-yellow-500" />
    </div>
  );
};

export default App;
