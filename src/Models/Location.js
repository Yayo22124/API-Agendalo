import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Location = db.define('tbb_category', {
    latitud: {
        type: DataTypes.STRING,
        allowNull: false
    },
    length: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
})


export default Location