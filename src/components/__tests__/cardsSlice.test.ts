//  Unit Test for createCard, deleteCard, and clearBoard
import {cardSlice, clearBoard, createCard, deleteCard } from "../../slices/cardsSlice";
import { expect, test } from "vitest";

// createCard Test
test("creates card correctly", () => {
  const initialState = { items: [] };
  const action = createCard(
    { listId: "1", title: "Card One", text: "Text of card one", index: 0 },
  );
  const state = cardSlice.reducer(initialState, action);

  expect(state).toEqual({
    items: [{ id: expect.any(String), listId: "1", title: "Card One", text: "Text of card one", index: 0 }],
  });
});

test("creates cards correctly on multiple lists", () => {
  const initialState = { items: [] };
  let state = cardSlice.reducer(initialState, createCard(
    { listId: "1", title: "Card One", text: "Text of card one", index: 0 },
  ));

  expect(state).toEqual({
    items: [{ id: expect.any(String), listId: "1", title: "Card One", text: "Text of card one", index: 0 }],
  });

  state = cardSlice.reducer(state, createCard(
    {listId: "2", title: "Card Two", text: "Text of card two", index: 0 },
  ));

  expect(state).toEqual({
    items: [
      { id: expect.any(String), listId: "1", title: "Card One", text: "Text of card one", index: 0 },
      { id: expect.any(String), listId: "2", title: "Card Two", text: "Text of card two", index: 0 },
    ],
  });

  state = cardSlice.reducer(state, createCard(
    { listId: "3", title: "Card Three", text: "Text of card three", index: 0 }
  ));

  expect(state).toEqual({
    items: [
      { id: expect.any(String), listId: "1", title: "Card One", text: "Text of card one", index: 0 },
      { id: expect.any(String), listId: "2", title: "Card Two", text: "Text of card two", index: 0 },
      { id: expect.any(String), listId: "3", title: "Card Three", text: "Text of card three", index: 0 },
    ],
  });
});

// deleteCard Test
test("test if card is deleted correctly", () => {
  const initialState = {
    items: [{
      id: "card 1", listId: "1", title: "Card One", text: "Text of card one", index: 0 },
    ],
  };

  const action = deleteCard("card 1");
  const state = cardSlice.reducer(initialState, action);

  expect(state).toEqual({ items: [] });
});

test("test if card is deleted correctly if there is more than one card", () => {
  const initialState = {
    items: [
      { id: "card 1", listId: "1", title: "Card One", text: "Text of card one", index: 0 },
      { id: "card 2", listId: "1", title: "Card Two", text: "Text of card two", index: 1 },
      { id: "card 3", listId: "1", title: "Card Three", text: "Text of card three", index: 2 },
    ],
  };

  let state = cardSlice.reducer(initialState, deleteCard("card 1"));

  expect(state).toEqual({
    items: [
      { id: "card 2", listId: "1", title: "Card Two", text: "Text of card two", index: 1 },
      { id: "card 3", listId: "1", title: "Card Three", text: "Text of card three", index: 2 },
    ],
  });

  state = cardSlice.reducer(state, deleteCard("card 2"));

  expect(state).toEqual({
    items: [{ id: "card 3", listId: "1", title: "Card Three", text: "Text of card three", index: 2 }],
  });
});

// clearBoard Test
test("clearBoard should remove all list and cards", () => {
  const initialState = {
    items: [
      { id: "card 1", listId: "1", title: "Card One", text: "Text of card one", index: 0 },
      { id: "card 2", listId: "1", title: "Card Two", text: "Text of card two", index: 1 },
      { id: "card 3", listId: "2", title: "Card Three", text: "Text of card three", index: 0 },
    ],
  };
  const action = clearBoard();
  const state = cardSlice.reducer(initialState, action);

  expect(state).toEqual({ items: [] });
});
