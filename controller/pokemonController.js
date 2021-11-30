class pokemonController{
        // [GET] //
        index(req, res){
            res.render('home')
        }
        //[Get] pokemon/:id
        pokemonid(req,res){
         
            res.render('detailspokemon')
        }
}

export default new pokemonController();