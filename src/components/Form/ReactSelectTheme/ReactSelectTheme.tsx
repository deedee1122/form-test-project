import { ThemeTypesEnum } from "../../../types/enum";

export const ReactSelectTheme = (theme: any, appTheme: ThemeTypesEnum) => {
  const isDarkTheme = appTheme === ThemeTypesEnum.DARK;
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: isDarkTheme ? "#0f172a" : "#064e3b", // 900
      primary75: isDarkTheme ? "#1e293b" : "#065f46", // 800
      primary50: isDarkTheme ? "#475569" : "#10b981", // 600
      primary25: isDarkTheme ? "#475569" : "#a7f3d0", // 300
    },
  };
};
