const container = document.getElementById("container");   //a few variable
let mousedown = false;
let color = "black";

container.addEventListener("mousedown", () =>{ //give us a value if the mouse is clicked
    mousedown = true;
});
container.addEventListener("mouseup", () =>{ //return us the opposite input if the mouse is released 
    mousedown = false;
});

function gridCreate(gridSize, cellSize){  //create the grid from preselected measure 
    container.replaceChildren();    
    for(let i = 0; i<gridSize; i++){    
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("style", "width: "+cellSize+"px; \nheight: "+cellSize+"px;")
        container.appendChild(div);
    }
}

function draw(){ //draw the lines changing the bg color of the divs
    let myDiv = document.querySelectorAll(".cell");  
    
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

createSmallGrid(); //starting grid

function createSmallGrid(){
    console.log("small");
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

const colors = document.querySelectorAll("#color");  //get the color menu from the html
colorMenu = Array.from(colors);
console.log(colorMenu);

colorMenu.forEach((div) =>{   //set the color and change the clicked color icon
    removeClass();
    div.addEventListener("click", (e) =>{        
        removeClass();
        color = e.target.className;
        console.log(color);
        div.classList.add("clicked");
        
        
    })
})

function removeClass(){  //remove a class (used for the colors)
    colorMenu.forEach((div) =>{
        div.classList.remove("clicked");
    })
}

function removeColor(){  //not used
    let myDiv = document.querySelectorAll(".cell");
    myDiv.forEach((div)=>{
        div.classList.remove(color);
    })
}
let border = "false";
function setBackgroundLines(){
    let cells = document.querySelectorAll(".cell");
    if (border === "false"){
        border = "true";
        for (let cell of cells){
            cell.style.border= "1px solid rgb(226,226,226";           
        }
    }
    else{
        border = "false";
        for (let cell of cells){
            cell.style.border="none";
        }
    }
}

function clearGrid(){
    console.log("clear");
    let myDiv = document.querySelectorAll(".cell");
    for (let cells of myDiv){
        cells.style.backgroundColor="white";
    }
}

    
