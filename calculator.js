let arr = [];
let resultScreen = document.getElementById("result");
resultScreen.innerHTML = "";
let btnResult = document.getElementById("calculate");

document.addEventListener("keydown", function (event) {
  let checkNum = event.code;

  if (
    checkNum.startsWith("Digit") ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/" ||
    event.key == "."
  ) {
    arr.push(event.key);
    resultScreen.innerHTML += event.key;
  }
  if (event.key == "Enter") {
    calculate();
  }
});

function insert(num) {
  arr.push(num);
  resultScreen.innerHTML += num;
}

function calculate() {
  const res = eval(arr.toLocaleString().replaceAll(",", ""));
  resultScreen.innerHTML = res;
  arr = [res];
}

function clearScreen() {
  arr = [];
  resultScreen.innerHTML = "0";
}

function delnum() {
  let exp = document.getElementById("result").textContent;
  arr.pop();
  resultScreen.innerHTML = exp.slice(0, -1);
}

