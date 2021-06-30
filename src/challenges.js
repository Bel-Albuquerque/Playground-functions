// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado;
  resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(parametro) {
  let resultado = '';
  let concatenation = ', ';
  resultado = parametro[parametro.length - 1] + concatenation + parametro[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let indice = array[0];
  let contador = 0;
  for (let index of array) {
    if (indice <= index) {
      indice = index;
    }
  }
  for (let index of array) {
    if (indice === index) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
return 'cat1';
  
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(parametro) {
  let encodeParametro = '';
  for (let letra of parametro) {
    if (letra === 'a') {
      encodeParametro += 1;
    } else if (letra === 'e') {
      encodeParametro += 2;
    } else if (letra === 'i') {
      encodeParametro += 3;
    } else if (letra === 'o') {
      encodeParametro += 4;
    } else if (letra === 'u') {
      encodeParametro += 5;
    } else {
      encodeParametro += letra;
    }
  }
  return encodeParametro;
}

function decode(parametro) {
  let decodeParametro = '';
  for (let numero of parametro) {
    if (numero === '1') {
      decodeParametro += 'a';
    } else if (numero === '2') {
      decodeParametro += 'e';
    } else if (numero === '3') {
      decodeParametro += 'i';
    } else if (numero === '4') {
      decodeParametro += 'o';
    } else if (numero === '5') {
      decodeParametro += 'u';
    } else {
      decodeParametro += numero;
    }
  }
  return decodeParametro;
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
