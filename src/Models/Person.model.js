// Permite definir los tipos de datos de las propiedades

import { BOOLEAN, DataTypes } from "sequelize";

import User from "./user.model";
import database from "../Config/database";

const Person = database.define("tbb_users", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKEy: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false

    }
})


// Person - User
Person.hasMany(User, { foreignKey: 'personaID' });



export default Person;