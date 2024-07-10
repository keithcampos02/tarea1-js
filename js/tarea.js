// 1-

function saludar(params) {


    console.log("hola Keith")

}

saludar();


let nombre = prompt("Ingresa tu nombre:");




// 2-

let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
    console.log("Eres mayor de edad. Bienvenido")
    mensajeexitoso();

} else {
    console.log("eres menor de edad")
    mensajefallido();
}

function mensajeexitoso() {

    console.log("acceso permitido.");
}

function mensajefallido() {

    console.log("acceso denegado.");
}


// 3-

let libro = {

    Titulo: "El poder de la mente subconciente",
    Autor: "Joseph Murphy"
    // anio:1963,

}

let mensaje = ("el libro fue escrito por:" + libro.Autor)

console.log(mensaje)



// 4-

let cadena = prompt("ingrese una cadena:");

if (cadena === "") {
    console.log("la cadena esta vacia ");

} else {
    console.log("la cadena no esta vacia")
}



// 5-

let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));

switch (dia) {
    case 1:
        console.log("Es Lunes ");
        break;
    case 2:
        console.log("Es Martes ");
        break;
    case 3:
        console.log("Es Miercoles ");
        break;


    case 4:
        console.log("Es Jueves ");
        break;


    case 5:
        console.log("Es Viernes ");
        break;


    case 6:
        console.log("Es Sabado ");
        break;


    case 7:
        console.log("Es Domingo ");
        break;


    default:
        console.log("no corresponde a un dia de la semana"); }




// 6-

let pokemones = [


"pikachu",
"BULBASAUR",
"CHRIZARD",
"SNORLAX",
"GENGAR",
"TOGEPI",
"PSYDUCK",
"MEOWTH",
"RATTATA",
"DITTO"
 ];

 console.log("el pokemon numero 7 es:"+pokemones[7])
 console.log("el pokemon numero 0 es:"+pokemones[0])




// 7-

let numero = parseFloat(prompt("Ingresa un número:"));

if (numero >= 1 && numero <= 10) {
    console.log("el numero"+numero+"esta entre 1 y 10")
} else {
    console.log("el numero"+numero+"no esta entre 1 y 10")
}




// 8-

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

let suma = numero1+numero2;

console.log("la suma es igual:"+suma)






// 9-

const pi = 3.14;
console.log("el valor de pi es :"+pi);


// 10-

let edaad = parseInt(prompt("Ingresa tu edad:"));
let nacionalidad = prompt("Ingresa tu nacionalidad:");

function puedevotar (edaad,nacionalidad){

if (edaad >= 18 && (nacionalidad === "peruana" || nacionalidad === "colombiana")) {
   return true; 
} else {
   return false;
}
}

if (puedevotar(edaad, nacionalidad)) {
    console.log("puede votar");
} else {
    console.log("no puedes votar");
}



// 11-
let eedad = parseInt(prompt("Ingresa tu edad"));

let resultado = verificaredad("eedad");

function verificaredad(eedad) {

    if (eedad >= 6 && eedad <= 18) {
        console.log("estas en edad escolar")
    } else if (eedad >= 65) { 
        console.log("eres adulto mayor")
    }else {
console.log("No eres escolar ni adulto mayor ")
    }

}


// tarea js lista 1