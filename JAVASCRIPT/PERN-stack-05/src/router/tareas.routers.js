import {Router} from "express";
import {listarTareas, listarTarea, crearTareas, actualizarTareas, eliminarTareas, } from "../controllers/tareas.controllers.js"

const router = Router();

router.get("/tareas", listarTareas);
router.get("/tareas/:id", listarTarea);

router.post("/tareas", crearTareas);
router.put("/tareas/:id", actualizarTareas);
router.delete("/tareas/:id", eliminarTareas);

export default router;