package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.estudiantes;
import utn.estudiantes.repositorio.EstudianteRepositorio;

import java.util.List;

@Service
public class EstudianteServicio implements IEstudianteServicio{

    @Autowired
    private EstudianteRepositorio estudianteRepositorio;


    @Override
    public List<estudiantes> listarEstudiantes() {
        List<estudiantes> estudiantes = estudianteRepositorio.findAll();
        return estudiantes;
    }

    @Override
    public estudiantes buscarEstudiantePorId(Integer id_estudiante) {
        estudiantes estudiante = estudianteRepositorio.findById(id_estudiante).orElse(null);
        return estudiante;
    }

    @Override
    public void guardarEstudiante(estudiantes estudiante) {
        estudianteRepositorio.save(estudiante);
    }

    @Override
    public void eliminarEstudiante(estudiantes estudiante) {
        estudianteRepositorio.delete(estudiante);
    }
}
