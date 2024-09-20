import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface CardItem {
  id: string;
  listId: string;
  title: string;
  text: string;
  index: number;
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
    createCard: (state, action: PayloadAction<{ listId: string; title: string; text: string; index: number; }>) => {
      const newCard: CardItem = {
        id: nanoid(),
        listId: action.payload.listId,
        title: action.payload.title,
        text: action.payload.text,
        index: action.payload.index,
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
        if (card.listId === newListId) {
          return;
        }

        state.items = state.items.filter(item => item.id !== cardId);

        const newIndex = state.items.filter(item => item.listId === newListId).length;
        card.listId = newListId;
        card.index = newIndex;
        state.items.push(card);
      }
    },
  },
});

export const { createCard, deleteCard, clearBoard, moveCard } = cardSlice.actions;
export default cardSlice.reducer;