import type { JSX } from "react";

const RadioInput = ({
  id,
  text,
  name = "options",
}: {
  id: string;
  text: string;
  name?: string;
}): JSX.Element => {
  return (
    <div className="center-elements flex gap-1">
      <input type="radio" id={id} name={name} className="peer hidden" />

      <label
        htmlFor={id}
        className="center-elements size-8 cursor-pointer rounded-full border-6 border-emerald-500 peer-checked:[&_span]:opacity-100"
      >
        <span className="block size-4 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-300"></span>
      </label>

      <p className="ml-2 text-sm text-gray-500">{text}</p>
    </div>
  );
};

export default RadioInput;
