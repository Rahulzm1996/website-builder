import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import formBuilderReducer from "./formBuilderSlice";

// Configures the Redux store with the formBuilder reducer
export const store = configureStore({
  reducer: {
    /**
     * Adds the formBuilder reducer to the store.
     * Manages state related to form-building functionality.
     */
    formBuilder: formBuilderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type FormBuilderState = ReturnType<typeof store.getState>;

// Infers the `AppDispatch` type from the store’s dispatch method
export type FormBuilderDispatch = typeof store.dispatch;

// Custom hook for selecting state from the formBuilder store with TypeScript support
export const useFormBuilderSelector: TypedUseSelectorHook<FormBuilderState> =
  useSelector;

// Custom hook for dispatching actions to the formBuilder store with TypeScript support
export const useFormBuilderDispatch = () => useDispatch<FormBuilderDispatch>();
