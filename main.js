/**  Snack 1
 * Creare un array di oggetti: 
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
 * Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//  const bici = [
//      {
//          nome: 'bici pieghevole',
//          peso: 15,
//      },
//      {
//          nome: 'mountain bike',
//          peso: 20,
//      },
//      {
//          nome: 'e-bike',
//          peso: 25,
//      },
//      {
//          nome: 'BMX',
//          peso: 17,
//      }
//   ];

//  let biciLeggera = bici[0];

//  for (let i = 0; i <bici.length; i++) {
//      if (bici[i].peso < biciLeggera.peso) {
//          biciLeggera = bici[i];
//      }
//  }

//DESTRUCTURING
//  const {nome, peso} = biciLeggera;

// console.log(nome, peso);
//  console.log(
//      `
//         ${biciLeggera.nome} ${biciLeggera.peso}
//      `
//  );



/**  Snack 2
 * Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * Punti fatti e falli subiti
 * Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/





const squadre = [
    {
        nome: 'Palermo',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Catania',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Brescia',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Pescara',
        punti: 0,
        falli: 0
    },
];

for (let i = 0; i < squadre.length; i++) {
    const element = squadre[i];
    element.punti = numRandom(0,60);
    element.falli = numRandom(0,60);
}

// console.table(squadre)

let newSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    newSquadre.push({
        nome: squadre[i].nome,
        falli: squadre[i].falli
    })
};

console.table(newSquadre);
//DESTRUCTURING
  const [squadra1,squadra2,squadra3,squadra4] = newSquadre;

console.log(squadra1,squadra2,squadra3,squadra4);
/**
 * FUNCTION
 * */

function numRandom(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}