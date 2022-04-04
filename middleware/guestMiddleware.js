function guestMiddleware(req, res, next){
    if(req.session.usersLogged == undefined){
        next();
    }else{res.render('login.ejs',{message: 'debes loguearte o registrarte para continuar'})}
};
module.exports= guestMiddleware;
//ATENCION, FALTA:
//DEBE REDIRIGIR A LA VISTA DE PERFIL DE USUARIO LOGUEADO