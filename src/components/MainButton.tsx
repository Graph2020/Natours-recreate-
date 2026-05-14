import type { JSX } from "react";

interface MainButtonProps {
  textColor?: string;
  bgColor?: string;
  padding: string;
}

const MainButton = ({
  textColor = "text-black",
  bgColor = "bg-white",
  padding,
}: MainButtonProps): JSX.Element => {
  return (
    <button
      className={`relative ${padding} ${textColor} w-fit cursor-pointer rounded-2xl text-lg uppercase ${bgColor} px-8 py-3 text-black shadow-lg transition-all duration-300 after:absolute after:inset-0 after:-z-10 after:scale-100 after:rounded-2xl after:bg-white after:opacity-50 after:transition-all after:duration-500 after:content-[''] hover:translate-y-1 hover:after:scale-150 hover:after:opacity-0 active:translate-y-0.5 active:shadow-none`}
    >
      MainButton
    </button>
  );
};

export default MainButton;
