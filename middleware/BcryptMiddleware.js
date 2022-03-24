const bcrypt = require('bcryptjs')

const encrypt = async (password) =>{
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const compare = async( passwordPlain, hashpassword)=>{
return await bcrypt.compare(passwordPlain, hashpassword)
}

module.exports = {encrypt, compare};