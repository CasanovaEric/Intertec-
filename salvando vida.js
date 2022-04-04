router.put('/users/edit/:id', usersController.update)

const controller = {
    index: (req, res, next) => {
         res.render('index.ejs')
         next();
    },
    register: (req, res) => {
         res.render('../views/register.ejs')
    },

    login: (req, res) => {
         res.render('login.ejs')
    },
    //Create Method for users; 
    create: async (req, res) => {

         let errors = validationResult(req);
         if (errors.isEmpty()) {
            let user = await userModel.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              userName: req.body.userName,
              email: req.body.email,
              dateOfBirth: req.body.dateOfBirth,
              addres: req.body.addres,
              zipCode: req.body.zipCode,
              rol_users: req.body.vendedor,
              password_users: bcrypt.hashSync(req.body.password, 10),
              passwordConfirm: bcrypt.hashSync(req.body.passwordConfirm, 10),
              image_users: './public/images/users/' + req.file.filename ,
            })
         res.render('login.ejs')
    }else{ 
         res.render('../views/register.ejs', {errors: errors.array(),
         old: req.body})
        
    }

    },
    //Process for Login user
    processLogin: async (req, res) => {
         let errors = validationResult(req);
         if (errors.isEmpty()) {
              const { email, password } = req.body
              const usersLogin = await userModel.findOne({ where: { email } })
              const checkpassword = await compare(password, usersLogin.password_users)
              if (!usersLogin || !checkpassword) {
                   return res.render('login.ejs', { errors: [{ msg: 'credenciales invalidas' }] })
              }

              req.session.usersLogged = usersLogin;
              //req.session.usersLogin.id
              if (req.body.remember != undefined) {
                   res.cookie('recordame', usersLogin.email, { maxAge: 60000 });
              }
              res.render('index.ejs')

         } else {
              return res.render('login.ejs', { errors: errors.errors });
         }
    },
    ProfileUser: async (req, res) => {
         await userModel.findByPk(req.session.usersLogged.id_users)
              .then(function (user) {
                   res.render('profileUser.ejs', { user: user })

              }).catch(error => res.send(error))
    },
   update: (req,res) => {
       let user_id = parseInt(req.params.id);
       console.log("user_id: ", user_id);
      let userUpdate =  userModel
       .update(
           {
              firstName: req.body.firstName, 
              lastName: req.body.lastName,
              dateOfBirth:req.body.dateOfBirth,
           },
           {
               where: {id_users : req.params.id }
           })
           .then(resultado => {
              console.log(resultado);
              //console.log(req.body.firstName, req.body.lastName, req.body.email, req.body.dateOfBirth, req.body.addres, req.body.zipCode)
              return  res.render('login.ejs');
            })
         .catch(error => {
            console.log("SE JO DIO")
            console.log(error)
            res.send(error)
         })
   }

   <form action="<%= user.id_users %>?_method=PUT" method="POST" >