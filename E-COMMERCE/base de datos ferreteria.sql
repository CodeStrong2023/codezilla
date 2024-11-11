const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./basedeDatosFerreteria.db', (err) => {
    if (err) {
        console.error('Error al abrir la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

// Crear tablas si no existen
db.serialize(() => {
    // Crear tabla de usuarios
    db.run(`
        CREATE TABLE IF NOT EXISTS Usuarios (
            id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            direccion TEXT,
            telefono TEXT NOT NULL,
            contrasena TEXT NOT NULL
        )
    `, (error) => {
        if (error) {
            console.error('Error al crear tabla Usuarios:', err.message);
        } else {
            console.log('Tabla Usuarios creada o ya existe.');
        }
    });

    // Crear tabla de productos
    db.run(`
        CREATE TABLE IF NOT EXISTS Productos (
            id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio REAL NOT NULL,
            stock INTEGER NOT NULL
        )
    `, (error) => {
        if (error) {
            console.error('Error al crear tabla Productos:', error.message);
        } else {
            console.log('Tabla Productos creada o ya existe.');
        }
    });

    // Crear tabla de carrito
    db.run(`
        CREATE TABLE IF NOT EXISTS Carrito (
            id_carrito INTEGER PRIMARY KEY AUTOINCREMENT,
            id_usuario INTEGER,
            id_producto INTEGER,
            id_cantidad INTEGER NOT NULL,
            fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
            FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
        )
    `, (error) => {
        if (error) {
            console.error('Error al crear tabla Carrito:', error.message);
        } else {
            console.log('Tabla Carrito creada o ya existe.');
        }
    });

    // Crear tabla de pedidos
    db.run(`
        CREATE TABLE IF NOT EXISTS Pedido (
            id_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
            id_usuario INTEGER,
            fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            id_total REAL NOT NULL,
            estado TEXT NOT NULL,
            FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
        )
    `, (error) => {
        if (error) {
            console.error('Error al crear tabla Pedido:', error.message);
        } else {
            console.log('Tabla Pedido creada o ya existe.');
        }
    });
});

// Asegúrate de cerrar la conexión cuando sea necesario
process.on('exit', () => {
    db.close((error) => {
        if (error) {
            console.error('Error al cerrar la base de datos:', error.message);
        } else {
            console.log('Base de datos cerrada.');
        }
    });
});


