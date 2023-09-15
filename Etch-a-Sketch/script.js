
//elements
const slider = document.getElementById("slider");
const container = document.getElementById("container");
const clearButton = document.getElementById("reset");
const darkenButton = document.getElementById("darken");
const rainbowButton = document.getElementById("rainbow");
let darkenBox = true;
let randomlyColorBox = false;

//initilazation and listeners
let numberOfSquares = getNumberOfSquares();
container.appendChild(BoxContainer(numberOfSquares));
slider.addEventListener("input", () => {
    container.removeChild(container.firstChild);
    let numberOfSquares = getNumberOfSquares();
    container.appendChild(BoxContainer(numberOfSquares));
})
darkenButton.addEventListener("click", () => {
    darkenBox = true;
    randomlyColorBox = false;
})
rainbowButton.addEventListener("click", () => {
    darkenBox = false;
    randomlyColorBox = true;
    console.log(randomlyColorBox)
})
clearButton.addEventListener("click", () => {
    const boxes = container.childNodes[0];
    let box;
    for (i = 0; i < boxes.childNodes.length; i++) {
        box=boxes.childNodes[i];
        box.style.backgroundColor = "white";
        box.style.opacity = 1;
    }
});
//functions
function getNumberOfSquares() {
    let num = slider.value;
    return num;
}
function BoxContainer(numberOfSquares) {
    let boxContainer = document.createElement("div");
    boxContainer.className = "box-container";
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        boxContainer.appendChild(Box(numberOfSquares));
    }
    return boxContainer;
}
function Box(numberOfSquares) {
    let box = document.createElement("div");
    box.className = "box";
    box.style.opacity = 1;
    box.style.width = (1 / numberOfSquares) * 100 + "%";
    box.style.height = (1 / numberOfSquares) * 100 + "%";
    box.addEventListener("mouseenter", () => {
        if (darkenBox) {
            darken(box);
        }
        if (randomlyColorBox) {
            colorBoxRandomly(box);
        }

    })
    return box;
}
function darken(box) {
    let opacity = box.style.opacity;
    opacity = opacity - 0.1
    console.log(opacity);
    box.style.opacity = opacity;
}
function GenerateRandomColor() {
    return Math.floor(Math.random() * 255);
}
function colorBoxRandomly(box) {
    let red = GenerateRandomColor();
    let green = GenerateRandomColor();
    let blue = GenerateRandomColor();
    const rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
    box.style.backgroundColor = rgbColor;
}

