export default function NewCardForm() {
  return (
    <div className="group/new-card m-3 flex h-44 w-full max-w-96 justify-center">
      <form className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex">
        <input className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none" type="text" placeholder="Title" name="title"></input>
        <textarea className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none" placeholder="Description" name="description"></textarea>
        <div className="buttons w-full">
          <button type="submit" className="w-full p-4">Save</button>
        </div>
      </form>
    </div>
  );
};