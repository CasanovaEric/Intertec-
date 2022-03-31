const bcrypt = require('bcryptjs')

const encrypt = async (password) =>{
    const hash = await bcrypt.hash(password, 10)
    return hash
};

const compare = async( password, passwordConfirm)=>{
return await bcrypt.compare(password, passwordConfirm)
}

module.exports = {encrypt, compare};