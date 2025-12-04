/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let numOne = prompt("Inserisci il primo numero");
let numTwo = prompt("Inserisci il secondo numero");

 
if(numOne > numTwo){
    console.log(numOne);    
}
else if(numOne < numTwo){
    console.log(numTwo);
    
}
else{
    console.log(numOne, numTwo);
    
}
