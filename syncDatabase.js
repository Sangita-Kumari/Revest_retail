
const { sequelize } = require("./src/models");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();

