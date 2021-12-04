import {modelPokemon} from '../models/pokemonModel.js'
class pokemonController{
        // [GET] //
      async  index(req, res){
            const numberofPages = 8;

            const page = +req.query.page ||1;
            if(page<0){
                page=1;
            }

            const startRow = (page-1) *numberofPages
            const endRow =page*numberofPages 

            const result = await modelPokemon.pageAllPokemon(startRow,endRow);
            const recordTotal = await modelPokemon.countAllPokemon();

            const total = recordTotal[0].total
            const nPages = Math.ceil(total/numberofPages)
            // const nPages = 40;
            // Phân trang
            const pageItem = [];
            const pg = 4;
            const disableditem= {
                value:'...',
                isActive : false,
                isDisabled:true
            }
                if(nPages<pg){
                    for(let i=1;i<=nPages;i++){
                        const item ={
                            value:i,
                            isActive : i===page
                        }
                        pageItem.push(item)
                    }
                   
                }
                if(nPages>pg){
                    if(page<=pg){
                        for(let i=(pg-(pg-1));i<=pg;i++){
                            const item ={
                                value:i,
                                isActive : i===page
                            }
                            pageItem.push(item)
                        }
                        pageItem.push(disableditem)

                    }     
                    if(page>pg){
                        pageItem.push(disableditem)
                        for(let i=page-3;i<=page;i++){
                            const item ={
                                value:i,
                                isActive : i===page
                            }
                            pageItem.push(item)
                        }
                        pageItem.push(disableditem)
                    }
                }
                        

            res.render('home',{ pokemon:result,
                pageItem ,
                prev:page-1,
                next:page+1,
                go_prev : page >1,
                go_next: page<nPages
            })
        }
        //[GET] pokemon/:id (Detail Pokemon)
       async pokemonid(req,res){
            const id = req.params.id
            const result = await modelPokemon.detailsPokemon(id)
            console.log(result[0])
            res.render('detailspokemon',{detailsPokemon:result[0]})
        }
}

export default new pokemonController();