function remembermeMiddleware(req, res, next){
next();

if(req.cookies.rememberme != undefined && req.senssion.usersLogin == undefined){
    let usersJSON= fs.readFileSync('./data/UsersDataBase.json')
              let users;
              if(usersJSON == ""){
                   users = [];
              }else{
                   users = JSON.parse(usersJSON);
              }
              let usersLogin
              for(let i = 0; i< users.length; i++){
                   if(users[i].email == req.cookies.rememberme) {
                         usersLogin = users[i];
                        break;
                    };
                    
                }
    req.session.usersLogin = usersLogin;
    }
};
module.exports = remembermeMiddleware;