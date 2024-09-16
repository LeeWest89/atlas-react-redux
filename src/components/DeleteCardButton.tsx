import DeleteCard from "../images/DeleteCard.svg";

export default function DeleteCardButton() {
  return (
    <button
      className="justify-center hidden w-[20px] group-hover/card:block h-[20px]"
      // onclick="alert('Delete card')"
    >
      <img src={DeleteCard} alt="Delete Card"></img>
    </button>
  );
};