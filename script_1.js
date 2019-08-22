// Bonjour
let a = "Bonjour monde"
console.log(a);

//Salut
let word = "";
let letter;

while (true) {
    letter = prompt('Votre prénom ?');

    if (letter) {
        word += letter; 
        
    } else { 
        break; 
    }
}
console.log(`Bonjour , ${word} !`);