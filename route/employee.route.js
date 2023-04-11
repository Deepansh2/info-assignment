const employeeController = require("../controller/employee.controller");


module.exports = (app) =>{

    app.post("/info/api/employee",employeeController.create)
    app.get("/info/api/employee/:id",employeeController.findOne);
    app.get("/info/api/employee",employeeController.listOfEmployee)
    app.delete("/info/api/employee",employeeController.delete);
    app.put("/info/api/employee",employeeController.update)
}