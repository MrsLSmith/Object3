var superheroes = [{
  Name: "Nick Pettit",
  Color: "White",
  Superpower: "Coding"
}, {
  Name: "Batman",
  Color: "Black",
  Superpower: "Money"
}, {
  Name: "Deadpool",
  Color: "Red",
  Superpower: "Comedy"
}];




function list() {
 
var letter = ""
for (var i = 0; i < 3; i += 1) {
  letter += "<p>";
  letter += superheroes[i].Name;
  letter += '</p>';
}  
  document.getElementById("div").innerHTML = letter
}