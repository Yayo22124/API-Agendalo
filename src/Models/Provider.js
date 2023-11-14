//Elemento del ORM que permitirá difinir los tipos de datos de las propiedades (columnas de la base de datos)
import { DataTypes } from "sequelize";
import db from '../config/db.js';

const Provider = db.define("tbb_provider",
{
    //llave foránea
    // service: 
    // {
    //     
    // }
}
);

export default Provider;
 