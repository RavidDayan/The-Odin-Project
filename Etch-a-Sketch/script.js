
//elements
const slider=document.getElementById("slider");
const container=document.getElementById("container");

//initilazation
let numberOfSquares = getNumberOfSquares();
container.appendChild(BoxContainer(numberOfSquares));

slider.addEventListener("input",()=>{
    container.removeChild(container.firstChild);
    console.log(slider);
    let numberOfSquares = getNumberOfSquares();
    container.appendChild(BoxContainer(numberOfSquares));

})
//functions
function getNumberOfSquares(){
    let num = slider.value;
    return num;
}
numberOfSquares=getNumberOfSquares();

function BoxContainer(numberOfSquares){
    let boxContainer=document.createElement("div");
    boxContainer.className = "box-container";
    for(let i=0;i<numberOfSquares*numberOfSquares;i++){
        boxContainer.appendChild(Box(numberOfSquares));
    }
    return boxContainer;
}
function Box(numberOfSquares){
    let box=document.createElement("div");
    box.className = "box";
    box.style.opacity=1;
    box.style.width = (1/numberOfSquares)*100+"%";
    box.style.height = (1/numberOfSquares)*100+"%";
    box.addEventListener("mouseenter",()=>{
        darken(box);
    })
    return box;
}
function darken(box){
    let opacity=box.style.opacity;
    opacity=opacity-0.1
    console.log(opacity);
    box.style.opacity=opacity;
}

