import express from 'express'
const router = express.Router();
import userController from '../controller/userController.js'
import pokemonController from '../controller/pokemonController.js';
import {auth} from '../middleware/auth.js'
// router.get('/' ,pokemonController.index)

router.get('/' ,auth,userController.indexAdmin)

router.get('/login' ,userController.getindexloginAdmin)
router.post('/login' ,userController.loginAdmin)
router.get('/logout' ,userController.logout)

router.get('/pokemon',auth,pokemonController.index)
router.get('/pokemon/edit/:id',auth,pokemonController.geteditpokemon)
router.put('/pokemon/edit/:id',auth,pokemonController.editpokemon)

router.get('/pokemon/add',auth,pokemonController.indexAddpokemon)
router.post('/pokemon/add',auth,pokemonController.Addpokemon)
router.delete('/pokemon/:id',auth,pokemonController.deletePokemon)

export default router;