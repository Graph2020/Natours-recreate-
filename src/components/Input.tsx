import type { JSX } from "react";

interface InputProps {
  inputType: string;
  id: string;
  text?: string;
}

const Input = ({ inputType, id, text = "" }: InputProps): JSX.Element => {
  const firstLetterUpper =
    inputType.charAt(0).toUpperCase() + inputType.slice(1);

  return (
    <div className="relative w-full md:w-3/4">
      <input
        id={id}
        className="book-input peer"
        type={inputType}
        required
        placeholder={text ? text : firstLetterUpper}
      />
      <label
        htmlFor={id}
        className="absolute top-full left-3 mt-1 text-xs text-gray-500 opacity-0 transition-all duration-300 peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:opacity-100"
      >
        {text ? text : firstLetterUpper}
      </label>
    </div>
  );
};

export default Input;
