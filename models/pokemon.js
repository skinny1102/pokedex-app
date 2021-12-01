import {loadDB} from '../utils/db.js'
const model = {
     all: async ()=>{
        const sqlstr=`select 
        idPokemon, tblPokemon.name , gender,height,weight,hp,attack,defendse,specailAttack,specicalDefense,speed,description,image,tblCategory.name as nameCategory
        from tblPokemon ,tblCategory
        where tblPokemon.idCategory=tblCategory.idCategory
        `
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
}
export const modelPokemon = model;