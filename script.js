let boxes = document.querySelectorAll(".box");

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let zerosTurn = true;

const disableButton = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableButton = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (zerosTurn) {
      box.innerHTML = "O";
      zerosTurn = false;
    } else {
      box.innerHTML = "X";
      zerosTurn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let ptrn1 = boxes[pattern[0]].innerText;
    let ptrn2 = boxes[pattern[1]].innerText;
    let ptrn3 = boxes[pattern[2]].innerText;
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(ptrn1, ptrn2, ptrn3);

    if (ptrn1 != "" && ptrn2 != "" && ptrn3 != "") {
      if (ptrn1 === ptrn2 && ptrn2 === ptrn3) {
        console.log(`${ptrn1} is winner`);
        declearWInner(ptrn1);
      }
    }
  }
  
};

declearWInner = (winner) => {
  const win = document.querySelector(".Winnner");
  win.innerHTML =
    '<i class="fa-solid fa-crown fa-xl" style="color: rgb(255, 212, 59);"></i>' +
    `${winner} is winner !`;
  win.style.display = "block";
  let over = document.querySelector(".game");
  over.classList.add("hide");
  let head = document.querySelector(".top");
  head.classList.add("hide");
  disableButton();
};
const next = document.querySelector(".reset");

next.addEventListener("click", () => {
  resetGame();
});

const resetGame = () => {
  zerosTurn = true;
  enableButton();
  let over = document.querySelector(".game");
  over.classList.remove("hide");
  const win = document.querySelector(".Winnner");
  win.innerHTML =
    '<i class="fa-solid fa-crown fa-xl" style="color: rgb(255, 212, 59);"></i>';
  win.style.display = "none";
  let head = document.querySelector(".top");
  head.classList.remove("hide");
};
