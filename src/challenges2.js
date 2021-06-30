// Desafio 10
function techList(tech, name) {
  if (tech.length === 0 || tech === null) {
    return 'Vazio!';
  }
  let techSort = tech.sort();
  let temp;
  let box = [];
  for (let index of techSort) {
    temp = index;
    index = {};
    index['tech'] = temp;
    index['name'] = name;
    box.push(index);
  }
  return box;
}

// Desafio 11
function tresNumerosIguais(array) {
  let conferindo = array;
  let contador = 0;
  for (let index of array) {
    for (let confIndex of conferindo) {
      if (index === confIndex) {
        contador += 1;
      }
      if (contador >= 3) {
        return contador;
      }
    }
    contador = 0;
  }
  return contador;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of array) {
    if (index < 0 || index > 9 || tresNumerosIguais(array) === 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let prefixo = '(';
  for (let index = 0; index < 2; index += 1) {
    prefixo += array[index];
  }
  let tel1 = prefixo + ') ';
  for (let index = 2; index < 7; index += 1) {
    tel1 += array[index];
  }
  let telFinal = tel1 + '-';
  for (let index = 7; index < array.length; index += 1) {
    telFinal += array[index];
  }
  return telFinal;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)
  && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)
  && lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    resultado = true;
  }
  return resultado;
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let agua = 0;
  for (let index of numbers) {
    agua += index;
  }
  if (agua > 1) {
    return agua + ' copos de água';
  }
  return agua + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
