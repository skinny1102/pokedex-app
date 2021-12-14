import express from 'express'
import pokemonController from '../controller/pokemonController.js';
const router = express.Router();

router.get('/',pokemonController.getindexPokemon)
router.get('/name',pokemonController.searchNamePokemon)
router.get('/allPokemon',pokemonController.getAllPokemon)
router.get('/:id' ,pokemonController.pokemonid)

export default router;