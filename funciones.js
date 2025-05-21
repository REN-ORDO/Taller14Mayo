ejercicio5Funcion = () => {
    document.body.innerHTML =
        `
    <h1>Ejercicio 5 de Funciones</h1>
    <p> abre la consola para ver el resultado </p>
    <button type="button" onclick="Ejecutar()">Ejecutar</button>

        `
}

function Ejecutar() {
    let multipli = function (x, y) {
        return x * y;
    }

    let expon = function (x, y) {
        return Math.pow(x, y);
    }

    let suma = (x, y) => { return x + y };

    // resta
    let resta = (x, y) => { return x - y };

    var result = multipli(5, 2);
    console.log("Multiplicación: " + result);

    result = suma(3, 4);
    console.log("Suma: " + result);

    result = resta(10, 6);
    console.log("Resta: " + result);

}

// FIN EJERCICIO 5

// ----------------------------------------

// INICIO EJERCICIO 6 

ejercicio6Funcion = () => {
    document.body.innerHTML =
        `
    <h1>Ejercicio 6 de Funciones</h1>
    <p> haz click en el boton para ejecutar el script</p>
    <button type="button" onclick="Ejecutar2()">Ejecutar</button>

        `
}

function Ejecutar2() {

    // conversión de Celsius a Fahrenheit
    let aFahrenheit = (gradoC) => { return gradoC * 1.8 + 32; };

    //conversión de Fahrenheit a Celsius
    let aCelsius = (gradoF) => { return (gradoF - 32) / 1.8; };


    let result1 = aFahrenheit(22);  // 22°C → °F
    alert("22°C son " + result1 + "°F");

    let result2 = aCelsius(100);    // 100°F → °C
    alert("100°F son " + result2.toFixed(2) + "°C");

}



// FIN EJERCICIO 6

// ----------------------------------------

// EJERCICIO 9

function ejercicio9Funcion() {
    document.body.innerHTML =
        `
    <h1>Ejercicio 9 de Funciones</h1>
    <p> abre la consola para ver el resultado </p>
    <button type="button" onclick="Ejecutar3()">Ejecutar</button>
    <p id="resultado"></p>
            `
}

function sumar(a, b) {
    let resultado = a + b;
    document.getElementById("resultado").innerHTML = `<h3>La suma de ${a} + ${b} es: ${resultado}</h3>`;
}

function Ejecutar3() {
    // Pedimos los números al usuario
    let num1 = parseInt(prompt("Introduce el primer número:", "0"));
    let num2 = parseInt(prompt("Introduce el segundo número:", "0"));

    // Llamamos a la función con los valores
    sumar(num1, num2);
}
// FIN EJERCICIO 9
// ----------------------------------------


// EJERCICIO 12

function ejercicio12Funcion() {
    document.body.innerHTML =
    `
<h1>Ejercicio 12 de Funciones</h1>

<h3>¿Qué tipo de variable es z?</h3>
<p style="font-size: 20px;"><i>z</i> es una variable local.</p>

<h3>¿Local o Global?</h3>
<p style="font-size: 20px;"><i>z</i> es una variable local, ya que se define dentro de la función f() con let.</p>

<h3>¿Dónde podemos sacarla por pantalla?</h3>
<p style="font-size: 20px;">Solo se puede usar dentro de la función f(), fuera de esa función, no existe y da error si la intentas mostrar.</p>

<img src="./imagenes/Ejercicio12Funciones.png" alt="Imagen del Ejercicio 12"><br><br><br><br><br>

`
}

// FIN EJERCICIO 12
// ----------------------------------------