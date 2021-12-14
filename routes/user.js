import express from 'express'
const router = express.Router();
import userController from '../controller/userController.js'
import pokemonController from '../controller/pokemonController.js';
// router.get('/' ,pokemonController.index)

router.get('/' ,userController.indexAdmin)
router.get('/login' ,userController.getindexloginAdmin)
router.post('/login' ,userController.loginAdmin)

router.get('/pokemon',pokemonController.index)

router.get('/pokemon/add',pokemonController.indexAddpokemon)
router.post('/pokemon/add',pokemonController.Addpokemon)
router.delete('/pokemon/:id',pokemonController.deletePokemon)

export default router;