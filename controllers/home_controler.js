module.exports.home=function(req,res){
    res.cookie('user_id',25);
    console.log(req.cookies);
    //return res.end('<h1>express is up for codeial</h1>');
    return res.render('home',{
        title:"Home"
    });
}