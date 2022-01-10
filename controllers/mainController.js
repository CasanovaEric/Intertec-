const controller= {
    index: (req,res)=>{
        return res.render('../views/index.ejs')
    },

    register: (req, res)=>{
        return res.render('../views/register.ejs')
    },

    login:(req, res)=>{
        return res.render('../views/login.ejs')
    },
    
    confirmOrder: (req, res)=>{
        return res.render('../views/confirm-order.ejs')
    },
    carrito: (req, res)=>{
        return res.render('../views/carrito.ejs')
    },
    products: (req, res)=>{
        return res.render('../views/products.ejs')
    }
}


//exportando modulo
module.exports= controller;