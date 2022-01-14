function authMiddleware(req, res, next){
    if(req.session.usersLogin != undefined){
        next();
    }else{res.send('esta pagina es solo para Usuarios Registrados')}
};

module.export = authMiddleware;