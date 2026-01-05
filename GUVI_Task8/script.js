const main = document.createElement("div");
main.className = "d-flex flex-column align-items-center justify-content-center";
main.style.minHeight = "100vh";

const title = document.createElement("h1");
title.id = "title";
title.className = "mb-1 text-center";
title.innerText = "DOM Calculator";

const description = document.createElement("p");
description.id = "description";
description.className = "text-center text-muted mb-4";
description.innerText =
  "A simple calculator built using DOM manipulation and keyboard events.";

const calculator = document.createElement("div");
calculator.className = "calculator p-3";

const result = document.createElement("input");
result.id = "result";
result.type = "text";
result.readOnly = true;
result.value = "0";
result.className = "form-control mb-3 text-end";

const buttons = [
  { text: "C", id: "clear" },
  { text: "<-", id: "0<-" },
  { text: "%", id: "modulus", value: "%" },
  { text: "X", id: "multiply", value: "*" },

  { text: "7", id: "7" },
  { text: "8", id: "8" },
  { text: "9", id: "9" },
  { text: "/", id: "divide", value: "/" },
  

  { text: "4", id: "4" },
  { text: "5", id: "5" },
  { text: "6", id: "6" },
  { text: "-", id: "subtract", value: "-" },
  

  { text: "1", id: "1" },
  { text: "2", id: "2" },
  { text: "3", id: "3" },
  { text: "+", id: "add", value: "+" },

  { text: "0", id: "0" },
  { text: "00", id: "00" },
  { text: "=", id: "equal" }
];

const grid = document.createElement("div");
grid.className = "row g-2";

buttons.forEach(btn => {
  const col = document.createElement("div");
  col.className = "col-3";

  const button = document.createElement("button");
  button.className = "btn btn-light w-100";
  button.innerText = btn.text;
  button.id = btn.id;

  button.addEventListener("click", () => handleInput(btn));

  col.appendChild(button);
  grid.appendChild(col);
});

calculator.append(result, grid);
main.append(title, description, calculator);
document.body.appendChild(main);

let expression = "";

function handleInput(btn) {
  if (btn.id === "clear") {
    expression = "";
  } else if (btn.id === "equal") {
    calculate();
    return;
  } else {
    expression += btn.value || btn.text;
  }
  updateDisplay();
}

function updateDisplay() {
  result.value = expression || "0";
}

function calculate() {
  try {
    expression = eval(expression).toString();
  } catch {
    expression = "Error";
  }
  updateDisplay();
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (["Shift", "Alt", "Control"].includes(key)) return;

  if (/^[0-9]$/.test(key)) {
    expression += key;
  } else if (["+", "-", "*", "/", "%"].includes(key)) {
    expression += key;
  } else if (key === "Backspace") {
    expression = expression.slice(0, -1);
  } else if (key === "Enter" || key === "=") {
    calculate();
    return;
  } else if (key.toLowerCase() === "c") {
    expression = "";
  } else {
    alert("Only numbers are allowed");
    return;
  }

  updateDisplay();
});
