import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../slices/cardsSlice";

interface NewCardFormProps {
  listId: string;
}

export default function NewCardForm({ listId }: NewCardFormProps) {
  const[title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleCardSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() && text.trim()) {
      dispatch(createCard({ listId, title, text }));
      setTitle('');
      setText('');
    }
  };

  return (
    <div className="group/new-card m-3 flex h-44 w-full max-w-96 justify-center">
      <form className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex" onSubmit={handleCardSubmit}>
        <input className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <textarea className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none" placeholder="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <div className="buttons w-full">
          <button type="submit" className="w-full p-4">Save</button>
        </div>
      </form>
    </div>
  );
};