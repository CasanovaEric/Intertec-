let formulario = document.querySelector(".form-user-register");
let productName = formulario.querySelector("input[name='name_products']")
productName.label="Nombre Producto"
let price = formulario.querySelector("input[name='price']")
price.label="Precio"
let nameAtribute = formulario.querySelector("input[name='nameAtribute']")
price.label="Atributo"
let valueAtribute = formulario.querySelector("input[name='valueAtribute']")
price.label="Valor del atributo"
let upload = formulario.querySelector("input[name='uploadImage_products']")
upload.label = "upload"
let elementos=[productName,price,nameAtribute,valueAtribute,upload]
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
            console.log('no errores');
            
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


