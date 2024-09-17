import { useSelector } from "react-redux";
import { RootState } from "../store";
import List from "./List";
import { ListItem } from "../slices/listsSlice";

export default function Board() {
  const lists = useSelector((state: RootState) => state.list.items);
  return (
    <div className="flex h-screen w-screen overflow-x-scroll">
      <div className="flex flex-row rounded">
        {lists.map((list: ListItem) => (
          <List key={list.id} listId={list.id} title={list.title} />
        ))}
      </div>
    </div>
  );
};