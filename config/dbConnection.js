const { Sequelize } = require('sequelize');
const { 
  DB_NAME, 
  DB_USERNAME, 
  DB_PASSWORD, 
  DB_HOST, 
  DB_PORT, 
  DB_POOL_MAX, 
  DB_POOL_MIN, 
  DB_POOL_ACQUIRE, 
  DB_POOL_IDLE 
} = require('./');
const { logger } = require('../helpers/logger');

let sequelize = null;
try {
  sequelize = new Sequelize({
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    dialect: "postgres",
    logging: false,
    pool: {
      max: DB_POOL_MAX,
      min: DB_POOL_MIN,
      acquire: DB_POOL_ACQUIRE,
      idle: DB_POOL_IDLE,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      },
    },
    timezone: 'Asia/Kolkata',
   
  });
  sequelize.authenticate()
    .then(() => {
      logger.info(`DB CONNECTION success`);
    })
    .catch(error => {
      logger.error(`DB CONNECTION ERROR: ${error}`);
    });

} catch (error) {
  logger.error(`DB CONNECTION ERROR: ${error}`);
}

module.exports = sequelize;
