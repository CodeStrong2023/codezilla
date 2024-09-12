# Bool contiene los valores True y False
# Los valores numéricos: False para el 0 (cero) y True para los demás valores
valor = 0
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 0.1
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')


# Tipo string -> False para cadenas vacías, True para los demás valores
valor = ''
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = 'Hola'
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')


# Lista -> False para listas vacías, True para listas con al menos un valor
valor = []
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = [2, 3, 4]
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')


# Tupla -> False para tuplas vacías, True para tuplas con al menos un valor
valor = ()
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')

valor = (5,)
resultado = bool(valor)
print(f'valor: {valor}, Resultado: {resultado}')


# Diccionario -> False para diccionarios vacíos, True para diccionarios con al menos un valor
valor = {}
resultado = bool(valor)
print(f'valor de un diccionario vacío: {valor}, Resultado: {resultado}')

valor = {"Nombre": "Juan", "Apellido": "Perez"}
resultado = bool(valor)
print(f'valor de un diccionario con elementos: {valor}, Resultado: {resultado}')


# Sentencias de control con bool
if 1:  # En Python, cualquier número distinto de 0 es evaluado como True
    print('Regresa Verdadero')
else:
    print('Regresa Falso')


# Ciclos
variable = 17
while variable:  # Mientras variable sea distinta de 0
    print('Regresa verdadero')
    break  # Sale del ciclo inmediatamente
else:
    print('Regresa falso')
