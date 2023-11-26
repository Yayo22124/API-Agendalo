import { DataTypes, Sequelize } from "sequelize";

import Location from "./Location.js";
import database from "../Config/database.js";

const Address = database.define('tbb_address', {
    
    superior_adress: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true 
    },
}, {
    timestamps: true
});

//Location.hasOne(Address)
Address.belongsTo(Location, { foreignKey: 'locationId' })


export default Address;