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
    index.tech = temp;
    index.name = name;
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
  let telefone = '(xx) xxxxx-xxxx';
  let telFinal = '';
  for (let telIndex in telefone) {
    for (let arIndex of array) {
      if (telefone[telIndex] === 'x') {
        telFinal += arIndex;
        array.shift();
        break;
      } else {
        telFinal += telefone[telIndex];
        break;
      }
    }
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
  let agua = 0;
  for (let index of string) {
    if (index > 0 && index <= 9) {
      agua += parseInt(index);
    }
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
