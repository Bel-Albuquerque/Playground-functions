// Desafio 1
function compareTrue(par1, par2) {
  if ( par1== true && par2== true) {
    return true
    } else {
    return false
    }
}
console.log(compareTrue(true, true))


// Desafio 2
function calcArea(base, height){
  let resultado;
  resultado= (base*height)/2;
  return resultado
}
console.log(calcArea(10, 50))

// Desafio 3
function splitSentence (string){
  let array=[]
  array= string.split(' ')    
   return array
}
console.log(splitSentence ('go trybe'))

// Desafio 4
function concatName(parametro){
  let resultado=[]
  resultado.push(parametro[parametro.length -1])
  resultado.push(parametro[0])
  return resultado
  
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points=3*wins +ties
  return points
}
console.log(footballPoints(14, 8))

// Desafio 6
function highestCount (array){
  let indice=array[0]
  let contador=0
  for (let index=0; index<array.length; index+=1){
      if (indice<=array[index]){
          indice=array[index]           
      }
  
  }
  for (let index=0; index<array.length; index+=1){
      if(indice==array[index])
      contador+=1
  }
  return contador
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse (mouse, cat1, cat2) {
  let distanciaCat1
  let distanciaCat2
  if (mouse>=cat1){
      distanciaCat1=mouse-cat1
  } else {
      distanciaCat1=cat1-mouse
  }
  if (mouse>=cat2) {
      distanciaCat2=mouse-cat2
  } else {
      distanciaCat2 =cat2-mouse
  }
  if (distanciaCat1==distanciaCat2){
      return 'os gatos trombam e o rato foge'
  } else if (distanciaCat1>distanciaCat2) {
      return 'cat2'
  } else {
      return 'cat1'
  }
}

console.log(catAndMouse(42, 87, 23))

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
