import { pool } from "../database/connectionPostgreSQL.js";

export const getFilterVisitante = async (cedula) => {
    try {
        const result = await pool.query(`SELECT * FROM visitantes WHERE cedula = $1`, [cedula]); // Parámetros preparados
        return result.rows;  // Devuelve los resultados
    } catch (error) {
        console.error(error);
        throw new Error("Error al consultar los visitantes");
    }
};
