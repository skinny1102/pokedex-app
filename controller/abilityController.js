import {modelAbility} from '../models/abilityModel.js'
class abilityController{
    //[GET] /pokemon/type
        async getAbility (req,res,next){
          const result = await modelAbility.loadAbility();
            res.json(result)
        }
}
export default new abilityController()