function checkMiddleware(req, res, next){
    if(req.session.usersLogged != undefined){
        next();
    }else{res.render('login.ejs',{withMessage: 'Ya estas Registrado'})}
};
module.exports= checkMiddleware;