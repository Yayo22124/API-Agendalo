//Elemento del ORM que permitirá difinir los tipos de datos de las propiedades (columnas de la base de datos)

import { DataTypes } from "sequelize";
import Person from "./Person.model.js";
import database from "../Config/database.js"

const Legal_person = database.define("tbb_legal_person",
{
    business_name: 
    {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    rfc:
    {
        type: DataTypes.STRING(13),
        allowNull: false
    },
    //Régimen fiscal 
    tax_regime:
    {
        type: DataTypes.ENUM('Régimen_general', ' Régimen con Fines No Lucrativos'),
        allowNull: false
    },
    giro:
    {
        type: DataTypes.STRING(50),
        allowNull: false   
    },
    sector:
    {
        type: DataTypes.STRING(50),
        allowNull: false   
    },
    starting_day:
    {
        type: DataTypes.DATE,
        allowNull: false   
    },
    tax:
    {
        type: DataTypes.INTEGER,
        allowNull: false 
    }
});

export default Legal_person;
 