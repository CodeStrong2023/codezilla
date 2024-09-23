package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.estudiantes;

public interface EstudianteRepositorio extends JpaRepository<estudiantes, Integer> {

}