const Sequelize = require("sequelize")
const dbConfig = require("../config/db.config")

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.user,
    dbConfig.password,
    {
        host : dbConfig.host,
        dialect : dbConfig.dialect
    }
)

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.employee = require("./employee.model")(sequelize,Sequelize)
db.address  = require("./address.model")(sequelize,Sequelize)

module.exports = db;