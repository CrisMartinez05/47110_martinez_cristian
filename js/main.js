function imbHombre(){
    if(edad>60){
let resultadoImb = peso*13.5+487;
alert ("Su imb es"+ blanco+ resultadoImb);
    }else if(edad>30){
        let resultadoImb = peso*11.6+879;
        alert ("Su imb es"+ blanco+ resultadoImb);
    }else if(edad>18){
        let resultadoImb = peso*15.3+679;
        alert ("Su imb es"+ blanco+ resultadoImb);
    }else if(edad>9){
        let resultadoImb = peso*17.5+651;
        alert ("Su imb es"+ blanco+ resultadoImb);
    }else{
        alert("No se puede calcular.");
    }
}

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
            //alert("Hola Hombre!!");
            imbHombre();
            break;
        case "2":
            alert("Hola Mujer!!");
            //imbMujer();
            break;
        default:
            alert("Digite una opción válida.");
            break;
    }
    condicion=prompt("Indiquenos su condición. Digite 1 para Hombre - 2 para Mujer y 0 para salir");
}
    alert("Hasta luego.");





