import DeleteList from "../images/DeleteList.svg";

export default function DeleteListButton() {
  return (
    <button className="h-[30px] mt-[6px] group-hover/list:w-[30px]"
    // onclick="alert('Delete list')"
    >
      <img src={DeleteList} alt="Delete List"></img>
    </button>
  );
};