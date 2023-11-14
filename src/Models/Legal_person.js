//Elemento del ORM que permitirá difinir los tipos de datos de las propiedades (columnas de la base de datos)
import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Legal_person = db.define("tbb_legal_person",
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
    staring_day:
    {
        type: DataTypes.DATEONLY,
        allowNull: false   
    },
    tax:
    {
        type: DataTypes.INTEGER,
        allowNull: false 
    }
    // Llaves foráneas
    // address:
    // {

    // }
    // natural_person:
    // {

    // },
    // legal_person:
    // {

    // }
}
);

export default Legal_person;
 