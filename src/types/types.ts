import { ThemeTypesEnum } from "./enum";

export type TailwindThemeType = ThemeTypesEnum.DARK | ThemeTypesEnum.LIGHT;

export interface UserDataState {
  brand: IOptions;
  color: IOptions;
  reference: IOptions;
}

export interface IOptions {
  value: string;
  label: string;
}
