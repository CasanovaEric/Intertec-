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
    }
}

module.exports= controller;