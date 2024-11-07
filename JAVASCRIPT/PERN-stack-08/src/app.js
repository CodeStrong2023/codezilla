import express from "express";
import morgan from "morgan";
import tareasRouters from "./router/tareas.routers.js";
import authRouters from "./router/auth.routers.js"
import cookieParser from "cookie-parser";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => res.json({message: "Bienvenidos a mi proyecto"}));
app.use("/api",tareasRouters);
app.use("/api",authRouters);

app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;
