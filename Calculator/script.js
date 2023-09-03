let expression = "";

function appendValue(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[\d+\-*/]|Enter/.test(key)) {
    event.preventDefault();
    if (key === "Enter") {
      calculate();
    } else {
      appendValue(key);
    }
  }
});
