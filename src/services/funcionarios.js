import { pool } from "../database/connectionPostgreSQL.js";

export const getFuncionarios = async () => {
    try {
        const result = await pool.query("SELECT * FROM personal ORDER BY id asc");
        return result.rows;  // Devuelve los resultados en formato JSON
    } catch (error) {
        console.error(error);
        throw new Error("Error al consultar los visitantes");
    }
};
