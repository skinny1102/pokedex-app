import express from 'express'
import pokemonController from '../controller/pokemonController.js';
import typePokemonController from '../controller/typePokemonController.js';
import abilityController from '../controller/abilityController.js'
const router = express.Router();

router.get('/',pokemonController.getindexPokemon)
router.get('/name',pokemonController.searchNamePokemon)
router.get('/type',typePokemonController.getType)
router.get('/ability',abilityController.getAbility)
router.get('/search',pokemonController.seachAvanced)
router.get('/countPokemon',pokemonController.getCountPokemon)
router.get('/allPokemon',pokemonController.getAllPokemon)
router.get('/:id' ,pokemonController.pokemonid)

export default router;