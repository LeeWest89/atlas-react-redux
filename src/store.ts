import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import listReducer from "./slices/listsSlice";
import cardsReducer from "./slices/cardsSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const listsPersistConfig = {
  key: 'lists',
  storage,
};

const cardsPersistConfig = {
  key: 'cards',
  storage,
};

const persistedListReducer = persistReducer(listsPersistConfig, listReducer);
const persistedCardsReducer = persistReducer(cardsPersistConfig, cardsReducer);

const store = configureStore({
  reducer: {
    list: persistedListReducer,
    cards: persistedCardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;