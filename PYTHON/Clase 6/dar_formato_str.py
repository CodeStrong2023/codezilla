# Dar formato a un string
nombre = 'Aldana'
edad = 20

mensaje_con_formato = 'Mi nombre es %s y tengo %d años' % (nombre, edad)
print(mensaje_con_formato)

# Crear una tupla
persona = ('Carla', 'Gomez', 5000.00)
mensaje_con_formato = "Hola  %s %s, tu sueldo es %.2f"
print(mensaje_con_formato % persona)


nombre = 'Juan'
edad = 25
sueldo = 3000
mensaje = 'Nombre: {0} Edad: {1} Sueldo: {2:.2f}'.format(nombre, edad, sueldo)
print(mensaje)

diccionario = {
    'nombre': 'Ivan',
    'edad': 35,
    'sueldo': 8000.00
}

mensaje = 'Nombre: {dic[nombre]} Edad: {dic[edad]} Sueldo: {dic[sueldo]:.2f}'.format(dic=diccionario)
print(mensaje)
