
function toggle() {
  x = document.getElementById("filters")
  if (x.style.display === "flex") {
     x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


function toptoggle() {
  x = document.getElementById("top-gen")
  if (x.style.display === "flex") {
     x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}


function btntoggle() {
  x = document.getElementById("bottom-gen")
  if (x.style.display === "flex") {
     x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

let SHEET_ID = '1MTToOVaaNlW0VsSJaCz7Ga2bTP55R7_rU4-pLFNlwl8'
let SHEET_TITLE = 'sheet1';
let SHEET_RANGE = "A1:G54"

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
  let data = JSON.parse(rep.substr(47).slice(0,-2))

  let value = document.getElementById("value")
  let image = document.getElementById("image")
  let color = document.getElementById("color")
  
  console.log(data.table);

  
})