package utn.estudiantes.servicio;

import utn.estudiantes.modelo.estudiantes;
import java.util.List;

public interface IEstudianteServicio {
    List<estudiantes> listarEstudiantes();
    estudiantes buscarEstudiantePorId(Integer id_estudiante);
    void guardarEstudiante(estudiantes estudiante);
    void eliminarEstudiante(estudiantes estudiante);
}
