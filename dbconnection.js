const dbconfigue = require("./db.config");
const sequelize = require("sequelize");

const sequelize1 = new sequelize(dbconfigue.databaseName, dbconfigue.user, dbconfigue.pw,{
    host : dbconfigue.Host,
    dialect : dbconfigue.dialect,
    operatorsAliases : false,

    pool : {
        maximum : dbconfigue.pool.max,
        minimum : dbconfigue.pool.min,
        acquire : dbconfigue.pool.acquire,
        idle : dbconfigue.pool.idle
    }
} );

module.exports = sequelize1;
