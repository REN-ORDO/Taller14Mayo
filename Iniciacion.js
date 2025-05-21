// EJERCICIO 10
function ejercicio10() {
    document.body.innerHTML =
        `<!--Realizar programa donde el usuario introduce 2 números y el ordenador responde 
    sacando por pantalla la resta de ambos números-->    
    <form>
        <h1>Resta de dos números</h1>
        <label>Número 1</label>
        <input type="number" id="num1">
        <br><br>
        <label>Número 2</label>
        <input type="number" id="num2">
        <br><br>
        <button type="button" onclick="mostrarResta()">Calcular</button>
        <p id="resta"></p>
    </form>`
}

// funcion para mostrar la resta de dos números
function mostrarResta() {

    const num1 = document.getElementById("num1"); // obtener el valor del primer número
    const num2 = document.getElementById("num2"); // obtener el valor del segundo número

    const resta = parseFloat(num1.value) - parseFloat(num2.value); // resta de los dos números

    // mostrar el resultado en pantalla
    document.getElementById("resta").innerHTML = `La resta de <strong>${num1.value}</strong> y <strong>${num2.value}</strong> es:  <strong>${resta}</strong>`;
}

// FINAL DEL EJERCICIO 10
//-------------------------------------------------------------
// EJERCICIO 11

function ejercicio11() {
    document.body.innerHTML =
        `<!--Realizar programa donde el usuario introduce 2 números y el ordenador responde 
    sacando por pantalla la resta y la multiplicacion de ambos números-->    
    <form>
        <h1>Resta y Multiplicacion de dos números</h1>
        <label>Número 1</label>
        <input type="number" id="num1">
        <br><br>
        <label>Número 2</label>
        <input type="number" id="num2">
        <br><br>
        <button type="button" onclick="mostrarRestaYMultiplicacion()">Calcular</button>
        <p id="resta"></p>
        <p id="multiplicacion"></p>
    </form>`
}

// funcion para mostrar la resta y la multiplicacion de dos números
function mostrarRestaYMultiplicacion() {

    const num1 = document.getElementById("num1"); // obtener el valor del primer número
    const num2 = document.getElementById("num2"); // obtener el valor del segundo número

    const resta = parseFloat(num1.value) - parseFloat(num2.value); // resta de los dos números
    const multiplicacion = parseFloat(num1.value) * parseFloat(num2.value); // multiplicacion de los dos números

    // mostrar el resultado en pantalla
    document.getElementById("resta").innerHTML = `La resta de <strong>${num1.value}</strong> y <strong>${num2.value}</strong> es:  <strong>${resta}</strong>`;
    document.getElementById("multiplicacion").innerHTML = `La multiplicacion de <strong>${num1.value}</strong> y <strong>${num2.value}</strong> es:  <strong>${multiplicacion}</strong>`;
}

// FINAL DEL EJERCICIO 11
//-------------------------------------------------------------
// EJERCICIO 14

function ejercicio14() {
    document.body.innerHTML =
        `
    <!--Realizar programa donde el usuario introduce números y la computadora responde sacando por pantalla los mismos números hasta que el introducido es el número 7.-->
    
    <h2>Introduce números</h2>
    <small>(el programa terminará cuando introduzcas el número 7)</small><br><br>
    <input type="number" id="numero">
    <button type="button" onclick="mostrarNumeros()">Listo</button>
    <p id="salida"></p>
    `
}

// funcion para mostrar los números
function mostrarNumeros() {
    const numero = document.getElementById("numero"); // obtener el valor del número
    const salida = document.getElementById("salida"); // obtener el elemento de salida

    if (numero.value == 7) {
        salida.innerHTML += "Fin del programa";
    } else {
        salida.innerHTML += numero.value + "<br>";
    }
}

// FINAL DEL EJERCICIO 14
//-------------------------------------------------------------