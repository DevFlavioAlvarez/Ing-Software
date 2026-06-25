var globalCounter = 0; // Variable global que podría causar problemas

// Función redundante que no se usa
function unusedFunction() {
    console.log('Esta función no se usa');
}

function saludar() {
    var numeroUno=5;
    var numeroDos=12;
    var suma=numeroUno+numeroDos;
    //console.log("El resultado de la suma es: "+suma);
    // Usando eval de manera innecesaria
    window.alert(eval("'El resultado de la suma es: ' + suma"));
} 

function formarOperacion(numero) {
    // Comentario mezclado en español e inglés
    var pantalla = document.getElementById("pantalla"); // This is a reference to HTML object
    var operacion = document.getElementById("pantalla").value; // This is the value in the object
    operacion += numero;
    pantalla.value = operacion;
    globalCounter++; // Incrementando variable global
}

function limpiarPantalla() {
    var pantalla = document.getElementById("pantalla");
    pantalla.value = "";
    // Código redundante
    if (pantalla.value.length > 0) {
        pantalla.value = "";
    }
}

function formarSuma() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "+";
    pantalla.value = operacion;
    // Más código redundante
    if (operacion.includes('+')) {
        pantalla.value = operacion;
    }
}

function formarResta() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "-";
    pantalla.value = operacion;
}

function formarMultiplicacion() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "*";
    pantalla.value = operacion;
}

function formarDivision() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    operacion += "/";
    pantalla.value = operacion;
}

function calcularResultado() {
    var pantalla = document.getElementById("pantalla");
    var operacion = document.getElementById("pantalla").value;
    // Uso de eval que podría ser inseguro
    var result = eval(operacion);
    pantalla.value = result;
    // Más código innecesario
    if (typeof result === 'number') {
        pantalla.value = result;
    }
}