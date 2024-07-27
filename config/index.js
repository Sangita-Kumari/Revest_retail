module.exports = {
    PORT: process.env.PORT || '',
    DB_NAME: process.env.DB_NAME ? process.env.DB_NAME : '',
    DB_USERNAME: process.env.DB_USERNAME ? process.env.DB_USERNAME : '',
    DB_PASSWORD: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : '',
    DB_HOST: process.env.DB_HOST ? process.env.DB_HOST : '',
    DB_PORT: process.env.DB_PORT ? process.env.DB_PORT : '',

    DB_POOL_MAX: process.env.DB_POOL_MAX ? process.env.DB_POOL_MAX : 100,
    DB_POOL_MIN: process.env.DB_POOL_MIN ? process.env.DB_POOL_MIN : 0,
    DB_POOL_ACQUIRE: process.env.DB_POOL_ACQUIRE ? process.env.DB_POOL_ACQUIRE : 60000,
    DB_POOL_IDLE: process.env.DB_POOL_IDLE ? process.env.DB_POOL_IDLE : 180 * 1000,

    

}