/**  Snack 1
 * Creare un array di oggetti: 
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
 * Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

 const bici = [
     {
         nome: 'bici pieghevole',
         peso: 15,
     },
     {
         nome: 'mountain bike',
         peso: 20,
     },
     {
         nome: 'e-bike',
         peso: 25,
     },
     {
         nome: 'BMX',
         peso: 17,
     }
  ];

 let biciLeggera = bici[0];

 for (let i = 0; i <bici.length; i++) {
     if (bici[i].peso < biciLeggera.peso) {
         biciLeggera = bici[i];
     }
 }


 const {nome, peso} = biciLeggera;

console.log(nome, peso);
 console.log(
     `
        ${biciLeggera.nome} ${biciLeggera.peso}
     `
 );