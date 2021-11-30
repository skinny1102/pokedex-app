import express from 'express'
import pokemonController from '../controller/pokemonController.js';
const router = express.Router();

router.get('/' ,pokemonController.index)

export default router;