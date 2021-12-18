import {modelType} from '../models/typeModel.js'
class typeController{
    //[GET] /pokemon/type
        async getType (req,res,next){
          const result = await modelType.loadType();
            res.json(result)
        }
}
export default new typeController()