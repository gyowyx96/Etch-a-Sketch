const container = document.getElementById("container");
let mousedown = false;
let color = "";

container.addEventListener("mousedown", () =>{
    mousedown = true;
});
container.addEventListener("mouseup", () =>{
    mousedown = false;
});

function gridCreate(gridSize, cellSize){
    container.replaceChildren();    
    for(let i = 0; i<gridSize; i++){    
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("style", "width: "+cellSize+"px; \nheight: "+cellSize+"px;")
        container.appendChild(div);
    }
}

function draw(){
    let myDiv = document.querySelectorAll(".cell");  //non adda l'hover ma con il click mette la classe
    
    for (let cell of myDiv){
        cell.addEventListener("mousedown", () =>{
            cell.classList.add("clicked");
        })
        cell.addEventListener("mousemove", () =>{
            if (mousedown)
            cell.classList.add("clicked");
        })
    }
}

function createSmallGrid(){
    gridSize=16*16;
    cellSize=25;
    gridCreate(gridSize,cellSize);
    document.getElementById("medium").disabled = false;
    document.getElementById("small").disabled= true;
    document.getElementById("big").disabled= false;
    draw();
}

function createMediumGrid(){
    gridSize=32*32;
    cellSize=400/32;
    gridCreate(gridSize,cellSize);
    document.getElementById("medium").disabled = true;
    document.getElementById("small").disabled= false;
    document.getElementById("big").disabled= false;
    draw();
}

function createBigGrid(){
    gridSize=64*64;
    cellSize=400/64;
    gridCreate(gridSize,cellSize);
    document.getElementById("medium").disabled = false;
    document.getElementById("small").disabled= false;
    document.getElementById("big").disabled= true;
    draw();
}

const colors = document.querySelectorAll(".color");
colorMenu = Array.from(colors);
colorMenu.forEach((div) =>{
    div.addEventListener("click", () =>{
        div.classList.add("clicked");
        console.log(div);
    })
})








    
