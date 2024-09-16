import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

export default function List() {
  return (
    <div className="group/list flex flex-col items-center h-full min-w-96 max-w-[27.5rem] p-4">
      <DeleteListButton />
      <h3 className="justify-center">To Do</h3>
      <Card />
      <NewCardForm />
    </div>
  );
};