const fs = require('fs');

// Leemos el archivo
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

// leer(__dirname + '/archivo.txt', console.log); ya no se usa esta sintaxis


// Escribimos en el archivo
function escribir(ruta, contenido){
    fs.writeFile(ruta, contenido, function (err){
        if (err){
            console.log('No se ha podido  escribir', err);
        } else {
            console.log('Se ha podido  escribir');
        }
    })
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);

}

borrar(`${__dirname}/archivo1.txt`);

//escribir(`${__dirname}/archivo1.txt`,'Hola mundo, soy un nuevo archivo', console.log); // sintaxis ES6

// leer(`${__dirname}/archivo.txt`, console.log); // sintaxis ES6
