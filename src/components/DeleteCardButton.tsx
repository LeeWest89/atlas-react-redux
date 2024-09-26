import { useDispatch } from 'react-redux';
import { deleteCard } from '../slices/cardsSlice';
import DeleteCard from '../images/DeleteCard.svg';

interface DeleteCardProps {
  cardId: string;
  onHover: (isHovered: boolean) => void;
}

export default function DeleteCardButton({ cardId, onHover }: DeleteCardProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCard(cardId));
  };

  return (
    <button
      className="justify-center hidden w-[20px] group-hover/card:block h-[20px]"
      onClick={handleDelete}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <img src={DeleteCard} alt="Delete Card"></img>
    </button>
  );
};