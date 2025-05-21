// EJERCICIO 1
function ejercicio1Condicional() {
    document.body.innerHTML =
        `
    <h2>Ejercicio 1</h2>
    <small>(Foto del Pseudocódigo)</small>
    <p>ALGORITMO (NO programa) con introducción de 2 números. 
        Sacar por pantalla cual es el mayor. 
        Cambiar en un papel y con lápiz, el pseudocódigo donde aparece XXX</p>
    <img src="./imagenes/ejercicio1Condicional.png" alt="Imagen del Pseudocódigo ">
    `
}

// EJERCICIO 4
function ejercicio4Condicional() {
    document.body.innerHTML =
        `
    <form>
        <h1>Igualdad de dos números</h1>
        <label>Número 1</label>
        <input type="number" id="num1">
        <br><br>
        <label>Número 2</label>
        <input type="number" id="num2">
        <br><br>
        <button type="button" onclick="igualdad()">Verificar Igualdad</button>
        <p id="salida"></p>
    </form>
    `
}

// funcion para mostrar la igualdad de dos números
function igualdad() {

    const num1 = document.getElementById("num1"); // obtener el valor del primer número
    const num2 = document.getElementById("num2"); // obtener el valor del segundo número

    if (num1.value > num2.value) {
        document.getElementById("salida").innerHTML = `El número <strong>${num1.value}</strong> es mayor que <strong>${num2.value}</strong>`;
    } else if (num1.value < num2.value) {
        document.getElementById("salida").innerHTML = `El número <strong>${num1.value}</strong> es menor que <strong>${num2.value}</strong>`;
    } else {
        document.getElementById("salida").innerHTML = `El número <strong>${num1.value}</strong> es igual que <strong>${num2.value}</strong>`;
    }
}
// FINAL DEL EJERCICIO 4

//-----------------------------------

// EJERCICIO 5

function ejercicio5Condicional() {
    document.body.innerHTML =
        `
    <h1>¿Por qué el código esta en el body?</h1>
    <p>Porque si no, no se ejecutaria de manera correcta.</p>
    <p>El código JavaScript está dentro del

        <body> para asegurarse de que los elementos del DOM (como &lt;p id= &quot;salida&quot;&gt;) ya estén cargados
            cuando el script se ejecute.
    </p>
    <p>Cuando se escribe código JavaScript dentro de una página web, se puede colocar en diferentes partes del archivo:
        en la parte de arriba (&lt;head&gt;) o dentro del cuerpo de la página (&lt;body&gt;).</p>
    <p>Pero hay algo importante que tener en cuenta: el navegador lee el contenido de arriba hacia abajo, así que si el
        JavaScript está al principio (en &lt;head&gt;) puede intentar usar elementos como botones o párrafos que todavía
        no han aparecido en la pantalla. Eso puede causar errores porque el navegador aún no ha “dibujado” esos
        elementos.</p>
    <p>Por eso, es mejor poner el código JavaScript dentro del &lt;body&gt; o al final de la página. Así me aseguro de
        que todo el contenido ya esté cargado y el código funcione sin problemas.</p>
    `
}

// FINAL DEL EJERCICIO 5
//-----------------------------------

// EJERCICIO 7

function ejercicio7Condicional() {
    document.body.innerHTML =
        `
    <h2>Ejercicio 7</h2>
    <small>(Foto del Pseudocódigo)</small>
    <p>Si un alumno es de FP y tiene más de 18 años, Sí tiene acceso al portal web. (por pantalla: Bienvenid@) 
Si un alumno es de FP y NO tiene más de 18 años, NO tiene acceso al portal web.</p>
    <img src="./imagenes/NoOp.jpg" alt="Imagen del Pseudocódigo ">
    `
}
// FINAL DEL EJERCICIO 7
//-----------------------------------

// EJERCICIO 9

function ejercicio9Condicional() {
    document.body.innerHTML =
        `
    <h2>Ejercicio 9</h2>
    <small>(Foto del Pseudocódigo)</small>
    <p>Realizar programa optimizado del ejercicio condicionales 7.</p>
    <img src="./imagenes/Op.jpg" alt="Imagen del Pseudocódigo ">
    `
}
// FINAL DEL EJERCICIO 9
//-----------------------------------



// EJERCICIO 10 

function ejercicio10Condicional() {
    document.body.innerHTML =
        `
    <form>
        <h1>Verificar Edad</h1>
        <label>Edad</label>
        <input type="number" id="edad">
        <br><br>
        <button type="button" onclick="verificarEdad()">Verificar</button>
        <p id="resultado"></p>
    </form>
    `
}

function verificarEdad() {
    const edad = parseInt(document.getElementById("edad").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(edad)) {
        resultado.innerHTML = "Por favor, ingrese una edad válida.";

    } else if (edad < 1 || edad > 120) {
        resultado.innerHTML = "Edad fuera de rango. Ingrese una edad entre 1 y 120.";

    } else if (edad >= 18) {
        resultado.innerHTML = "Sí tiene permiso de acceso.";

    } else {
        resultado.innerHTML = "No tiene permiso de acceso.";

    }
}
// FINAL EJERCICIO 10
//--------------------------------------

// EJERCICIO 11

function ejercicio11Condicional() {
    document.body.innerHTML =
        `
    <h2>Calculadora de Descuento - Agencia de Viajes</h2>

<label for="origen">Ciudad de Origen:</label>
<input type="text" id="origen" placeholder="Ej: Palma"><br><br>

<label for="destino">Ciudad de Destino:</label>
<input type="text" id="destino" placeholder="Ej: Barcelona"><br><br>

<button onclick="calcularDescuentoViaje()">Calcular Descuento</button>

<p id="resultado"></p>
    `
}

function calcularDescuentoViaje() {
    let origen = document.getElementById("origen").value.toLowerCase();
    let destino = document.getElementById("destino").value.toLowerCase();
    let descuento = 0;
    let sms = "";

    if (origen === "palma") {
        if (destino === "barcelona") {
            descuento = 5;
        } else if (destino === "madrid") {
            descuento = 10;
        } else if (destino === "valencia") {
            descuento = 15;
        } else {
            sms = "No hay descuento para ese destino.";
        }

        if (descuento > 0) {
            sms = "El descuento para tu viaje es del " + descuento + "%.";
        }
    } else {
        sms = "El descuento solo aplica si la ciudad de origen es Palma.";
    }

    document.getElementById("resultado").textContent = sms;
}
// FINAL EJERCICIO 11
//-------------------------------------

// EJERCICIO 14

function ejercicio14Condicional() {
    document.body.innerHTML =
        `
    <h2>¿Cuántos días tiene el mes?</h2>

<label for="mes">Introduce el número del mes (1 al 12): </label>
<input type="number" id="mes" min="1" max="12">
<button onclick="verificarMes()">Verificar</button>

<p id="resultado"></p>
    `
}

function verificarMes() {

    const mes = parseInt(document.getElementById("mes").value)
    const resultado = document.getElementById("resultado")

    if (isNaN(mes) || mes < 1 || mes > 12) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un número válido entre 1 y 12.";
    } else if (mes === 2) {
        document.getElementById("resultado").innerHTML = "El mes 2 tiene 28 días.";
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        document.getElementById("resultado").innerHTML = "El mes " + mes + " tiene 30 días.";
    } else {
        document.getElementById("resultado").innerHTML = "El mes " + mes + " tiene 31 días.";
    }
}
// FINAL DEL EJERCICIO 14
//-------------------------------------

// EJERCCICIO 16

function ejercicio16Condicional() {
    document.body.innerHTML =
        `
    <h2>Consulta los días del mes</h2>
    <label for="mes">Introduce el número del mes (1 al 12):</label>
    <input type="number" id="mes" min="1" max="12">
    <button type="button" onclick="consultarMes()">Consultar</button>

    <p id="resultado"></p>    
    `
}

function consultarMes() {
    let mes = parseInt(document.getElementById('mes').value);
    let resultado = '';

    if (isNaN(mes) || mes < 1 || mes > 12) {
        resultado = 'Número inválido. Por favor introduzca un número del 1 al 12.';
    } else {
        if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
            resultado = 'Este mes tiene 31 días.';
        } else if (mes === 2) {
            resultado = 'Este mes puede tener 28 o 29 días.';
        } else {
            resultado = 'Este mes tiene 30 días.';
        }
    }

    document.getElementById('resultado').textContent = resultado;
}
// FINAL DEL EJERCICIO 16
//------------------------------------