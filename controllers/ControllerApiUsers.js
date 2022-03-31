//Require modules
const userModel = require('../database/models/user')



const controllerApi =  {
    index: async (req, res, next)=>{
       await userModel.findAll()
        .then((users)=>{ 
            let respuesta = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: 'api/users' 
                },
                data: users

            }
            res.json(respuesta)
            
        })
        /* res.json('hello world api/user') */
        next();
   },
   profile: async (req, res)=>{
       await userModel.findOne({where:{ id_users: req.params.id}})
       .then((user)=> {
           console.log(user)
           return res.json(user)
       })
   }
}
module.exports = controllerApi