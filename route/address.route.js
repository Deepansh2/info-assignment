const addressController = require("../controller/address.controller");


module.exports = (app) =>{

    app.post("/info/api/address",addressController.create)
}