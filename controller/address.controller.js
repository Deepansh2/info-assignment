const db = require("../model");
const Address = db.address;


exports.create = async(req,res) =>{

    try{
    const addressObj = {
        employeeId : req.body.employeeId,
        address : req.body.address,
        contactNo : req.body.contactNo
    }

    const address = await Address.create(addressObj);
    return res.status(201).send(address)
}catch(err){
    console.log("Error while creating address",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}