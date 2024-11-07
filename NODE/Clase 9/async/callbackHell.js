function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('blablabla');
        callbackHablar()

    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1500)

}

// funcion recursiva
function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        callback(nombre, callback);
    }
}

console.log('Iniciando proceso...');

// CallbackHell

// hola('Danny', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 hablar(function () {
//                     adios(nombre, function () {
//                         console.log("Terminando el proceso...");
//                     });
//                 });
//             });
//         });
//     });
// });

hola('Danny', function(nombre){
    conversacion(nombre, 4, function(){
        console.log('Ternimando el proceso...')
    });
});
