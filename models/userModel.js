import {loadDB} from '../utils/db.js'
const model = {
    selectUser: async(username,password)=>{
        const sqlstr=`select *from tblAccount where username='${username}' and password='${password}'`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
    changepassword: async(username,password)=>{
        const sqlstr=`update  tblAccount
            set password='${password}'
            where username='${username}'`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
}
export const modelUser = model;