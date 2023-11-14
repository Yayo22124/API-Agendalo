import dotenv from 'dotenv';
import sequelize from 'sequelize';

dotenv.config({path: "src/.env"});

const database = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASSWORD, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
        operatorAliases: false
    }
});

export default database;