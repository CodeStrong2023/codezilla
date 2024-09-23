package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.estudiantes;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {

    @Autowired
    private EstudianteServicio estudianteServicio;
    private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);

    String nl = System.lineSeparator();

    public static void main(String[] args) {
        logger.info("Iniciando La Aplicacion Sistema Estudiantes... ");
        SpringApplication.run(EstudiantesApplication.class, args);
        logger.info("Aplicacion Finalizada");
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info(nl + "Ejecutando el metodo run de Spring" + nl);
        var salir = false;
        var consola = new Scanner(System.in);
        while (!salir) {
            mostrarMenu();
            salir = ejecutarOperaciones(consola);
            logger.info(nl);
        }
    }

    private void mostrarMenu() {
        logger.info("""
                SISTEMA DE ESTUDIANTES
                1. Listar Estudiantes
                2. Buscar Estudiante
                3. Agregar Estudiante
                4. Modificar Estudiante
                5. Eliminar Estudiante
                6. Salir
                
                ELIGE UNA OPCION:  """
        );
    }

    private boolean ejecutarOperaciones(Scanner consola) {
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion) {
            case 1 -> { // LISTAR ESTUDIANTES
                logger.info(nl + "Listado De Estudiantes: " + nl);
                List<estudiantes> estudiantes = estudianteServicio.listarEstudiantes();
                estudiantes.forEach((estudiante -> logger.info(estudiante.toString() + nl)));
            }
            case 2 -> { // BUSCAR ESTUDIANTES POR ID
                logger.info(nl + "Ingrese El Id Del Estudiante Para Buscar: " + nl);
                var id_estudiante = Integer.parseInt(consola.nextLine());
                estudiantes estudiante =
                        estudianteServicio.buscarEstudiantePorId(id_estudiante);
                if (estudiante != null)
                    logger.info("Estudiante Encontrado: " + estudiante + nl);
                else
                    logger.info("Estudiante No Encontrado");
            }
            case 3 -> { // AGREGAR ESTUDIANTE
                logger.info("Agregar estudiante: " + nl);
                logger.info("Nombre: ");
                var nombre = consola.nextLine();
                logger.info("Apellido: ");
                var apellido = consola.nextLine();
                logger.info("Telefono: ");
                var telefono = consola.nextLine();
                logger.info("Email: ");
                var email = consola.nextLine();
                // CREAR EL OBJETO ESTUDIANTE SIN ID
                var estudiante = new estudiantes();
                estudiante.setNombre(nombre);
                estudiante.setApellido(apellido);
                estudiante.setTelefono(telefono);
                estudiante.setEmail(email);
                estudianteServicio.guardarEstudiante(estudiante);
                logger.info("Estudiante agregado: " + estudiante + nl);
            }
            case 4 -> { // MODIFICAR ESTUDIANTE
                logger.info("Modificar Estudiante: " + nl);
                logger.info("Ingrese el id del estudiante: ");
                var id_estudiante = Integer.parseInt(consola.nextLine());
                estudiantes estudiante = estudianteServicio.buscarEstudiantePorId(id_estudiante);
                if (estudiante != null) {
                    logger.info("Nombre: ");
                    var nombre = consola.nextLine();
                    logger.info("Apellido: ");
                    var apellido = consola.nextLine();
                    logger.info("Telefono: ");
                    var telefono = consola.nextLine();
                    logger.info("Email: ");
                    var email = consola.nextLine();

                    estudiante.setNombre(nombre);
                    estudiante.setApellido(apellido);
                    estudiante.setTelefono(telefono);
                    estudiante.setEmail(email);

                    estudianteServicio.guardarEstudiante(estudiante);
                    logger.info("Estudiante Modificado: " + estudiante + nl);
                } else {
                    logger.info("Estudiante No Encontrado: " + id_estudiante + "\n");
                }

            }
            case 5 -> { // ELIMINAR ESTUDIANTES
                logger.info("Eliminar Estudiante: " + nl);
                logger.info("Digite el id del estudiante: ");
                var id_estudiante = Integer.parseInt(consola.nextLine());
                var estudiante = estudianteServicio.buscarEstudiantePorId(id_estudiante);
                if (estudiante != null) {
                    estudianteServicio.eliminarEstudiante(estudiante);
                    logger.info("Estudiante Eliminado: " + estudiante + nl);
                } else {
                    logger.info("Estudiante No Encontrado: " + id_estudiante + nl);
                }
            }
            case 6 -> { // SALIR
                logger.info(" - Salir - " + nl + nl);
                salir = true;
            }
            default -> logger.info("Opción No Reconocida" + nl);
        }
        return salir;
    }
}