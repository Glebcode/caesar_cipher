let stringAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log('Alphbet', stringAlphabet);
let lowAlph = stringAlphabet.toLowerCase();
let alphabet = lowAlph.split('');
// console.log('Alphbet', alphabet);
let output = document.getElementById('outputInner');

let shiftedAlphabet;

let btn1 = document.getElementById('btn1');

function valueIn(){
    let input = document.getElementById('inputText');
    let valueGet1 = input.value;
    console.log(valueGet1);
}

// btn1.addEventListener('click', valueIn);

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
        output.innerHTML += result;
    }
}

btn2.addEventListener('click', valueNum);


let outputDecoder = document.getElementById('outputInnerDecoder');
let btn2Decoder = document.getElementById('btn2Decoder');


function valueNum1(){
    let msg = document.getElementById('inputTextDecoder');
    let stringMsg = msg.value;
    let lowMsg = stringMsg.toLowerCase();
    let msgArray = lowMsg.split('');

    let input = document.getElementById('inputNumber');
    let valueGet2 = input.value;
    let valueGetOutput;
    
    if (valueGet2 > 0 ) {
        valueGetOutput = -valueGet2;
        console.log('valueGet2 > 0', valueGetOutput)
    }
     else if (valueGet2 < 0 ){
         valueGetOutput = (-1) * valueGet2;
         console.log('valueGet2 < 0', valueGetOutput)
        }
        
    shiftedAlphabet = alphabet.slice(valueGetOutput);
    shiftedAlphabet +=(","+alphabet.slice(0, valueGetOutput));
    let lowShiftedAlph = shiftedAlphabet.toLowerCase();
    let cipheredAlphabet;

    cipheredAlphabet = lowShiftedAlph.split(",");
    console.log(cipheredAlphabet);

    for (let i = 0; i < msgArray.length; i++){
        let number = alphabet.indexOf(msgArray[i]);
        console.log(number);
        let result = cipheredAlphabet[number];
        console.log(result);
        outputDecoder.innerHTML += result;
    }
}

btn2Decoder.addEventListener('click', valueNum1);