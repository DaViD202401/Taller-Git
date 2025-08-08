var max = 10;
var rest = 0;
var x = Math.floor(Math.random() * 10) + 1;

var num = prompt("Adivina el número entre 1 y " + max);

console.log("Número al azar:", x);
console.log("Tu número:", num);

function compareNums(x, num) {
    rest = Math.abs(x - num);
    console.log("Diferencia:", rest);
    if (rest < 4) {
        console.log("Caliente");
    } else {
        console.log("Frío");
    }
}

compareNums(x, num);