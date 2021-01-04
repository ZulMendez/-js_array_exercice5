// Exo 1 création tableau
let prenom = "Zulma"
let tabExo = ['coding16', prenom, 7, 21, true];
console.log(tabExo);

// Exo 2 affiche longueur du tableau
console.log(tabExo.length);

// Exo 3 retire dernier élément du tableau
tabExo.pop();
console.log(tabExo);

// Exo 4 retire premier élément du tableau
tabExo.shift();
console.log(tabExo);

// Exo 5 rajoute des éléments au tableau
tabExo.push('Mendez', 30);
console.log(tabExo);

// Exo 6 rajoute des éléments au début du tableau
tabExo.unshift('on ne lâche rien', 2021, 'est à nous');
console.log(tabExo);

// Exo 7 retourne tableau
tabExo.reverse();
console.log(tabExo);

// exo 8
let boite = [ ];
boite.push(' dvd');
boite.push(' jeux')
alert(`${boite} 1er alert`);

boite.unshift('photos');
alert(`${boite} 2eme alert`);

boite.push(' documents', ' vêtements', ' chaussures');
alert(`${boite} 3eme alert`);

boite.splice(0, 3);

boite.push('souvenirs');
alert(boite.length);

boite.splice(-2, 2);
boite.splice(0, 2);
alert(boite);
console.log(boite.length);