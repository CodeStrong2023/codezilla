// // this === global = true

// // Mostrar en consola
// console.log();

// // Mostrar mensaje de error
// console.error();

// // Ejecutar un codigo despues de un intervalo de tiempo
// setTimeout(() => {});

// // Ejecutar codigo cada intervalo de tienmpo
// setInterval(() => {});

let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3){
        clearInterval(intervalo); // detener la funcion
    }
    i++;
},1000);

// // Da prioridad de ejecucion a una funcion asincronica
// setImmediate(() => {});

setImmediate(() => {
    console.log('Saludo inmediato');
});

// require();

//console.log(__dirname);
console.log(__filename);

global.miVariable = 'mi variable global';
console.log(miVariable);

// console.log(global);

