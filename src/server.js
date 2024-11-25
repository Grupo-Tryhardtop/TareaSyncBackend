import express from "express";
import cors from "cors";
import morgan from "morgan";
import listEndpoints from "express-list-endpoints"; // Importa la librería
import { getFuncionarios } from "./services/funcionarios.js";
import { getUsers } from "./services/users.js";
// import { getFilterVisitante } from "./services/filtrarPerso.js";

const app = express();
const port = 3000;
const host = "localhost";

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Rutas
app.get("/api/funcionarios", async (req, res, next) => {
    try {
        const funcionarios = await getFuncionarios();
        res.json(funcionarios);
    } catch (error) {
        next(error);
    }
});

app.get("/api/users", async (req, res, next) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

// app.get("/api/filtrarVisita/:cedula", async (req, res, next) => {
//     const { cedula } = req.params;
//     if (!/^\d+$/.test(cedula)) {
//         return res.status(400).json({ error: "Cédula no válida" });
//     }
//     try {
//         const persona = await getFilterVisitante(cedula);
//         res.json(persona);
//     } catch (error) {
//         next(error);
//     }
// });

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

// Mostrar los endpoints disponibles
console.log("Endpoints disponibles:");
console.table(listEndpoints(app));

// Iniciar el servidor
app.listen(port, host, () => {
    console.log(`Servidor escuchando en http://${host}:${port}`);
});
