import {loadDB} from '../utils/db.js'
const model = {
    pageAllPokemon: async (start,end)=>{
         //Lấy trong views
        const sqlstr=`select *from pokemonall order by idPokemon OFFSET ${start} ROW FETCH NEXT ${end} ROWS ONLY`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
    countAllPokemon: async ()=>{
        const sqlstr=`select COUNT(*) as total from tblPokemon`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
    detailsPokemon:async(id)=>{
        const sqlstr=`select *from pokemonall where idPokemon=${id}`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
    searchPokemonName:async(keyword)=>{
        const sqlstr=`select *from pokemonall where name LIKE N'%${keyword}%'`
        const result = await loadDB.load(sqlstr)
        return result.recordset
    },
     AllPokemon: async ()=>{
        //Lấy trong views
       const sqlstr=`select *from pokemonall`
       const result = await loadDB.load(sqlstr)
       return result.recordset
     },
     banghicuoiPokemon:async()=>{
        const sqlstr=`select top 1 *from tblpokemon ORDER BY idPokemon DESC`
        const result = await loadDB.load(sqlstr)
        return result.recordset
     }
     ,
     addPokemon : async( idPokemon,namePokemon,
			height,weight ,hp ,attack,defendse ,specailAttack ,specailDefendse ,
			speed ,description ,image ,idCategory ,
			idType,idAbility)=>{
            const sqlstr = `exec addPokemon 
                @idPokemon=${idPokemon} ,
                @namePokemon='${namePokemon}',
                @height =${height},
                @weight =${weight} ,
                @hp =${hp} ,
                @attack =${attack},
                @defendse =${defendse},
                @specailAttack =${specailAttack} ,
                @specailDefendse =${specailDefendse} ,
                @speed =${speed} ,
                @description ='${description}',
                @image ='${image}',
                @idCategory=${idCategory} ,
                @idType =${idType} ,
                @idAbility =${idAbility} `
                const result = await loadDB.load(sqlstr)
                return result.recordset
        },
         deletePokemon :async  (id)=>{
                const sqlstr = `exec deletePokemon ${id}`
                const result = await loadDB.load(sqlstr)
                return result.recordset
        },
        editpokemon : async ( idPokemon,namePokemon,
			height,weight ,hp ,attack,defendse ,specailAttack ,specailDefendse ,
			speed ,description ,image ,idCategory ,
			idType,idAbility)=>{
                const sqlstr = `exec updatePokemon 
                @idPokemon=${idPokemon} ,
                @namePokemon='${namePokemon}',
                @height =${height},
                @weight =${weight} ,
                @hp =${hp} ,
                @attack =${attack},
                @defendse =${defendse},
                @specailAttack =${specailAttack} ,
                @specailDefendse =${specailDefendse} ,
                @speed =${speed} ,
                @description ='${description}',
                @image ='${image}',
                @idCategory=${idCategory} ,
                @idType =${idType} ,
                @idAbility =${idAbility} `
                const result = await loadDB.load(sqlstr)
                return result.recordset
        }


}
export const modelPokemon = model;