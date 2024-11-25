// database/connectionPostgreSQL.js
import pg from "pg";

export const pool = new pg.Pool({
    host: "aws-0-us-west-1.pooler.supabase.com",
    port: 5432,
    database: "tareasync",
    user: "postgres.ewzllibrwxggbrttprgy",
    password: "#cJSAm-qF3TyX9g"
});
