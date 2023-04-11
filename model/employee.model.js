



module.exports = (sequelize,Sequelize) =>{

    const Employee = sequelize.define("employee",{
        employeeId : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : Sequelize.STRING(50),
            allownull:false
        },
        experience:{
            type : Sequelize.INTEGER,
            allownull : false
        }
    })
    return Employee;
}