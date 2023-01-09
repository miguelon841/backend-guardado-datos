const user = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt  = require('bcryptjs');
const secret_key  = 'secretkey123456';

exports.saveUser = (req,res, next) =>{
    const newUser = {
        name    : req.body.name,
        dateBirth   : req.body.dateBirth,
        email   : req.body.email,
        tel: req.body.tel,
        sign: req.body.sign
    }

    user.create ( newUser, (err,  usr)=> {
        console.log(err);
        if(err && err.code == 11000)  return res.status(500).send('User already exists');
        if(err) return res.status(500).send('Server Error');
        //Response
        res.send({usr});
    })
}

exports.getUser = (req,res,next) => {
    const userData = {
        email   : req.body.email,
        tel: req.body.tel
    }
    user.findOne({email:userData.email,tel:userData.tel},(err,usr)=>{
        console.log(err);
        if(err) return res.status(500).send('Server error');
        if(!usr){
            res.status(200).send({message: 'Something wrong'});
        }else{
            console.log(usr);
            const userReturn = {
                name    : usr.name,
                dateBirth   : usr.dateBirth,
                email   : usr.email,
                tel: usr.tel,
                sign: usr.sign
            }
            res.send(userReturn);  
        }
    })
}