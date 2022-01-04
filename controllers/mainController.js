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

<<<<<<< HEAD
    productos: (req, res)=>{
        return res.render('../views/motog60s.ejs')
    },

=======
    
>>>>>>> 3cef78d1c11f8a7bec32358d03ef87d0a7bb8664
    carrito: (req, res)=>{
        return res.render('../views/carrito.ejs')
    }
}


//exportando modulo
module.exports= controller;