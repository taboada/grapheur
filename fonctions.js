// quelques fonctions utiles

function randInt(max,min) {
  return Math.floor(Math.random() * (max - min) + min); 
}

function makeRandIntArray(length,min,max){
  var array = [];
  for(i=0; i< length ; i++){
    array.push(randInt(min,max));
  }
  return array;
}

function randColor(opacity){
  return "rgba(" + randInt(0,255)
                 + ","
                 + randInt(0,255)
                 + ","
                 + randInt(0,255)
                 + ","
                 + opacity
                 + ")"; 
}
