module.exports = (req,res,next)=>{
    if(req.cookies.Datos){
        req.session.user = req.cookies.Datos;
    }
    next()
}