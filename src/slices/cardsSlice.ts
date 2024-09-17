import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface CardItem {
  id: string;
  listId: string;
  title: string;
  text: string;
}

interface Cards {
  items: CardItem[];
}

const initialState: Cards = {
  items: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createCard: (state, action: PayloadAction<{ listId: string; title: string; text: string; }>) => {
      const newCard: CardItem = {
        id: nanoid(),
        listId: action.payload.listId,
        title: action.payload.title,
        text: action.payload.text,
      };
      state.items.push(newCard);
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((card) => card.id !== action.payload);
    },
  },
});

export const { createCard, deleteCard } =cardSlice.actions;
export default cardSlice.reducer;