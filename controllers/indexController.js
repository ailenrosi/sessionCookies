const {validationResult} = require("express-validator");
const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/data.json"), "utf-8"));

module.exports = {
    index: (req, res) => res.render("index"),
    enviar: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            const {name, color, email, edad, recordar} = req.body
           
           req.session.user = {
                name: /* usuario. */name,
                email: /* usuario. */email,
                color: /* usuario. */color,
                edad: /* usuario. */edad
            }
            if(recordar){

                res.cookie("Datos", req.session.user, {maxAge:10000*60})
            }
            return res.redirect("/")
        }else{
            res.render("index", {errors: errors.mapped(), old: req.body})
        }
    },
    siguiente: (req, res) => {
        return res.render("siguiente")
    },
    olvidar: (req, res) => {
        req.session.destroy();
        res.cookie("Datos", null, {maxAge: -1})
        return res.redirect("/")
    }
}