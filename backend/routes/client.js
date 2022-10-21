const express =require("express");
const router=express.Router();

const client=require('../controllers/client')


router.post("/create",client.create);



module.exports= router;