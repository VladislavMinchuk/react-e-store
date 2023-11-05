import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/count.slice';
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    // combineReducers
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;