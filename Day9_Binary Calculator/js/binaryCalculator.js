const res = document.querySelector("#res");
const btns = document.querySelectorAll("button");

const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.floor(a / b)
};

function action(e) {
  let pressed = document.getElementById(e.target.id);
  if (pressed.id === "btnSum") res.innerHTML += "+";
  if (pressed.id === "btnSub") res.innerHTML += "-";
  if (pressed.id === "btnMul") res.innerHTML += "*";
  if (pressed.id === "btnDiv") res.innerHTML += "/";
  if (pressed.id === "btn0") res.innerHTML += "0";
  if (pressed.id === "btn1") res.innerHTML += "1";
  if (pressed.id === "btnClr") res.innerHTML = "";
  if (pressed.id === "btnEql") {
    // split on word boundaries (e.g.between digits and symbols)
    const [op1, operator, op2] = res.innerText.split(/\b/);
    // use parseInt (base 2) to read string as binary integer
    const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];
    // perform the desired operation then convert result into a string (base 2)
    res.innerText = Number(ops[operator](n1, n2)).toString(2);
  }
}

btns.forEach(btn => btn.addEventListener("click", action));
