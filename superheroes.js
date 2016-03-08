var superheroes = [{
  Name: "Nick Pettit",
  Color: "White",
  Superpower: "Coding"
}, {
  Name: "Batman",
  Color: "Black",
  Superpower: "Money"
}, {
  Name: "DeadPool",
  Color: "Red",
  Superpower: "Comedy"
}];

function toggle() {
  var el = document.getElementById("Table");
  if (el.style.display != 'none') {
    el.style.display = 'none';
  } else {
    el.style.display = '';
  }
};

var HeroesTable1 = "";
var HeroesTable2 = "";
var HeroesTable3 = "";
var Heroes = "";
var HeroStuff = "";

for (var i = 0; i < superheroes.length; i += 1) {
  Heroes = superheroes[i];
  HeroesTable1 += "<p class='rows'>" + Heroes.Name + "</p>";
  HeroesTable2 += "<p class='rows'>" + Heroes.Color + "</p>";
  HeroesTable3 += "<p class='rows'>" + Heroes.Superpower + "</p>";
  document.getElementById("TableColumnOne").innerHTML = HeroesTable1;
  document.getElementById("TableColumnTwo").innerHTML = HeroesTable2;
  document.getElementById("TableColumnThree").innerHTML = HeroesTable3;
}