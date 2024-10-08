from usuario_dao import UsuarioDAO
from logger_base import log
from Usuario import Usuario 

opcion = None
while opcion != 5:
    print('Opciones:')
    print('1. Listar Usuarios')
    print('2. Agregar Usuario')
    print('3. Modificar Usuario')
    print('4. Eliminar Usuario')
    print('5. Salir')
    opcion = int(input('Digite la opción (1-5): '))

    if opcion == 1:
        usuarios = UsuarioDAO.seleccionar()
        for usuario in usuarios:
            log.info(usuario)

    elif opcion == 2:
        username_var = input('Ingrese su usuario: ')
        password_var = input('Ingrese su contraseña: ')
        usuario = Usuario(None, username_var, password_var)
        usuario_insertado = UsuarioDAO.insertar(usuario)
        log.info(f'Usuario ingresado: {usuario_insertado}')

    elif opcion == 3:
        id_usuario_var = int(input('Ingrese el id del usuario a modificar: '))
        username_var = input('Ingrese el usuario a modificar: ')
        password_var = input('Ingrese la contraseña a modificar: ')
        usuario = Usuario(id_usuario_var, username_var, password_var)
        usuario_actualizado = UsuarioDAO.actualizar(usuario)
        log.info(f'Usuario actualizado: {usuario_actualizado}')

    elif opcion == 4:
        id_usuario_var = int(input('Ingrese el id del usuario a eliminar: '))
        usuario = Usuario(id_usuario_var, None, None)
        usuario_eliminado = UsuarioDAO.eliminar(usuario)
        log.info(f'Usuario eliminado: {usuario_eliminado}')

else:
    log.info('Saliste del programa')
