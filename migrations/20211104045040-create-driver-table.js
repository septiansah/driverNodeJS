'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     
     await queryInterface.createTable('driver', { 
       id: {
         type : Sequelize.INTEGER,
         primaryKey : true,
         autoIncrement : true,
         allowNull : false
       },
      name : {
         type : Sequelize.STRING,
         allowNull : false
       },
      gender : {
        type : Sequelize.STRING,
        allowNull : false
      },
      createdAt : {
        type : Sequelize.DATE,
        allowNull : false
      },
      udpatedAt : {
        type : Sequelize.DATE,
        allowNull : false
      }
      
      });
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('driver');
    
  }
};
