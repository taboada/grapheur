// quelques fonctions utiles

function randInt(max,min) {
  return Math.floor(Math.random() * (max - min) + min); 
}

function makeRandArray(length){
  var array = [];
  for(i=0; i< length ; i++){
    array.push(randInt(0,100));
  }
  return array;
}
