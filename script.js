const container = document.getElementById("container");
let mousedown = false;
let color = "black";

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
            cell.style.backgroundColor= color;
        })
        cell.addEventListener("mousemove", () =>{
            if (mousedown)
                cell.style.backgroundColor= color;
        })
    }
}

function createSmallGrid(){
    gridSize=16*16;
    cellSize=600/16;
    gridCreate(gridSize,cellSize);
    document.getElementById("medium").disabled = false;
    document.getElementById("small").disabled= true;
    document.getElementById("big").disabled= false;
    draw();
}

function createMediumGrid(){
    gridSize=32*32;
    cellSize=600/32;
    gridCreate(gridSize,cellSize);
    document.getElementById("medium").disabled = true;
    document.getElementById("small").disabled= false;
    document.getElementById("big").disabled= false;
    draw();
}

function createBigGrid(){
    gridSize=64*64;
    cellSize=600/64;
    gridCreate(gridSize,cellSize);
    document.getElementById("medium").disabled = false;
    document.getElementById("small").disabled= false;
    document.getElementById("big").disabled= true;
    draw();
}

const colors = document.querySelectorAll("#color");
colorMenu = Array.from(colors);
console.log(colorMenu);

colorMenu.forEach((div) =>{
    removeClass();
    div.addEventListener("click", (e) =>{        
        removeClass();
        color = e.target.className;
        console.log(color);
        div.classList.add("clicked");
        
    })
})

function removeClass(){
    colorMenu.forEach((div)=>{
        div.classList.remove("clicked");
    })
}

function removeColor(){
    let myDiv = document.querySelectorAll(".cell");
    myDiv.forEach((div)=>{
        div.classList.remove(color);
    })
}







    
