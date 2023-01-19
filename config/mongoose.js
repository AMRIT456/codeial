const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');
const db=mongoose.connection;
db.on('err',console.error.bind(console,"error connecting to mongodb"));
db.once('open',function(){
    console.log('connected to db :: MongoDB');
});
<<<<<<< HEAD
module.exports=db;
=======
module.exports=db;
>>>>>>> 319221a7e23df3cad8f0cf8b3148209cd477894d
