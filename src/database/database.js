import Sequelize from "sequelize";
import {
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_PASSWORD,
    MYSQL_USER,
    MYSQL_PORT
} from "../config.js";

const database = MYSQL_DATABASE;
const username = MYSQL_USER;
const password = MYSQL_PASSWORD;
const host = MYSQL_HOST;
const port = MYSQL_PORT;
console.log(database,username,password,host)

export const sequelize = new Sequelize(database, username, password, {
    host,
    port: port,
    dialect: "mysql",
    dialectOptions: {
        connectTimeout: 5000,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 10000,
        idle: 5000,
    },
});
