import {modelPokemon} from '../models/pokemon.js'
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
            const pageItem = [];

            for(let i=1;i<=nPages;i++){
                const item = {
                    value:i,
                    isActive : i===page
                }
                pageItem.push(item)
            }
            res.render('home',{ pokemon:result,
                pageItem ,
                prev:page-1,
                next:page+1,
                go_prev : page >1,
                go_next: page<nPages
            })
        }
        //[Get] pokemon/:id
        pokemonid(req,res){
         
            res.render('detailspokemon')
        }
}

export default new pokemonController();