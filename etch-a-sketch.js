window.onload = function() {
  makeGrid(16);
};

function makeGrid(num) {
    let grid = document.getElementById("container");
    while(grid.hasChildNodes()) {
      grid.removeChild(grid.firstChild);
    }
    let cols = "auto";
    for (let i = 1; i < num; i++) {
      cols += "auto";
    }
    grid.style.gridTemplateColumns = cols;
    change();

    for (let i = 0; i < num; i++) {
      let row = document.createElement("div");
      row.className = "row";
      for (let j = 0; j < num; j++) {
          let cell = document.createElement("div");
          cell.className = "grid-item";
          cell.id = "cell";
          row.appendChild(cell);
          cell.style.width = (600/num)-2+"px";
          cell.style.height = (600/num)-2+"px";
      }

      grid.appendChild(row);

    }
    return grid;
  }
  
  function startGrid() {
    num = prompt("Please enter a number", 16);
    makeGrid(num);
  }
  function startRainbow() {
    num = prompt("Please enter a number", 16);
    makeGrid(num);
  }

  function change(){
    document.getElementById("container").addEventListener('mouseover', function(e){e.target.style.backgroundColor = "purple"})
  }
  function rainbowFunction(e){
    document.getElementById("container").addEventListener('mouseover', function(e){
      let colors = ['#ff5BAS', '#ff84BC', '#ffbbda', '#DB49AC', '#E472BF', '#F0ADDB', '#9957CD', '#B07CDA', '#D1B2EA', '#438EC8', '#6BA7D6', '#ABCCE8', '#3BC6B6', '#64D4C7', '#A4E7DF'];
      let random_color = colors[Math.floor(Math.random() * colors.length)];
      e.target.style.backgroundColor = random_color;
    });
  }

document.getElementById("rainbow").addEventListener('click', rainbowFunction);
document.getElementById("default").addEventListener('click', change);
