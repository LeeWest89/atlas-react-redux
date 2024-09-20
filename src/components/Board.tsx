import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import List from "./List";
import { ListItem } from "../slices/listsSlice";
import { moveCard } from "../slices/cardsSlice";
import { DndContext } from "@dnd-kit/core";


export default function Board() {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.list.items);

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (over) {
      const newListId = over.id;
      const cardId = active.id;

      dispatch(moveCard({ cardId, newListId }));
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen w-screen overflow-x-scroll">
        <div className="flex flex-row rounded">
          {lists.map((list: ListItem) => (
            <List key={list.id} listId={list.id} title={list.title} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};