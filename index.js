let stringAlphabet = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
let alphabet = stringAlphabet.split(', ');
console.log('newAlphbet', alphabet);

let btn1 = document.getElementById('btn1');

function valueIn(){
    let input = document.getElementById('inputText');
    let valueGet1 = input.value;
    console.log(valueGet1);
}

btn1.addEventListener('click', valueIn);
