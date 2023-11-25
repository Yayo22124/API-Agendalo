//Elemento del ORM que permitirá difinir los tipos de datos de las propiedades (columnas de la base de datos)
import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Natural_person = db.define("tbb_natural_person",
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

export default Natural_person;
 