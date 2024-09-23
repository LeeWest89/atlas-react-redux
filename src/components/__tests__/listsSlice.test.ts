// Unit test for addList, deleteList, addCard, and clearBoard
import { listSlice, addList, addCard, deleteList, clearBoard } from "../../slices/listsSlice";
import { expect, test } from "vitest";

// Initial state
const initialState = { items: [] };

// addList Test
test("addList should add a list", () => {
  const action = addList({ title: "List One" });
  const state = listSlice.reducer(initialState, action);
  
  expect(state).toEqual({
    items: [{ id: expect.any(String), title: "List One", cardId: [] }],
  });
});

test("addList should add 3 lists", () => {
  let state = listSlice.reducer(initialState, addList({ title: "List One" }));
  state = listSlice.reducer(state, addList({ title: "List Two" }));
  state = listSlice.reducer(state, addList({ title: "List Three" }));

  expect(state).toEqual({
    items: [
      { id: expect.any(String), title: "List One", cardId: [] },
      { id: expect.any(String), title: "List Two", cardId: [] },
      { id: expect.any(String), title: "List Three", cardId: [] },
    ],
  });
});

// deleteList Test
test("deleteList should delete a list", () => {
  const intialState = { items: [{ id: "1", title: "List one", cardId: [] }] };
  const action = deleteList("1");
  const state = listSlice.reducer(intialState, action);
  
  expect(state).toEqual({ items: [] });
});

test("deleteList should delete the list with id of 1 only", () => {
  const intialState = {
    items: [
      { id: "1", title: "List one", cardId: [] },
      { id: "2", title: "List two", cardId: [] },
    ],
  };
  const action = deleteList("1");
  const state = listSlice.reducer(intialState, action);

  expect(state).toEqual({
    items: [{ id: "2", title: "List two", cardId: [] }],
  });
});

// addCard Test
test("addCard should add a card to the list", () => {
  const intialState = { items: [{ id: "1", title: "List one", cardId: [] }] };
  const action = addCard({ lists: "1", cards: "Card One" });
  const state = listSlice.reducer(intialState, action);
  
  expect(state).toEqual({
    items: [{ id: "1", title: "List one", cardId: ["Card One"] }],
  });
});

// clearBoard Test
test("clearBoard should remove all lists", () => {
  const intialState = {
    items: [
      { id: "1", title: "List one", cardId: [] },
      { id: "2", title: "List two", cardId: [] },
    ],
  };
  const action = clearBoard();
  const state = listSlice.reducer(intialState, action);
  
  expect(state).toEqual({ items: [] });
});
