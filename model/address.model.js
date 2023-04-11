

module.exports = (sequelize,Sequelize) =>{


    const Address = sequelize.define("address",{
        addressId : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        employeeId : {
            type : Sequelize.INTEGER,
            allownull : false
        },
        address : {
            type : Sequelize.STRING(100),
            allownull : false
        },
        contactNo : {
            type : Sequelize.INTEGER,
            allownull : false
        }
    })
    return Address
}