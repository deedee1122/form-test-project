import { UserDataState } from "../types/types";

const TextDisplay = ({ brand, color, reference }: UserDataState) => {
  return (
    <div className="my-6 text-center">
      <p className="text-2xl">
        I own a {color?.value} {brand?.value}
      </p>
      <p className="mt-2 text-sm text-slate-300">
        reference number is
        {reference?.value}
      </p>
    </div>
  );
};

export default TextDisplay;
