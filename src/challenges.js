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

console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
