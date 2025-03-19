let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let intentosPrevios = [];

document.getElementById("submit").addEventListener("click", function() {
    let inputNumero = parseInt(document.getElementById("guess").value);
    let mensaje = document.getElementById("message");
    let historial = document.getElementById("attempts");

    if (isNaN(inputNumero) || inputNumero < 1 || inputNumero > 100) {
        mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }

    intentos++;
    intentosPrevios.push(inputNumero);
    historial.textContent = intentosPrevios.join(", ");

    if (inputNumero === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! Adivinaste el número en ${intentos} intentos.';
        deshabilitarJuego();
    } else if (intentos >= 10) {
        mensaje.textContent = 'Se acabaron los intentos. El número era ${numeroSecreto}.' ;
        deshabilitarJuego();
    } else {
        mensaje.textContent = inputNumero < numeroSecreto ? "El número es mayor 📈" : "El número es menor 📉";
    }
});

document.getElementById("restart").addEventListener("click", function() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    intentosPrevios = [];
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("submit").disabled = false;
    document.getElementById("restart").style.display = "none";
});

function deshabilitarJuego() {
    document.getElementById("guess").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("restart").style.display = "block";
}
