import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import ThemeSwitch from "../components/Switch/ThemeSwitch";
import { themeSwitch, onChangeUserData, resetUserData } from "../store/store";
import { ThemeTypesEnum } from "../types/enum";
import InputSelect from "../components/Form/InputSelect";
import { CarBrandsDB, ColorOptionsDB, sampleReferenceDB } from "../database";
import Button from "../components/Button/Button";
import TextDisplay from "../components/TextDisplay";

const Home = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.system.mode);
  const userData = useSelector((state: RootState) => state.userData);

  console.log(userData);

  const handleChangeTheme = () =>
    dispatch(
      themeSwitch(
        theme === ThemeTypesEnum.LIGHT
          ? ThemeTypesEnum.DARK
          : ThemeTypesEnum.LIGHT
      )
    );

  const resetAllData = () => dispatch(resetUserData());

  return (
    <div>
      <ThemeSwitch theme={theme} onClick={handleChangeTheme} />
      <InputSelect
        label="Select or Write your car brand"
        onChange={(e) => dispatch(onChangeUserData({ ...userData, brand: e }))}
        placeholder="Select or Write your car brand"
        options={CarBrandsDB}
        AppTheme={theme}
        value={userData?.brand}
      />
      {userData?.brand?.value && (
        <InputSelect
          label="Select or Write Car color"
          onChange={(e) =>
            dispatch(onChangeUserData({ ...userData, color: e }))
          }
          placeholder="Select or Write Car color"
          options={ColorOptionsDB}
          AppTheme={theme}
          value={userData?.color}
        />
      )}

      {userData?.color?.value && (
        <InputSelect
          label="Reference"
          onChange={(e) =>
            dispatch(onChangeUserData({ ...userData, reference: e }))
          }
          placeholder="Write or select a Reference"
          options={sampleReferenceDB}
          AppTheme={theme}
          value={userData?.reference}
        />
      )}

      {userData?.reference?.value && <TextDisplay {...userData} />}

      {userData?.brand?.value && (
        <div className="flex justify-center my-6">
          <Button label="Reset" onClick={resetAllData} />
        </div>
      )}
    </div>
  );
};

export default Home;
