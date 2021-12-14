import {modelPokemon} from '../models/pokemonModel.js'
import {modelCategory} from '../models/categoryModel.js'
import {modelAbility} from '../models/abilityModel.js'
import {modelType} from '../models/typeModel.js'
class pokemonController{
        // [GET] //admin/pokemon
      async  index(req, res){
        const result = await modelPokemon.AllPokemon();
        
        res.render('vwAdmin/pokemonAll',{ layout:"layoutAdmin",pokemon:result })
            // const recordTotal = await modelPokemon.countAllPokemon();
            // const numberofPages = 8;
            // const total = recordTotal[0].total

            // const nPages = Math.ceil(total/numberofPages)

            // var page = +req.query.page ||1;
  
            // if(page<0 ||page>nPages){
            //     page=1;
            // }
            // const startRow = (page-1) *numberofPages
            // const endRow =page*numberofPages 

            // const result = await modelPokemon.pageAllPokemon(startRow,endRow);
            // const nPages = 40;
            // Phân trang
            // const pageItem = [];
            // const pg = 4;
            // const disableditem= {
            //     value:'...',
            //     isActive : false,
            //     isDisabled:true
            // }
            //     if(nPages<pg){
            //         for(let i=1;i<=nPages;i++){
            //             const item ={
            //                 value:i,
            //                 isActive : i===page
            //             }
            //             pageItem.push(item)
            //         }
                   
            //     }
            //     if(nPages>pg){
            //         if(page<=pg){
            //             for(let i=(pg-(pg-1));i<=pg;i++){
            //                 const item ={
            //                     value:i,
            //                     isActive : i===page
            //                 }
            //                 pageItem.push(item)
            //             }
            //             pageItem.push(disableditem)

            //         }     
            //         if(page>pg){
            //             pageItem.push(disableditem)
            //             for(let i=page-3;i<=page;i++){
            //                 const item ={
            //                     value:i,
            //                     isActive : i===page
            //                 }
            //                 pageItem.push(item)
            //             }
            //             pageItem.push(disableditem)
            //         }
            //     }
                        

            // res.render('vwAdmin/pokemonAll',{ layout:"layoutAdmin",pokemon:result
            //     // ,
            //     // pageItem ,
            //     // prev:page-1,
            //     // next:page+1,
            //     // go_prev : page >1,
            //     // go_next: page<nPages
            // })
        }
        //[GET] pokemon/:id (Detail Pokemon)
       async pokemonid(req,res){
            const id = req.params.id
            const result = await modelPokemon.detailsPokemon(id)
            res.render('detailspokemon',{detailsPokemon:result[0]})
        }

        async searchNamePokemon(req,res){
            const keyword = req.query.keyword
            const result = await modelPokemon.searchPokemonName(keyword)
            res.json(result)
        }
        //[GET] pokemon
        async getindexPokemon(req,res){
          res.render('pokemon')
        }
        //[GET]pokemon
        async getAllPokemon(req,res){
            const result = await modelPokemon.AllPokemon();
            console.log(result)
            res.json(result)
        }
        async indexAddpokemon(req,res,next){
            const category = await modelCategory.loadCategory();
            const ability = await modelAbility.loadAbility()
            const type = await modelType.loadType();
            res.render("vwAdmin/addPokemon",{layout:'layoutAdmin',category,ability,type}) 
        }
        async Addpokemon(req,res,next){
            const resultLast = await modelPokemon.banghicuoiPokemon();
            const idLast = resultLast[0].idPokemon
            const idPokemon = idLast+1
            var err = []
            const {namePokemon,
                height,weight ,hp ,attack,defendse ,specailAttack ,specailDefendse ,
                speed ,description ,image ,idCategory ,
                idType1 ,idAbility} = req.body
                // if(idType2==0){Type2 ="NULL"}
            if(namePokemon==""){err.push({msg:"Tên trống"})}
            if(height==""){err.push({msg:"Chiều cao trống"})}
            if(weight==""){err.push({msg:"Weight trống"})}
            if(hp==""){err.push({msg:"HP trống"})}
            if(attack==""){err.push({msg:"Attack trống"})}
            if(defendse==""){err.push({msg:"Defendse trống"})}
            if(specailAttack==""){err.push({msg:"SpecailAttack trống"})}
            if(specailDefendse==""){err.push({msg:"SpecailDefendse trống"})}
            if(speed==""){err.push({msg:"Speed trống"})}
            if(description==""){err.push({msg:"Description trống"})}
            if(image==""){err.push({msg:"Image trống"})}
            if(idCategory==""){err.push({msg:"idCategory trống"})}
            if(idType1==""){err.push({msg:"idType1 trống"})}
            if(idAbility==""){err.push({msg:"idAbility trống"})}
            if(err==""){
                try {
                    await modelPokemon.addPokemon(idPokemon,namePokemon,
                        height,weight ,hp ,attack,defendse ,specailAttack ,specailDefendse ,
                        speed ,description ,image ,idCategory ,
                        idType1 ,idAbility)   
                        res.json("Thành công")
                } catch (error) {
                    console.log(error);
                    res.json("Lỗi")
                }
            }else{
                const category = await modelCategory.loadCategory();
                const ability = await modelAbility.loadAbility()
                const type = await modelType.loadType();
                res.render("vwAdmin/addPokemon",{layout:'layoutAdmin',err,category,ability,type}) 
             
            }
               
               
        }
       /// [DELETE] admin/pokemon/:id
        async deletePokemon(req,res,next){
                const id = req.params.id
                try {
                  await modelPokemon.deletePokemon(id)  
                  res.redirect('/admin/pokemon')
                } catch (error) {
                    res.json(error)
                }
       }
        
}

export default new pokemonController();