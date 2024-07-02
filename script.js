const container = document.querySelector('.container');
//const div = document.createElement("div");
//div.classList.add("square-element");
//container.appendChild(div);
//const another = document.createElement("div");
//another.classList.add("square-element");
//container.appendChild(another);

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
}

createGrid(16);
const cells = document.querySelectorAll(".row");
cells.forEach((cell) => {
    cell.addEventListener("mouseover",() => {
        cell.style.background = "red";
    });
});
