import { DataTypes } from "sequelize";
import database from "../Config/database.js";

const Location = database.define('tbb_category', {
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