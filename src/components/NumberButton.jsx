
function writingNumbers(e) {
  const screenInput = document.getElementById("screen");
  screenInput.textContent += e.toString();
}

function gettingOperations(e) {
  const screenInput = document.getElementById("screen");
  const resultInput = document.getElementById("result");
  let result = screenInput.textContent;

  if (e === "Clear") {
    clearScreen();
  } else if (e === "=") {
    calculateResult();
  } else if (e.length > 2) {
    removeLastCharacter();
  } else {
    addToScreen(e);
  }

  function clearScreen() {
    screenInput.innerHTML = "";
    resultInput.innerHTML = "";
  }

  function calculateResult() {
    try {
      try{
        resultInput.innerHTML = eval(result);
      }
      catch {
        calcuteSquare();
      }
    } catch {
      resultInput.innerHTML = "SINTAX ERROR";
    }
  }

  function removeLastCharacter() {
    screenInput.innerHTML = result.substring(0, result.length - 1);
  }

  function addToScreen(value) {
    screenInput.innerHTML += value;
  }

  function calcuteSquare(){
    resultInput.innerHTML = Math.sqrt(result.split("√")[1]);
  }
}

function NumberButton({ number }) {
  return (
    <button
      key={number}
      onClick={() =>
        Number.isInteger(number)
          ? writingNumbers(number)
          : gettingOperations(number)
      }
      className={Number.isInteger(number) ? numberStyles : signStyles}
    >
      {number}
    </button>
  );
}

let signStyles =
  "flex items-center justify-center p-10 h-12 w-3/4 bg-[#5B4B49] text-lg hover:scale-110 ease-in duration-300 text-zinc-50 rounded-lg";

let numberStyles =
  "flex p-10 h-12 w-3/4 bg-[#9DC969] text-2xl hover:bg-[#5B4B49] hover:scale-110 ease-in duration-300 text-zinc-50 rounded-lg justify-center";

export default NumberButton;
