//Require modules
const productModel = require('../database/models/product')
const controllerApiProducts = {
    index: async (req, res, next)=>{
        await productModel.findAll()
         .then((products)=>{ 
             let respuesta = {
                 meta: {
                     status: 200,
                     total: products.length,
                     url: 'api/products' 
                 },
                 data: products
 
             }
             res.json(respuesta)
             
         })
         /* res.json('hello world api/user') */
         next();
    },
    detail: async (req, res)=>{
        await userModel.findOne({where:{ id_products : req.params.id}})
        .then((product)=> {
            console.log(product)
            return res.json(product)
        })
    },

}
module.exports = controllerApiProducts