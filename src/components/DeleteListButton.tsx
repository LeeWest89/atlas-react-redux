import { useDispatch } from "react-redux";
import { deleteList } from "../slices/listsSlice";
import DeleteList from "../images/DeleteList.svg";

interface DeleteProps {
  listId: string;
}

export default function DeleteListButton({ listId }: DeleteProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteList(listId));
  };
  return (
    <button className="h-[30px] mt-[6px] group-hover/list:w-[30px]"
    onClick={handleDelete}
    >
      <img src={DeleteList} alt="Delete List"></img>
    </button>
  );
};