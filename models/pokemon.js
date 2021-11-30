import {loadDB} from '../utils/db.js'
const model = {
    all:()=>{
        return loadDB.load('select *from tblPokemon')
    },
}
export const modelPokemon = model;