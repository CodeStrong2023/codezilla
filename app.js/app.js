

const sqlite3 = require('sqlite3').verbose();


const baseDeDatos = new sqlite3.Database('./basedeDatosFerreteria.db', (err) => {
    if (err) {
        console.error('Error al abrir la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});


    // Tabla de productos
    baseDeDatos.run(`CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        descripcion TEXT,
        precio REAL
    )`);
    
    // Tabla de usuarios
    baseDeDatos.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT UNIQUE,
        contrasena TEXT
    )`);

module.exports = baseDeDatos;
