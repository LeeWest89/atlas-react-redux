import { useSelector } from "react-redux";
import { RootState } from "../store";
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { CardItem } from "../slices/cardsSlice";
import {useDroppable} from '@dnd-kit/core';

interface ListProps {
  listId: string;
  title: string;
}

export default function List({ listId, title }: ListProps) {
  const cards = useSelector((state: RootState) => state.cards.items.filter((card: CardItem) => card.listId ===listId).sort((a, b) => a.index - b.index));

  const { setNodeRef } = useDroppable({
    id: listId,
  });


  return (
    <div ref={setNodeRef} className="group/list flex flex-col items-center h-full min-w-96 max-w-[27.5rem] p-4">
      <DeleteListButton listId={listId} />
      <h3 className="justify-center">{title}</h3>
      {cards.map((card: CardItem) => (
        <Card key={card.id} card={card} />
      ))}
      <NewCardForm listId={listId} />
    </div>
  );
};