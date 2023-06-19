import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { resetSystem, sysmtemSlice, themeSwitch } from "./Slice/System";
import {
  userDataSlice,
  onChangeUserData,
  resetUserData,
} from "./Slice/UserData";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedSystemReducer = persistReducer(
  {
    key: "system Settings",
    storage,
  },
  sysmtemSlice.reducer
);

const persistedUserDataReducer = persistReducer(
  {
    key: "user Data",
    storage,
  },
  userDataSlice.reducer
);

export const store = configureStore({
  reducer: {
    system: persistedSystemReducer,
    userData: persistedUserDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: false,
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export {
  // system actions
  resetSystem,
  themeSwitch,

  // user data actions
  onChangeUserData,
  resetUserData,
};
