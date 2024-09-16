import DeleteListButton from "./DeleteListButton";
import Card from "./Card";

export default function List() {
  return (
    <div className="group/list flex flex-col items-center h-full min-w-96 max-w-[27.5rem] ml-4 p-4">
      <DeleteListButton />
      <h3 className="justify-center">To Do</h3>
      <Card />
    </div>
  );
};