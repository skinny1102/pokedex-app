import {modelPokemon} from '../models/pokemon.js'
class pokemonController{
        // [GET] //
      async  index(req, res){
            const result = await modelPokemon.all('');
            res.render('home',{pokemon:result})
        }
        //[Get] pokemon/:id
        pokemonid(req,res){
         
            res.render('detailspokemon')
        }
}

export default new pokemonController();