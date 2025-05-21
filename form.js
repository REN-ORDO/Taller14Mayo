// Realizar programa en el cual el usuario introduce un valor en un FORM y por pantalla sale el resultado de su 10%.

// EJERCICIO 2

function ejercicio2Form() {
    document.body.innerHTML =
        `
    <form name="formularios">
    <h2>10% de un número</h2>
        <label for="">Introduce un valor</label>
        <input type="number" name="valor" id="valor">
        <button type="button" onclick="mostrarPorcentaje()">Calcular el 10%</button>
    </form>
    `
}

function mostrarPorcentaje() {
    document.body.innerHTML +=
        `
    <p>El 10% de ${document.formularios.valor.value} es <strong>${document.formularios.valor.value * 0.1}</strong></p>
    `
}

// FIN EJERCICIO 2

// EJERCICIO 4

// Realizar un programa en el cual se introduce un valor numérico en un FORM y como resultado se muestran el resultado de elevar el número al cuadrado y también el resultado de elevar el número al cubo. a) Realizar con una función. b) Realizar con al menos , DOS funciones.

function ejercicio4Form() {
    document.body.innerHTML =
        `
    <form name="formularios">
        <h2>Forma 1 (una función)</h2>
        <label for="">Introduce un valor</label>
        <input type="number" name="valor" id="valor">
        <button type="button" onclick="cuboycuadrado()">Calcular el Cuadrado y el Cubo</button>
    </form>
    <p id="salida1"></p>
    <hr>
    <form name="formularios2">
        <h2>Forma 2 (dos funciones)</h2>
        <label for="">Introduce un valor</label>
        <input type="number" name="valor2" id="valor2">
        <button type="button" onclick="cuadrado2(), cubo2()">Calcular el Cuadrado y el Cubo</button>
    </form>
    <p id="salida2"></p>
    `
}

function cuboycuadrado() {
    document.querySelector("#salida1").innerHTML +=
        `
    <p>El cuadrado de ${document.formularios.valor.value} es <strong>${document.formularios.valor.value ** 2}</strong></p>
    <p>El cubo de ${document.formularios.valor.value} es <strong>${document.formularios.valor.value ** 3}</strong></p>
    <p>---------------------</p>
    `
}

function cuadrado2() {
    document.querySelector("#salida2").innerHTML +=
        `
    <p>El cuadrado de ${document.formularios2.valor2.value} es <strong>${document.formularios2.valor2.value ** 2}</strong></p>
    `
}

function cubo2() {
    document.querySelector("#salida2").innerHTML +=
        `
    <p>El cubo de ${document.formularios2.valor2.value} es <strong>${document.formularios2.valor2.value ** 3}</strong></p>
    <p>---------------------</p>
    `
}

// FIN EJERCICIO 4
// ----------------------------------------------------
// EJERCICIO 7

function ejercicio7Form() {
    document.body.innerHTML =
        `
    <form name="grados">
        <h2>Conversión de grados</h2>
        <label>Introduce grados en °C:</label><br>
        <input type="number" name="celcius" id="celcius">
        <button type="button" onclick="celsiusAFahrenheit()">Mostrar en Fahrenheit</button>
    </form>
    <p id="salida7"></p>
    `
}

function celsiusAFahrenheit() {
    const celcius = document.grados.celcius.value
    const fahrenheit = celcius * 1.8 + 32

    document.querySelector("#salida7").innerHTML =
        `
    ${celcius}°C convertidos a Fahrenheit son <strong>${fahrenheit.toFixed(2)}°F</strong>
    `
}

// FIN EJERCICIO 7
// ----------------------------------------------------
// EJERCICIO 8

function ejercicio8Form() {
    document.body.innerHTML =
        `
    <h2>Conversión de Temperaturas</h2>

    <form name="f">
        <label for="celsius">Introduce grados en °C:</label>
        <input type="number" id="c" name="c">
        <button type="button" onclick="convertirCelsiusAFahrenheit()">Convertir a °F</button>
        <br><br>

        <label for="fahrenheit">Introduce grados en °F:</label>
        <input type="number" id="f" name="f">
        <button type="button" onclick="convertirFahrenheitACelsius()">Convertir a °C</button>
    </form>

    <p id="mostrar1"></p>
    <p id="mostrar2"></p>
    `
}

function convertirCelsiusAFahrenheit() {
    const celsius = parseFloat(document.f.c.value);
    const mostrar1 = document.getElementById("mostrar1");
    const fahrenheit = celsius * 1.8 + 32;
    mostrar1.innerHTML = `${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`;
}

function convertirFahrenheitACelsius() {
    const fahrenheit = parseFloat(document.f.f.value);
    const mostrar2 = document.getElementById("mostrar2");
    const celsius = (fahrenheit - 32) / 1.8;
    mostrar2.innerHTML = `${fahrenheit}°F equivalen a ${celsius.toFixed(2)}°C`;
}

// FIN EJERCICIO 8
// ----------------------------------------------------

// EJERCICIO 9

function ejercicio9Form() {
    document.body.innerHTML =
        `
    <h2>Calculadora de Nota Ponderada</h2>

    <form name="notas">
        <label for="nota1">Nota 1 (40%):</label>
        <input type="number" id="nota1" name="nota1" step="0.1" min="1" max="5">
        <br><br>

        <label for="nota2">Nota 2 (60%):</label>
        <input type="number" id="nota2" name="nota2" step="0.1" min="1" max="5">
    <br><br>

    <button type="button" onclick="calcularNotaPonderada()">Calcular Nota Final</button>
    </form>

    <p id="resultado"></p>
    `
}

function calcularNotaPonderada() {
    const n1 = parseFloat(document.notas.nota1.value);
    const n2 = parseFloat(document.notas.nota2.value);
    const resultado = document.getElementById("resultado");


    const final = (n1 * 0.4) + (n2 * 0.6);
    resultado.innerHTML = `La nota final ponderada es <strong>${final.toFixed(2)}</strong>`;
}

// FIN EJERCICIO 9

// EJERCICIO 11

function ejercicio11Form() {
    document.body.innerHTML =
        `
    <h2>Calculadora de Peso Ideal Aproximado</h2>

    <form name="datos">
    <label>Edad:</label>
    <input type="number" name="edad" min="1" max="120">
    <br><br>

    <label>Sexo:</label>
    <select name="sexo">
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
    </select>
    <br><br>

    <label>Altura (cm):</label>
    <input type="number" name="altura" min="100" max="250">
    <br><br>

    <label>Peso actual (kg):</label>
    <input type="number" name="peso" min="20" max="300">
    <br><br>

    <button type="button" onclick="calcularPesoIdeal()">Calcular Peso Ideal</button>
    </form>

    <p id="resultado"></p>
    `
}

function calcularPesoIdeal() {
    const edad = parseInt(document.datos.edad.value);
    const sexo = document.datos.sexo.value;
    const altura = parseFloat(document.datos.altura.value);
    const peso = parseFloat(document.datos.peso.value);
    const resultado = document.getElementById("resultado");

    let pesoIdeal;

    if (sexo === "M") {
        pesoIdeal = 50 + (altura - 150) * 0.75 + (edad - 20) * 0.1;
    } else {
        pesoIdeal = 45.5 + (altura - 150) * 0.6 + (edad - 20) * 0.1;
    }

    resultado.innerHTML = `Tu peso ideal aproximado es <strong>${pesoIdeal.toFixed(2)} kg</strong>.`;
}

// FIN EJERCICIO 11