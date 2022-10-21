const db=require("../config/db");
const slugify = require("slugify");

exports.create = (req, res) => {
    const { nom_societe } = req.body;
    // simple validation
    if (!nom_societe) return res.status(400).json({ msg: "svp entre le nom de la societé" });

    //sql pour client

    let sqlCheck = "Select * FROM client WHERE slug = ?";
    let sqlInsert = "INSERT INTO client SET ?";

    const slug = slugify(nom_societe).toLowerCase();

    db.query(sqlCheck, slug, (err) => {

       if (slug.length > 0) return res.status(400).json({ msg: "le client existe dans la base de donnée" });
       
        const data = {

            nom_societe: nom_societe.toLowerCase(),
           
        }

        db.query(sqlInsert, data, (err, result) => {

            if (err) return res.status(400).json({ msg: "impossible d' inserer le client "+err });
                     
            return res.status(200).json({ data });
        });
    });

};