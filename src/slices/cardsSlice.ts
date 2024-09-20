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

    clearBoard: (state) => {
      state.items = [];
    },

    moveCard: (state, action: PayloadAction<{ cardId: string; newListId: string }>) => {
      const { cardId, newListId } = action.payload;
      const card = state.items.find((item) => item.id === cardId);

      if (card) {
        card.listId = newListId;
      }
    },
  },
});

export const { createCard, deleteCard, clearBoard, moveCard } = cardSlice.actions;
export default cardSlice.reducer;