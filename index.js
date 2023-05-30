'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];

//

let pistas = [];
let nuevoDisco = {};
let codigosArray = [];
let duracionPista;
let contadorDisco = 0;
let contadorPistas = 0;
let arrayDuraciones = [];
let promedio;
// Función Cargar:
const Cargar = () => {

    contadorDisco += 1
    let nombreDisco = validarString("Ingrese el nombre del disco");
    let autorDisco = validarString("Ingrese el autor del disco");
    let codigoDisco = validarNumber("Ingrese el codigo único del disco");


    nuevoDisco =
    {
        nombre: nombreDisco,
        autor: autorDisco,
        codigo: codigoDisco,
        pistas: [],
    }


    do {


        let nombrePista = validarString("Ingrese el nombre de la pista");


        do {
            duracionPista = parseInt(prompt("Ingrese la duración de la pista"));

            if (duracionPista<0) {
                alert("El valor ingresado debe ser mayor a 0");
                
            }else if(duracionPista>7200){

                alert("El valor ingresado no puede ser mayor a 7200");
            }else if(isNaN(duracionPista)){

                alert("El valor ingresado debe ser un número");
            }


        } while (duracionPista < 0 || duracionPista >= 7200 || isNaN(duracionPista));


        let objetoPista = {
            nombre: nombrePista,
            duracion: duracionPista,

        }




        nuevoDisco.pistas.push(objetoPista)
        contadorPistas += 1


    } while (confirm("¿Desea seguir agregando más pistas?"));
    discos.push(nuevoDisco);
    console.log(contadorDisco);
}



// Función Mostrar:
const Mostrar = () => {



    const promedioDuración = document.createElement("p");

    const cantidadDiscos = document.createElement("p");
    cantidadDiscos.innerText = `Cantidad de discos cargados: ${contadorDisco}`;

    const cantidadPistas = document.createElement("p");
    cantidadPistas.innerText = `El total de pistas cargadas de este disco es de: ${contadorPistas}`;

    const duracionTotal = document.createElement("p");
    duracionTotal.innerText = `La duración total del disco es de`

    const ul = document.createElement("ul");

    const section = document.createElement("section");



    for (let i = 0; i < discos.length; i++) {

        let pistasAux = discos[i].pistas;

        const nombreDisco = document.createElement("h3");
        nombreDisco.innerText = `Nombre del Disco: ${discos[i].nombre}\n`;

        const nombreAutor = document.createElement("p");
        nombreAutor.innerText = `Autor del Disco: ${discos[i].autor}\n`;

        const codigo = document.createElement("p");
        codigo.innerText = `Código unico del Disco: ${discos[i].codigo}\n`;

        const pistas1 = document.createElement("h4");
        pistas1.innerHTML = "Pistas:";


        for (let j = 0; j < pistasAux.length; j++) {



            const pistaNombre = document.createElement("li");
            pistaNombre.innerHTML += `Nombre de la pista: ${pistasAux[j].nombre}\n`;

            const duracionPista = document.createElement("li");
            duracionPista.innerHTML += `Duracion de la pista: \n`;

            const span = document.createElement("span");
            span.innerHTML += pistasAux[j].duracion;

            duracionPista.append(span);



            if (pistasAux[j].duracion > 180) {

                span.classList.add("duracion");
            } else {
                span.classList.add("regular");
            }


            arrayDuraciones.push(pistasAux[j].duracion);
            let suma = 0;
            for (let i in arrayDuraciones) {
                suma += arrayDuraciones[i];
                promedio = suma / arrayDuraciones.length;
                promedioDuración.innerText = `El promedio de duración del disco es de: ${promedio} `;


            }



            ul.append(pistaNombre, duracionPista);




            pistaNombre.classList.add("lista");
            duracionPista.classList.add("lista");
            nombreDisco.classList.add("nombreDisco");
            section.classList.add("seccion");
            pistas1.classList.add("pistas");
            nombreAutor.classList.add("textos");
            codigo.classList.add("textos");
            promedioDuración.classList.add("addText");
            cantidadDiscos.classList.add("addText");
            cantidadPistas.classList.add("addText");



        }


        arrayDuraciones = [];
        discos = [];
        pistas = [];

        section.append(nombreDisco, nombreAutor, codigo, pistas1, ul, cantidadDiscos, cantidadPistas, promedioDuración);
    }


    document.querySelector("#info").append(section);
    contadorPistas = 0;


}



// Todas las funciones que necesites:



function validarString(msg) {

    let str;
    do {

        str = prompt(msg).trim();

        if (str == ("")) {

            alert("Debe ingresar un valor para continuar");
        }

    } while (str == (""));

    return str;
}


//



function validarNumber(msg) {
    let number;

    do {


        number = parseInt(prompt(msg));

        if (number < 1 || number > 999) {
            alert("El numero ingresado no puede ser menor a 1 ni mayor a 999");
        }
        else if (isNaN(number)) {
            alert("El valor ingresado debe ser numérico");
        }
        else if (codigosArray.includes(number) == true) {
            alert("El código ingresado debe ser UNICO por disco");

        }



    } while (number < 1 || number > 999 || isNaN(number) || codigosArray.includes(number) == true);

    codigosArray.push(number)

    return number;




}










//





