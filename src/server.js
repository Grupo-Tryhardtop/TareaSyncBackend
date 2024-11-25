// server.js
import express from "express";
import { getFuncionarios } from "./services/funcionarios.js";
import { getUsers } from "./services/users.js";
import { getFilterVisitante } from "./services/filtrarPerso.js";

const app = express();
const port = 3000;
const host = "localhost";

// Ruta para obtener los visitantes
app.get("/api/funcionarios", async (req, res) => {
    try {
        const funcionarios = await getFuncionarios();
        res.json(funcionarios); // Devuelve los visitantes en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get("/api/users", async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users); // Devuelve los visitantes en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta dinámica para filtrar por cédula
// app.get("/api/filtrarVisita/:cedula", async (req, res) => {
//     try {
//         const { cedula } = req.params; // Obtén la cédula desde los parámetros de la URL
//         const persona = await getFilterVisitante(cedula); // Pasa la cédula como argumento
//         res.json(persona); // Devuelve los resultados
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// Iniciar el servidor
app.listen(port, host, () => {
    console.log(`Servidor escuchando en http://${host}:${port}`);
});
