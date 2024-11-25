import { pool } from "../database/connectionPostgreSQL.js";

export const getUsers = async () => {
    try {
        const result = await pool.query("SELECT * FROM users ORDER BY id asc");
        return result.rows;  // Devuelve los resultados en formato JSON
    } catch (error) {
        console.error(error);
        throw new Error("Error al consultar los visitantes");
    }
};
