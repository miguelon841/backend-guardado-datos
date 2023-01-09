const mongoose = require('mongoose');
const dbUrl = require('./propieties').DB;

module.exports = () =>{
    mongoose.connect(dbUrl)
    .then(() => console.log(`mongo connected on ${dbUrl}`))
    .catch(err => console.log(`Connection has error ${err}`))

    process.on('SIGINT', ()=> {
        mongoose.Connection.close(() => {
            console.log(`Mongo is disconnected`);
            process.exit(0);
        })
    })
}