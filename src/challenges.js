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
  let concatenation = ', '
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
  for (let index = 0; index < array.length; index += 1) {
    if (indice <= array[index]) {
      indice = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if(indice == array[index])
      contador += 1;
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1;
  let distanciaCat2;
  if (mouse >= cat1) {
    distanciaCat1 = mouse - cat1;
  } else {
    distanciaCat1 = cat1 - mouse;
  }
  if (mouse >= cat2) {
    distanciaCat2 = mouse - cat2;
  } else {
    distanciaCat2 = cat2 - mouse;
  }
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let bug = 'bug!';
  let fizz = 'fizz';
  let buzz = 'buzz';
  let fizzBuzz = 'fizzBuzz';
  let resultado = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
        resultado.push(fizzBuzz);
    } else if (array[index] % 5 === 0) {
        resultado.push(buzz);
    } else if (array[index] % 3 === 0){
        resultado.push(fizz);
    } else {
        resultado.push(bug);
    }
  }
  return resultado;
}

// Desafio 9
function encode(parametro) {
  let encodeParametro = '';
  for (let index in parametro) {
    if (parametro[index] === 'a') {
        encodeParametro += 1;
    } else if (parametro[index] === 'e') {
        encodeParametro += 2;
    } else if (parametro[index] === 'i') {
        encodeParametro += 3;
    } else if (parametro[index] === 'o') {
        encodeParametro += 4;
    } else if (parametro[index] === 'u') {
        encodeParametro += 5;
    } else {
        encodeParametro += parametro[index];
    }
  }
  return encodeParametro;
}

function decode(parametro) {
  let decodeParametro = '';
  for (let index in parametro) {
    if (parametro[index] === 1) {
        decodeParametro += 'a';
    } else if (parametro[index] === 2) {
        decodeParametro += 'e';
    } else if (parametro[index] === 3) {
        decodeParametro += 'i';
    } else if (parametro[index] === 4) {
        decodeParametro += 'o';
    } else if (parametro[index] === 5) {
        decodeParametro += 'u';
    } else {
        decodeParametro += parametro[index];
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
