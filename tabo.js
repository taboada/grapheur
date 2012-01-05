// scripts pour gerer le grapheur

$(document).ready(function() {

 // $("#expr").hide();

  // un petit paquet de valeurs aléatoires
  var values = makeRandIntArray(10,20,80); //nombre, min, max
  $("#expr").text('valeurs de y : ' + values);
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
  graph.linechart(0,0,largeur,hauteur,[0,10,20,30,40,50,60,70,80,90],values,options);

  graphbox.fadeIn("slow");
  $("#expr").delay(1000).fadeIn("slow");
  $("#msg").delay(1500).fadeIn("slow");
});


