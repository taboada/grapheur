// scripts pour gerer le grapheur

function makeArray(nombreValeurs){
  var myArray = [];
  for(i=0; i<nombreValeurs ; i++){
    myArray.push(i);
  }
  return myArray;
}

$(document).ready(function() {

 // $("#expr").hide();

  // un petit paquet de valeurs aléatoires
  var nombreValeurs = 5;
  var valuesX = makeArray(nombreValeurs);
  var valuesY = makeRandIntArray(nombreValeurs,20,80); //nombre, min, max
  $("#expr").text('valeurs de y : ' + valuesY);
  // largeur et hauteur de la boite
  var largeur = 500;
  var hauteur = 400;
  var graphbox = $("#graph");
  graphbox.css("width",largeur);
  graphbox.css("height",hauteur);

  
  var graph = Raphael('graph');
  //graph.piechart(largeur/2,hauteur/2,150,values);

  var options = {
    "gutter"    : 30,
    symbol      : "circle",
    "colors"    : ["rgba(" + randInt(128,255) + ","+ randInt(0,255) +",0,0.8)"],
    "smooth"    : true,
    "shade"     : true,
    "nostroke"  : false,
    "axis"      : "0 0 1 1"
  }
  graph.linechart(0,0,largeur,hauteur,valuesX,valuesY,options);

  graphbox.fadeIn("slow");
  $("#expr").delay(1000).fadeIn("slow");
  $("#msg").delay(1500).fadeIn("slow");
});


