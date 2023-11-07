// Creating div 
const create_div = (rows, column) => {
    const container_div = document.querySelector("#container");
  container_div.style.setProperty("--grid-column", column);
  container_div.style.setProperty("--grid-row", rows);
  for (i = 0; i < rows * column; i++) {
    let div = document.createElement("div");
    container_div.appendChild(div).classList.add("item");
  }
};

const bg_filling = () => {
  let items = document.querySelectorAll(".item");
    items.forEach(item => item.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
    })) 

};

const draw = () => {
    create_div(16, 16);
    bg_filling();
}

draw();


 