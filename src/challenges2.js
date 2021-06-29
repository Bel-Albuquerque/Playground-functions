// Desafio 10
function techList(tech, name) {
  let techSort= tech.sort()
  let temp
  let box=[]
  for (let index of techSort) {
      temp=index;
      index={};
      index['tech']=temp;
      index['name']=name;
      box.push(index)
  }
  
return box
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'bel'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
