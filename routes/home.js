import express from 'express'
import pokemonController from '../controller/pokemonController.js';
const router = express.Router();

// router.get('/' ,pokemonController.index)
router.get('/' ,pokemonController.getindexPokemon)
export default router;