import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import listReducer from "./slices/listsSlice";
import cardsReducer from "./slices/cardsSlice";

const store = configureStore({
  reducer: {
    list: listReducer,
    cards: cardsReducer,
  },
});

// These types are helpful for the typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;