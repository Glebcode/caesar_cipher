let stringAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log('Alphbet', stringAlphabet);
let lowAlph = stringAlphabet.toLowerCase();
let alphabet = lowAlph.split('');
// console.log('Alphbet', alphabet);


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
    let stringMsg = msg.value;
    // console.log(stringMsg);
    let lowMsg = stringMsg.toLowerCase();

    let msgArray = lowMsg.split('');
    // console.log(msgArray);
    let input = document.getElementById('inputNumber');
    let valueGet2 = input.value;
    console.log(valueGet2);
    shiftedAlphabet = alphabet.slice(valueGet2);
    shiftedAlphabet +=(","+alphabet.slice(0, valueGet2));
    // console.log(shiftedAlphabet);
    let lowShiftedAlph = shiftedAlphabet.toLowerCase();
  // console.log(lowShiftedAlph);
    let cipheredAlphabet;

    cipheredAlphabet = lowShiftedAlph.split(",");
    console.log(cipheredAlphabet);

    for (let i = 0; i < msgArray.length; i++){
        let number = alphabet.indexOf(msgArray[i]);
        console.log(number);
        let result = cipheredAlphabet[number];
        console.log(result);
    }
}

btn2.addEventListener('click', valueNum);