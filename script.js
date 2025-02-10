const changeGridBtn = document.getElementById("change-grid")
const gridContainer = document.getElementById("gridContainer");
const containerWidth = gridContainer.offsetWidth;
const containerHeight = gridContainer.offsetHeight;
const initialNum = 16;

function produceGrid(quantity = initialNum) {
    gridContainer.innerHTML = "";
    for (let i = 1; i <= quantity ** 2; i++) {
        const div = document.createElement("div");
        div.style.width = containerWidth / quantity + "px";
        div.style.height = containerHeight / quantity + "px";
        div.style.border = "1px solid black";
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        })
        gridContainer.append(div);
    }
}

produceGrid();

changeGridBtn.addEventListener("click", () => {
    let gridNum = Number(prompt("How many grid do you want? (1-100)", ""));
    if  (isNaN(gridNum) || !(gridNum >= 1 && gridNum <= 100)) {
        alert("Please enter valid number.(1-100)")
        return;
    }
    produceGrid(gridNum);
})
