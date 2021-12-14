import {loadDB} from '../utils/db.js'
const model = {
        loadAbility : async()=>{
            const sqlstr=`select *from tblAbilities`
            const result = await loadDB.load(sqlstr)
            return result.recordset
        }
}
export  const modelAbility = model;