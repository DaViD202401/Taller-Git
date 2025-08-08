var max = 10;
var rest = 0;
var x = Math.floor(Math.random() * max) + 1;

document.getElementById("btnGuess").addEventListener("click", function () {
    var num = parseInt(document.getElementById("inputNum").value);

    if (isNaN(num) || num < 1 || num > max) {
        document.getElementById("resultado").textContent = "Por favor ingresa un número válido.";
        return;
    }

    rest = Math.abs(x - num);

    if (num === x) {
        document.getElementById("resultado").textContent = "¡Correcto! El número era " + x;
    } else if (rest < 4) {
        document.getElementById("resultado").textContent = "Caliente";
    } else {
        document.getElementById("resultado").textContent = "Frío";
    }
});
