
let numberOfSquares
function getNumberOfSquares(){
    let slider = document.getElementById("slider");
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
const mainDiv=document.getElementById("container");
mainDiv.appendChild(BoxContainer(numberOfSquares));

