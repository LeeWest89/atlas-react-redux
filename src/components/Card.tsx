import { useDispatch } from "react-redux";
import { deleteCard } from "../slices/cardsSlice";
import DeleteCardButton from "./DeleteCardButton";
import {CSS} from '@dnd-kit/utilities';
import {useDraggable} from '@dnd-kit/core';

interface CardProps {
  card: {
    id: string;
    title: string;
    text: string;
  };
}

export default function Card({ card }: CardProps) {

  const dispatch = useDispatch();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  const handleDeleteCard = () => {
    dispatch(deleteCard(card.id));
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="card group/card m-3 flex min-h-24 w-full max-w-96 flex-col items-center rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>{card.title}</span>
        <DeleteCardButton onClick={handleDeleteCard} />
      </h5>
      <p className="mt-0 text-left">{card.text}</p>
    </div>
  );
};