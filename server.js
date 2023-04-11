const serverConfig = require("./config/server.config")
const bodyParser = require("body-parser");
const db = require("./model/index")
const express = require("express")
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const Employee = db.employee;
const Address = db.address;
//------------------Seed Data or dummy data--------------
async function init(){

    await db.sequelize.sync({force:true})

    const emply = await Employee.create({
        name : "rahul",
        experience : 1
    })
    const emply1 = await Employee.create({
        name : "pawan",
        experience : 3
    })
    const emply2 = await Employee.create({
        name : "gourav",
        experience : 4
    })
    const emply3 = await Employee.create({
        name : "harsh",
        experience : 4
    })

    const address = await Address.create({
        employeeId : emply.employeeId,
        address : "nehru vihar",
        contactNo : 353454646
    })
    const address1 = await Address.create({
        employeeId : emply.employeeId,
        address : "dayal Pur",
        contactNo : 964946264
    })

    const address2 = await Address.create({
        employeeId : emply1.employeeId,
        address : "bhajanpur",
        contactNo : 856926516
    })
}


init()
Employee.hasMany(Address,{foreignKey : "employeeId"})

require("./route/address.route")(app);
require("./route/employee.route")(app)
app.listen(serverConfig.PORT,()=>{
    console.log("Server is started at Port :",serverConfig.PORT)
})