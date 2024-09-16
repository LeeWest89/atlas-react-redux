import DeleteCardButton from "./DeleteCardButton";

export default function Card() {
  return (
    <div className="card group/card m-3 flex min-h-24 w-full max-w-96 flex-col items-center rounded bg-off-white-light px-4 py-2 text-blue">
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>Lorem ipsum dolor</span>
        <DeleteCardButton />
      </h5>
      <p className="mt-0 text-left">
      Sed viverra, diam eu facilisis bibendum, ante orci placerat quam
      </p>
    </div>
  );
};