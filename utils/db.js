import sql from 'mssql'
import config from '../config/config.js'
const pool = await sql.connect(config)
const db = {
   load : async function load(sqlquery) {
        try {
            let result1 = await pool.query(sqlquery)
            return result1
        } catch (err) {
            console.log(err)
        }
    }
}
export const loadDB = db;