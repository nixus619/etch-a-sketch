const container = document.querySelector('.container');
const buttonDiv = document.querySelector(".buttons");
//const div = document.createElement("div");
//div.classList.add("square-element");
//container.appendChild(div);
//const another = document.createElement("div");
//another.classList.add("square-element");
//container.appendChild(another);
const resize = document.createElement("button");
resize.textContent = "Resize";
resize.className="buttons"
const clear = document.createElement("button");
clear.textContent = "Reset";
clear.className="buttons";
buttonDiv.append(resize);
buttonDiv.append(clear);

function createGrid(number) {
    for(let i=0;i<number;i++){
        const col = document.createElement("div");
        col.classList.add("column");
        container.appendChild(col);
        for(let j=0;j<number;j++) {
            const row = document.createElement("div");
            row.classList.add("row");
            col.appendChild(row);
        }
        /*div.style.width = "100%";
        div.style.height = 800/number;
        if (i % mod === 0) {
            div.style.cssText = "border: 0; height: 0; width: 100%";
        } else {
            div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        }*/
    }
    const cells = document.querySelectorAll(".row");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover",() => {
            if(cell.style.background=="") {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                const opac = Math.random();
                //console.log(opacity);
                //console.log("rgb(" + r + "," + g + "," + b + " / " + opacity + "%)");
                cell.style.background = "rgb(" + r + "," + g + "," + b + ")";
                cell.style.opacity = opac;
                } else {
                    if(cell.style.opacity>1) {
                        console.log("Max opacity reached");
                    } else {
                        console.log(cell.style.opacity);
                        cell.style.opacity = parseFloat(cell.style.opacity) + 0.1;
                    }
                }
        });
    });
}

createGrid(16);
/* const cells = document.querySelectorAll(".row");
cells.forEach((cell) => {
    cell.addEventListener("mouseover",() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.background = "rgb(" + r + "," + g + "," + b + ")";
    });
}); */

resize.addEventListener("click",function() {
    let size = prompt("What size do you want the grid to be? Please select a value between 1 and 100");
    while(size<1 || size>100){
        size = prompt("Invalid value selected. Please select a value between 1 and 100");
    }
    container.innerHTML = '';
    createGrid(size);
});

clear.addEventListener("click",function() {
    const cells = document.querySelectorAll(".row");
    cells.forEach((cell) => {
        cell.style.background = "";
        cell.style.opacity = 1;
        });
    });