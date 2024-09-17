import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface ListItem {
  id: string;
  title: string;
  cardId: string[];
}

interface ListsState {
  items: ListItem[];
}

const initialState: ListsState = {
  items: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<{ title: string }>) => {
      const newList = {
        id: nanoid(),
        title: action.payload.title,
        cardId: [],
      };
      state.items.push(newList);
    },

    deleteList: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((list) => list.id !== action.payload);
    },

    addCard: (state, action: PayloadAction<{ lists: string; cards: string }>) => {
      const { lists, cards } = action.payload;
      const list = state.items.find((list) => list.id === lists);
      if (list) {
        list.cardId.push(cards);
      }
    },

    clearBoard: (state) => {
      state.items = [];
    },
  },
});

export const { addList, deleteList, addCard, clearBoard } = listSlice.actions;

export default listSlice.reducer;