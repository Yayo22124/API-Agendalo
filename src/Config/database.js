import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: "src/.env" });

const DATABASE_URL = 'mysql://kvx3v3cfuvv7af63nd3f:pscale_pw_Lxg3KPCo0obg5Ari8cuTYsUCG2vf23Wg82voFjeOwYo@aws.connect.psdb.cloud/mydatabase?'

const database = new Sequelize(DATABASE_URL, {
    dialect: 'mysql',
    define: {
        timestamps: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorAliases: false,
    dialectOptions: {
        ssl: {
            "rejectUnauthorized": true
        }
    }
});

export default database;