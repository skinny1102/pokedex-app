import {loadDB} from '../utils/db.js'
const model = {
    pageAllPokemon: async (start,end)=>{
         //Lấy trong views
        const sqlstr=`select *from pokemonall order by idPokemon OFFSET ${start} ROW FETCH NEXT ${end} ROWS ONLY`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
    countAllPokemon: async ()=>{
        const sqlstr=`select COUNT(*) as total from pokemonall`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
    detailsPokemon:async(id)=>{
        const sqlstr=`select *from pokemonall where idPokemon=${id}`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    }
}
export const modelPokemon = model;