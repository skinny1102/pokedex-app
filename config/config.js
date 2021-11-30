import sql from 'mssql'
import dotenv from 'dotenv'
dotenv.config()
const sqlConfig = {
    user:process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_SERVER,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
        trustServerCertificate: true,
        trustedConnection:true,
        enableArithAprt:true,
        instancename:'SQLEXPRESS',
    
    }
  }
//  async function connectDB(){
//     try {
//      await sql.connect(sqlConfig)
//      console.log('Kết nốt thành công')
//     } catch (err) {
//         console.log('Lỗi rồi má ơiii')
//         console.log(err)
       
//     }
// }
export default sqlConfig;