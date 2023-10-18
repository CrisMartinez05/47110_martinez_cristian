const punto = ".";
const blanco = " ";
let nombreUsuario = prompt("Por favor ingrese su nombre.");
let peso = 0;
let edad = 0;

while (nombreUsuario == "") {
    alert("Debe ingresar un nombre válido.");
    nombreUsuario = prompt("Por favor ingrese su nombre.");
}
alert("Buenos días Sr/a " + nombreUsuario + punto);

edad = parseInt(prompt("Ingrese su edad."));

alert("La edad ingresada es" + blanco + edad + blanco + "años" + punto);

peso = parseInt(prompt("Ahora ingrese su peso en kilos."));

alert("El peso ingresado es" + blanco + peso + blanco + "kilos" + punto);

let condicion = prompt("Indiquenos su condición. Digite 1 para Hombre - 2 para Mujer y 0 para salir");
while(condicion!= "0"){
    switch (condicion) {
        case "1":
            alert("Hola Hombre!!");
            //function imbHombre();
            break;
        case "2":
            alert("Hola Mujer!!");
            //function imbMujer();
            break;
        default:
            alert("Digite una opción válida.");
            break;
    }
    condicion=prompt("Indiquenos su condición. Digite 1 para Hombre - 2 para Mujer y 0 para salir");
}
    alert("Hasta luego.");





