// const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define('Driver', {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
          },
         name : {
            type : DataTypes.STRING,
            allowNull : false
          },
         gender : {
           type : DataTypes.STRING,
           allowNull : false
         },
         createdAt : {
           type : DataTypes.DATE,
           allowNull : true
         },
         updatedAt : {
           type : DataTypes.DATE,
           allowNull : true
         }
    }, {
        tableName : 'driver'
    })

    return Driver;
}