let container_div = document.getElementById("container");
let btn = document.getElementById("btn");

btn.addEventListener("click", click);

function click() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.style.backgroundColor = "white";
  });
  inputUser();
}

function inputUser() {
  while (container_div.firstChild) {
    container_div.removeChild(container_div.firstChild);
  }
  let inputUser = prompt(`choose number between 2 to 100`);
  validateInput(inputUser);
}

function validateInput(input) {
  if (input === "" || input > 64 || input < 2 || isNaN(input)) {
    return alert(`invalid number.`);
  } else {
    create_div(input, input);
    bg_filling();
  }
}

function create_div(row, column) {
  container_div.style.setProperty("--grid-row", row);
  container_div.style.setProperty("--grid-column", column);
  for (i = 0; i < row * column; i++) {
    let div = document.createElement("div");
    div.classList.add("item");
    // div.innerText = "."
    // div.style.border = `1px solid black`
    container_div.appendChild(div);
  }
}

function bg_filling() {
  let items = document.querySelectorAll(".item");
  items.forEach((event) =>
    event.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    })
  );
}

window.onload = () => {
  create_div(16, 16);
  bg_filling();
};
