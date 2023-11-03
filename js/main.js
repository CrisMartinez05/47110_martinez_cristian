const punto = ".";
const blanco = " ";
let nombreUsuario;
let peso = 0;
let edad = 0;
let nivelActividad;
let resultadoImb;
let reqCalorico;

function imbHombre() {
    if (edad > 60) {
        resultadoImb = peso * 13.5 + 487;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 30) {
        resultadoImb = peso * 11.6 + 879;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 18) {
        resultadoImb = peso * 15.3 + 679;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 9) {
        resultadoImb = peso * 17.5 + 651;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else {
        alert("Su metabolismo basal no se debe calcular.");
    }

    nivelActividad = prompt("Indique su nivel de actividad: \n 1 generalmente inactivo (Sentado), \n 2 levemente activo(Caminatas), \n 3 moderadamente activo (Ejercicio 2 a 3 veces por semana), \n 4 Activo (Ejerc. más de 3 veces por semana), \n 5 Muy activo (Ejerc. todos los días)");
    switch (nivelActividad) {
        case "1":
            reqCalorico = resultadoImb * 1.2;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "2":
            reqCalorico = resultadoImb * 1.3;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "3":
            reqCalorico = resultadoImb * 1.4;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "4":
            reqCalorico = resultadoImb * 1.5;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "5":
            reqCalorico = resultadoImb * 1.7;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        default:
            alert("Digite una opción válida.");
            break;
    }

}

function imbMujer() {
    if (edad > 60) {
        resultadoImb = peso * 10.5 + 596;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 30) {
        resultadoImb = peso * 8.7 + 829;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 18) {
        resultadoImb = peso * 14.7 + 479;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else if (edad > 9) {
        resultadoImb = peso * 12.2 + 746;
        alert("Su metabolismo basal es de" + blanco + resultadoImb.toFixed() + blanco + "calorías" + punto);
    } else {
        alert("Su metabolismo basal no se debe calcular.");
    }
    nivelActividad = prompt("Indique su nivel de actividad: \n 1 generalmente inactivo (Sentado), \n 2 levemente activo(Caminatas), \n 3 moderadamente activo (Ejercicio 2 a 3 veces por semana), \n 4 Activo (Ejerc. más de 3 veces por semana), \n 5 Muy activo (Ejerc. todos los días)");
    switch (nivelActividad) {
        case "1":
            reqCalorico = resultadoImb * 1.2;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "2":
            reqCalorico = resultadoImb * 1.3;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "3":
            reqCalorico = resultadoImb * 1.4;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "4":
            reqCalorico = resultadoImb * 1.5;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        case "5":
            reqCalorico = resultadoImb * 1.7;
            alert("Según su nivel de actividad declarado debería consumir" + blanco + reqCalorico.toFixed() + blanco + "calorías al día" + punto);
            break;
        default:
            alert("Digite una opción válida.");
            break;
    }
}

class Usuario {
    constructor(nombre, edad, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = parseFloat(peso);
    }
}

nombreUsuario = prompt("Por favor ingrese su nombre.");

while (nombreUsuario == "") {
    alert("Debe ingresar un nombre válido.");
    
    nombreUsuario = prompt("Por favor ingrese su nombre.");
}
alert("Buenos días Sr/a " + nombreUsuario + punto);

edad = parseInt(prompt("Ingrese su edad."));

while(edad<9){
    alert("Su metabolismo basal no se debe calcular.");
    alert("Hasta luego.");

    nombreUsuario = prompt("Por favor ingrese su nombre.");
    while (nombreUsuario == "") {
        alert("Debe ingresar un nombre válido.");
        nombreUsuario = prompt("Por favor ingrese su nombre.");
    }
    alert("Buenos días Sr/a " + nombreUsuario + punto);
    
    edad = parseInt(prompt("Ingrese su edad."));
}
alert("La edad ingresada es" + blanco + edad + blanco + "años" + punto);

peso = parseInt(prompt("Ahora ingrese su peso en kilos."));

alert("El peso ingresado es" + blanco + peso + blanco + "kilos" + punto);

let condicion = prompt("Indiquenos su condición. Digite 1 para Hombre - 2 para Mujer y 0 para salir");
while (condicion != "0") {
    switch (condicion) {
        case "1":
            imbHombre();
            break;
        case "2":
            //alert("Hola Mujer!!");
            imbMujer();
            break;
        default:
            alert("Digite una opción válida.");
            break;
    }
    condicion = prompt("Indiquenos su condición. Digite 1 para Hombre - 2 para Mujer y 0 para salir");
}
alert("Hasta luego.");





