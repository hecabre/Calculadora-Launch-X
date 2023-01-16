import NumberButton from "./NumberButton";
import NumberScreen from "./NumberScreen";

function NumbersContainer() {
  const numbers = [
    "Del",
    "Clear",
    "√",
    "**",
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "/",
    0,
    "%",
    "*",
    "=",
  ];

  return (
    <main className="bg-[#7DAF9C] w-5/6 h-5/6 m-auto rounded-md">
      <NumberScreen />
      <div className="grid grid-cols-4 grid-rows-4 place-items-center h-5/6 gap-4 mx-3">
        {numbers.map((number) => (
          <NumberButton number={number} key={number} />
        ))};
      </div>
    </main>
  );
}

export default NumbersContainer;
