import Router from "express-promise-router";
import {listarTareas, listarTarea, crearTareas, actualizarTareas, eliminarTareas, } from "../controllers/tareas.controllers.js"
import {isAuth} from "../middlewares/auth.middleware.js"

const router = Router();

router.get("/tareas", isAuth, listarTareas);
router.get("/tareas/:id", isAuth, listarTarea);

router.post("/tareas", isAuth, crearTareas);
router.put("/tareas/:id", isAuth, actualizarTareas);
router.delete("/tareas/:id", isAuth, eliminarTareas);

export default router;