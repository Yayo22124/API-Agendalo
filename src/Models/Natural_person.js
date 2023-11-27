//Elemento del ORM que permitirá difinir los tipos de datos de las propiedades (columnas de la base de datos)

import { DataTypes } from "sequelize";
import Person from "./Person.js";
import database from '../Config/database.js';

const Natural_person = database.define("tbb_natural_person",
{
    //Razón social
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
        type: DataTypes.STRING(50),
        allowNull: false
    }
   
}
);

//Person.hasOne(Natural_person)
Natural_person.belongsTo(Person, { foreignKey: 'personId' })

export default Natural_person;
 