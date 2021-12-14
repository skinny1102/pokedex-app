import {loadDB} from '../utils/db.js'
const model = {
        loadType : async()=>{
            const sqlstr=`select *from tblType`
            const result = await loadDB.load(sqlstr)
            return result.recordset
        }
}
export  const modelType= model;