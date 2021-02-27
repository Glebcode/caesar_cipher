let stringAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log('Alphbet', stringAlphabet);
let alphabet = stringAlphabet.split('');
// console.log('newAlphbet', alphabet);
let shiftedAlphabet;

let btn1 = document.getElementById('btn1');

function valueIn(){
    let input = document.getElementById('inputText');
    let valueGet1 = input.value;
    console.log(valueGet1);
}

btn1.addEventListener('click', valueIn);

let btn2 = document.getElementById('btn2');

function valueNum(){
    let msg = document.getElementById('inputText');
    let input = document.getElementById('inputNumber');
    let valueGet2 = input.value;
    console.log(valueGet2);
    shiftedAlphabet = alphabet.slice(valueGet2);
    // console.log(shiftedAlphabet);
    shiftedAlphabet +=(","+alphabet.slice(0, valueGet2));
    // console.log('shiftedAlphabet',shiftedAlphabet);
    let cipheredAlphabet;
    cipheredAlphabet = shiftedAlphabet.split(",");
    console.log(cipheredAlphabet);

    for (let i = 0; i < msg.length; i++){
        let number = alphabet.indexOf(msg[i]);
        console.log(number);
        let result = cipheredAlphabet[number];
        console.log(result);
    }
}

btn2.addEventListener('click', valueNum);