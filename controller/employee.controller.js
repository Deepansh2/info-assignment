const db = require("../model");
const Employee = db.employee;


exports.create = async (req,res) =>{

    const employeeObj = {
        name : req.body.name,
        experience : req.body.experience
    }

    try{
    const employee = await Employee.create(employeeObj);
    return res.status(201).send(employee)
    }catch(err){
        console.log("Error while creating employee",err);
        return res.status(500).send({
            message : "Internal server error"
        })
    }
}


exports.update = async (req,res) =>{


    try{
    const employeeObj = {
        name : req.body.name,
        experience : req.body.experience
    }

    await Employee.update(employeeObj,{
        where : {
            employeeId : req.params.id
        }
    })

    const employee = await Employee.findOne({employeeId:req.params.id});
    return res.status(200).send({
        employee : employee,
        message : "Updated Successfully"
    })
}catch(err){
    console.log("Error while updating employee",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}


exports.delete = async (req,res) =>{

    try{
    const employee = await Employee.destroy({employeeId : req.params.id});
    return res.status(200).send({
        employee : employee,
        message : "Deleted Successfully"
    })
}catch(err){
    console.log("Error while deleting employee",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}


exports.findOne = async (req,res) =>{
    
    try{
    const employee = await Employee.findOne({employeeId:req.params.id});
    return res.status(200).send(employee)
    }catch(err){
        console.log("Error while finding One Employee",err);
        return res.status(500).send({
            message : "Internal server error"
        })
    }
}

exports.listOfEmployee =async (req,res) =>{

    try{
    const employees = await Employee.findAndCountAll({
        order: [["employeeId", "ASC"]],
        limit : 2,
        offset : 1,
    })

    return res.status(200).send(employees)
}catch(err){
    console.log("Error while listing employees",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}
