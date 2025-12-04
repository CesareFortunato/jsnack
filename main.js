/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

/* let numOne = prompt("Inserisci il primo numero");
let firstNum = parseInt(numOne);
let numTwo = prompt("Inserisci il secondo numero");
let secondNum = parseInt(numTwo);

 
if(firstNum > secondNum){
    console.log(firstNum);    
}
else if(firstNum < secondNum){
    console.log(secondNum);
    
}
else{
    console.log("i due numeri sono uguali!");
    
}
 */



/* JSnack 2
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
 Esegui questo programma in due versioni, con il for e con il while (facoltativo) */
let numbers = [];


for (let i = 0; i <= 4; i++) {
    let chosenNumber = parseInt(prompt("inserisci un numero"));
    numbers.push(chosenNumber);
}

console.log(numbers);


/*  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}  */



let sum = 0;
let i = -1;
while (++i < numbers.length) {
    sum += numbers[i];

}
console.log(sum);




