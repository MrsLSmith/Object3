var superheroes = [{
  Name: "Incredible Hulk",
  Color: "Green",
  Superpower: "Strength"
}, {
  Name: "Superman",
  Color: "Blue",
  Superpower: "Flying"
}, {
  Name: "Hawkeye",
  Color: "Purple",
  Superpower: "Archery"
}];



function listHeadings() {
    var table = (Object.keys(superheroes[0]));
  for(var prop in table) {
    document.getElementById("output").innerHTML += "<p>" + table[prop] + "</p>";
  }
}

function toggle() {
	var el = document.getElementById("output");
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
	}
	else {
		el.style.display = '';
	}
}