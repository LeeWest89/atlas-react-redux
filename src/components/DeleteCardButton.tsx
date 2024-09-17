import DeleteCard from "../images/DeleteCard.svg";

interface DeleteCardProps {
  onClick: () => void;
}

export default function DeleteCardButton({ onClick }: DeleteCardProps) {
  return (
    <button
      className="justify-center hidden w-[20px] group-hover/card:block h-[20px]"
      onClick={onClick}
    >
      <img src={DeleteCard} alt="Delete Card"></img>
    </button>
  );
};