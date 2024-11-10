create DATABASE ferreteria;
USE ferreteria;
CREATE TABLE Productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL
);
CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    direccion VARCHAR(255),
    telefono VARCHAR(15)NOT NULL
    contrasena VARCHAR(255) NOT NULL
);
CREATE TABLE Carrito (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_producto INT,
    id_cantidad INT NOT NULL,
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);
CREATE TABLE Pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_total DECIMAL(10, 2) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
SHOW TABLES;

INSERT INTO Usuarios (nombre, email, direccion, telefono, contrasena)
VALUES ('Juan Pérez', 'juan.perez@email.com', 'Calle 123', '555-1234', 'password123');
INSERT INTO Productos (nombre, descripcion, precio, stock)
VALUES ('Producto A', 'Descripción del producto A', 100.00, 10);

SELECT Usuarios.nombre, Productos.nombre, Carrito.cantidad
FROM Carrito
JOIN Usuarios ON Carrito.id_usuario = Usuarios.id_usuario
JOIN Productos ON Carrito.id_producto = Productos.id_producto;




