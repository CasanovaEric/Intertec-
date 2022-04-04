let formulario = document.querySelector(".form-user-register");
let firstName = formulario.querySelector("input[name='firstName']")
firstName.label="Nombre"
let lastName = formulario.querySelector("input[name='lastName']")
lastName.label="Apellido"
let userName = formulario.querySelector("input[name='userName']")
userName.label = "Nombre de usuario"
let email = formulario.querySelector("input[name='email']")
email.label = "Email"
let dateOfBirth = formulario.querySelector("input[name='dateOfBirth']")
dateOfBirth.label = "Fecha de Nacimiento"
let addres = formulario.querySelector("input[name='addres']")
addres.label = "Dirección"
let zipCode = formulario.querySelector("input[name='zipCode']")
zipCode.label = "Código Postal"
let password = formulario.querySelector("input[name='password']")
password.label = "Contraseña"
let passwordConfirm = formulario.querySelector("input[name='passwordConfirm']")
passwordConfirm.label = "Confirmar Contraseña"
let upload = formulario.querySelector("input[name=' uploadImage']")
upload.label = "Subir imagen"
//let vendedor = formulario.querySelector("input[name='vendedor']")
//vendedor.label = "Rol"
let elementos=[firstName,lastName,userName,email,dateOfBirth,addres,zipCode,password,passwordConfirm,upload]
let errores=[]



//Validaciones Generales de campos vacíos
formulario.onsubmit=(e)=>{
    validarVacio=(element) => {
        if (element.value == "")
        {
            errores.push("El campo '"+element.label +"' está vacío. Debe completarlo para continuar")
            return true   
        }
        else{
            return false
        }

    }
    //validaciones específicas por campo
    elementos.forEach(element2 => {
        //console.log(validarVacio(element2))
        if (validarVacio(element2)  == false){
            //console.log('slf');
            if (element2.name == userName.name){
                //console.log('es unsermae');
                if (/[^A-Za-z0-9]+/.test(userName.value)==true){
                    errores.push("El campo '" + element2.label+"' debe contener solamente letras y números");   
                }
            }
            if (element2.name == email.name){
                //console.log('es email');
                if (/.+@.+\..+/.test(element2.value)==false){
                    errores.push("El campo '" + element2.label+"' debe ser una dirección de email válida");   
                }
            }
            if (element2.name == addres.name){
                if (/.* \d+/.test(element2.value)==false){
                    errores.push("El campo '" + element2.label+"' debe ser una dirección válida. Ej (Nombre Calle + Altura)");   
                }
            }
            if (element2.name == zipCode.name){
                if (/\d+/.test(element2.value)==false){
                    errores.push("El campo '" + element2.label+"' debe tener solo numeros. Ej (1408");
                }
            }
            if (element2.name == password.name){
                if (/[^A-Za-z0-9]+/.test(userName.value)==true){
                    errores.push("El campo '" + element2.label+"' debe contener solamente letras y números");
                }
            }
            if (element2.name == passwordConfirm.name){
                if ((password.value==passwordConfirm.value) == false){
                    errores.push("El campo '" + element2.label+"' debe ser igual al campo 'Contraseña'");
                }
            }
        }
        });
    let ulErrores=document.querySelector(".errores ul");
    ulErrores.innerHTML='';
    errores.forEach(error =>{
        ulErrores.innerHTML += `<li>${error}</li>`


    });

    if (errores.length > 0){
        e.preventDefault()
    }
    errores=[]
    
    }
