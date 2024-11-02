import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import formBuilderReducer from "./formBuilderSlice";

export const store = configureStore({
  reducer: {
    formBuilder: formBuilderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type FormBuilderState = ReturnType<typeof store.getState>;
export type FormBuilderDispatch = typeof store.dispatch;
export const useFormBuilderSelector: TypedUseSelectorHook<FormBuilderState> =
  useSelector;
export const useFormBuilderDispatch = () => useDispatch<FormBuilderDispatch>();
