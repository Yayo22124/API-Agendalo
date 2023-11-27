// Permite definir los tipos de datos de las propiedades

import { BOOLEAN, DataTypes } from "sequelize";

import database from "../Config/database.js";

const Person = database.define("tbb_people", {
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
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("Masculino", "Femenino", "No Binario"),
        allowNull: false,
        
    },
    title:{
        type: DataTypes.STRING(10),
        allowNull: false,
    }
})
let number;

// Person - User
// Person.hasMany(User, { foreignKey: 'personaID' });



export default Person;