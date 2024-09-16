import List from "./List";

export default function Board() {
  return (
    <div className="flex h-screen w-screen overflow-x-scroll">
        <div className="flex flex-row rounded">
          <List />
          <List />
          {/* <List />
          <List />
          <List />
          <List /> */}
        </div>
    </div>
  );
};