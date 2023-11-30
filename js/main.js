const punto = ".";
const blanco = " ";
let nombre;
let altura;
let peso;
let edad;
let alturaCuadrado;
let imc;
let nivelActividad;
let resultadoImb;
let reqCalorico;
let condicion;

//FUNCIONES

function inicializarSelectNivel(){
    const select=document.getElementById("selectNivelActividad");
    select.addEventListener("change",()=>{

        const nivel=select.value;

        switch(condicion){
            case "hombre":
               switch (nivel) {
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
          };
          break;
          case "mujer":
            switch (nivel){
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
                };
            break;
                };
       
    });
};

function inicializarSelectCondicion(){
    const select=document.getElementById("selectCondicion");

    select.addEventListener("change",()=>{

        condicion = select.value;

        switch(condicion){
            case "hombre":
                imbHombre();
                break;
                case "mujer":
                    imbMujer();
                    break;
        }
    })
};

function calculoIMC(){
        imc = parseFloat(peso) / alturaCuadrado;
        console.log(imc.toFixed(2));
       
};

//CALCULO DE IMB Y REQUERIMIENTO CALORICO SEGUN SEXO Y NIVEL DE ACTIVIDAD DECLARADO 
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
  
};

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
  
};
 
function ingresarDatos() {

    // INGRESAR DATOS

    //NOMBRE
    const inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("change", () => {
        nombre=inputNombre.value;
        console.log(nombre);
        alert("Buen día "+nombre+".");
    });
     
        //EDAD

        const inputEdad = document.getElementById("edad");
        inputEdad.addEventListener("change", () => {
            edad=inputEdad.value;
            console.log(edad);
        });
        
        //ALTURA
        
        const inputAltura = document.getElementById("altura");
        inputAltura.addEventListener("change", () => {
            altura=inputAltura.value;
            console.log(altura);   

            alturaCuadrado = parseFloat(altura)*parseFloat(altura);
            console.log(alturaCuadrado.toFixed(2));
            
            });       
       
        //PESO
    
        const inputPeso = document.getElementById("peso");
        inputPeso.addEventListener("change", () => {
            peso=inputPeso.value;
            console.log(peso);
        });

        let nuevoUsuario = {
            nombre: nombre,
            edad: edad,
            peso: peso,
          
        };      
        
};
    
    
    
    //INICIO DEL PROGRAMA
    
    //DECLARACION DE ARRAY
    const Usuarios = [];
    
    ingresarDatos();
    //console.log(nuevoUsuario);
    
    //CALCULO INDICE MASA CORPORAL
    const boton = document.getElementById("imc");
    boton.addEventListener("click", ()=>{
        calculoIMC();
        let padre=document.getElementById("resultadoIMC");
        let p=document.createElement("p");
        p.innerHTML=`<p>Según los datos ingresados su <b>IMC</b> (Índice de Masa Corporal) es <b>${imc.toFixed(2)}</b></p>`;
        padre.innerHTML="";
        padre.appendChild(p);
        
    });

    //CALCULO DEL METABOLISMO BASAL
    inicializarSelectCondicion();

    //CALCULO DEL REQUERIMIENTO CALORICO
    inicializarSelectNivel();
    
    //SOLICITUD DE CONDICION
    /*
    let condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");
    
    while (condicion != "1" && condicion != "2") {
        
        alert("OPCION INGRESADA INCORRECTA");
        
        condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");
    };
    switch (condicion) {
        case "1":
            imbHombre();
            break;
            case "2":
                imbMujer();
                break;
                
            };
            
            
            let continuar = prompt("Cómo desea continuar?\n Digite una de las siguientes opciones:\n 1 Realizar otra consulta.\n 0 Salir.")
            
            while (continuar !== "0") {
                
                switch (continuar) {
                    case "1":
            
        agregarUsuario();
        
            //SOLICITUD DE CONDICION
            
            condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");

            while (condicion != "1" && condicion != "2") {

                alert("OPCION INGRESADA INCORRECTA");

                condicion = prompt("Indiquenos su condición.\nDigite:\n 1 para Hombre\n 2 para Mujer");
            }
            switch (condicion) {
                case "1":
                    imbHombre();
                    break;
                    case "2":
                        imbMujer();
                    break;

                };

                continuar = prompt("Cómo desea continuar?\n Digite una de las siguientes opciones:\n 1 Realizar otra consulta.\n 0 Salir.")
                
            }
        }
        alert("Hasta luego.")
        */
       


       
       
           
           // Usuarios.push(nuevoUsuario);
           
           // alert("Usuario: " + nuevoUsuario.nombre + ",\nEdad: " + nuevoUsuario.edad + " años,\nPeso: " + nuevoUsuario.peso + " kilos,\nIMC: " + nuevoUsuario.imc.toFixed(2) + ".\nDatos guardados correctamente.");
           