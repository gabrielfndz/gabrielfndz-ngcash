module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,  
      },
      balance: {
        allowNull: false,
        type: Sequelize.REAL,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Accounts');
  },
};