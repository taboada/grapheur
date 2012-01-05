// scripts pour gerer le grapheur

$(document).ready(function() {

  // un petit paquet de valeurs aléatoires
  var values = makeRandArray(10);

  var largeur = 500;
  var hauteur = 400;
  // largeur et hauteur de la boite
  var graphbox = $("#graph");
  graphbox.css("width",largeur);
  graphbox.css("height",hauteur);

  var graph = Raphael('graph');
  graph.piechart(largeur/2,hauteur/2,150,values);
  //graph.linechart(10,10, 450,270,[1,2,3,4,5],[1,2,3,4,5], { "colors": "red", "symbol": "s", axis: "0 0 1 1"});
 });


