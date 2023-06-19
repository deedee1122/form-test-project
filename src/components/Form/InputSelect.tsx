import { FC } from "react";
import CreatableSelect from "react-select/creatable";
import { IOptions } from "../../types/types";
import { ThemeTypesEnum } from "../../types/enum";
import { ReactSelectTheme } from "./ReactSelectTheme/ReactSelectTheme";

interface iInputSelectProps {
  onChange: (e: any) => void;
  options: IOptions[];
  label: string;
  AppTheme: ThemeTypesEnum;
  value: IOptions;
  placeholder?: string;
}

const InputSelect: FC<iInputSelectProps> = ({
  label,
  onChange,
  options,
  AppTheme,
  value,
  placeholder,
}) => {
  return (
    <>
      <div className="my-3 text-xl">{label}</div>
      <CreatableSelect
        classNames={{
          menu: () => "dark:bg-slate-500",
          placeholder: () => "dark:text-slate-500",
        }}
        className="dark:text-white"
        placeholder={placeholder}
        isClearable
        options={options}
        onChange={onChange}
        name="shjbdc"
        theme={(theme) => ReactSelectTheme(theme, AppTheme)}
        value={value}
      />
    </>
  );
};

export default InputSelect;
