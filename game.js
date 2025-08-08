var max = 10;
var rest = 0;
var x = Math.floor(Math.random() * max) + 1;

var btnGuess = document.getElementById("btnGuess");
var btnRestart = document.getElementById("btnRestart");

btnGuess.addEventListener("click", function () {
    var num = parseInt(document.getElementById("inputNum").value);

    if (isNaN(num) || num < 1 || num > max) {
        document.getElementById("resultado").textContent = "Por favor ingresa un número válido.";
        return;
    }

    rest = Math.abs(x - num);

    if (num === x) {
        document.getElementById("resultado").textContent = "¡Correcto! El número era " + x;
        btnGuess.disabled = true;
        btnRestart.style.display = "inline-block";
    } else if (rest < 4) {
        document.getElementById("resultado").textContent = "Caliente";
    } else {
        document.getElementById("resultado").textContent = "Frío";
    }
});

btnRestart.addEventListener("click", function () {
    x = Math.floor(Math.random() * max) + 1;
    document.getElementById("resultado").textContent = "";
    document.getElementById("inputNum").value = "";
    btnGuess.disabled = false;
    btnRestart.style.display = "none";
});
