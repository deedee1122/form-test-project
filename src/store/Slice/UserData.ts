import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserDataState } from "../../types/types";

export const initialState: UserDataState = {
  brand: {
    value: "",
    label: "Select or Write Car Brand",
  },
  color: {
    value: "",
    label: "Select or Write Car Color",
  },
  reference: {
    value: "",
    label: "Write Reference",
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    onChangeUserData: (
      state: UserDataState,
      action: PayloadAction<UserDataState>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetUserData: () => initialState,
  },
});

export const { onChangeUserData, resetUserData } = userDataSlice.actions;
