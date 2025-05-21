// EJERCICIO 2
function ejercicio2Bucles() {
    document.body.innerHTML =
        `
    <h2>Ejercicio 2</h2>
    <button onclick="patron()">Mostrar Patrón</button>
    <pre id="salida"></pre>
    `
}

function patron() {
    let resultado = "";

    for (let x = 5; x > 0; x--) {
        for (let j = x; j >= 1; j--) {
            resultado += j;
        }
        resultado += "\n"; // usar \n para saltos de línea en HTML
    }

    document.getElementById("salida").textContent = resultado;
}

// FIN EJERCICIO 2

// EJERCICIO 3
function ejercicio3Bucles() {
    document.body.innerHTML =
        `
    <h2>Ejercicio 3</h2>
    <button onclick="rombo()">Mostrar Rombo</button>
    <pre id="rombo"></pre>
    `
}

function rombo() {
    let n = 5; // Altura del centro del rombo
    let resultado = "";

    // Parte superior
    for (let i = 1; i <= n; i++) {
        resultado += " ".repeat(n - i); // espacios para centrar los asteriscos
        resultado += "*".repeat(2 * i - 1); // cantidad de asteriscos
        resultado += "\n"; // usar \n para saltos de línea en HTML
    }

    // Parte inferior
    for (let i = n - 1; i >= 1; i--) {
        resultado += " ".repeat(n - i); // espacios para centrar los asteriscos
        resultado += "*".repeat(2 * i - 1); // cantidad de asteriscos
        resultado += "\n";  // usar \n para saltos de línea en HTML
    }

    document.getElementById("rombo").textContent = resultado;
}

// FIN EJERCICIO 3

// EJERCICIO 7

function ejercicio7Bucles() {
    document.body.innerHTML =
        `
    <h2>Generador de Tablas de Multiplicar</h2>

    <form name="rango">
        <label for="inicio">Desde (1-10):</label>
        <input type="number" id="inicio" name="inicio" min="1" max="10">
        <br><br>

        <label for="fin">Hasta (1-10):</label>
        <input type="number" id="fin" name="fin" min="1" max="10">
        <br><br>

        <button type="button" onclick="generarTablas()">Mostrar Tablas</button>
    </form>
    <br>
    <hr>
    <br>

    <div id="resultado"></div>
    `
}

function generarTablas() {
    const inicio = parseInt(document.rango.inicio.value);
    const fin = parseInt(document.rango.fin.value);
    const resultado = document.getElementById("resultado");

    let contenido = "";
    for (let i = inicio; i <= fin; i++) {
        contenido += `<h3>Tabla del ${i}</h3>`;
        for (let j = 1; j <= 10; j++) {
            contenido += `${i} * ${j} = ${i * j}<br>`;
        }
        contenido += "<br>";
    }
    resultado.innerHTML = contenido;
}

// FIN EJERCICIO 7  

