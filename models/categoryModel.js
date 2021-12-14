import {loadDB} from '../utils/db.js'
const model = {
        loadCategory : async()=>{
            const sqlstr=`select *from tblCategory`
            const result = await loadDB.load(sqlstr)
            return result.recordset
        }
}
export  const modelCategory = model;