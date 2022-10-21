const mysql=require("mysql");


var db;

connectdatabase= () => {
    if (!db) {
        db=mysql.createConnection({
            host:"localhost",
            database:"paiesa_facturation",
            user: "root",
            password:"",
        });
        db.connect(function (err){
            if (!err) {
                console.log("la base de donneé est connecté"); 

            }else{
                console.log("Erreur de connexion ")
            }
        })
    }
    return db;
};
module.exports=connectdatabase()