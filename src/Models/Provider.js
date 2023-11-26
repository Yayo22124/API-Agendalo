//Elemento del ORM que permitirá difinir los tipos de datos de las propiedades (columnas de la base de datos)

import { DataTypes } from "sequelize";
import Service from "./service.model.js";
import User from "./User.js";
import database from '../Config/database.js';

const Provider = database.define("tbb_provider",
{
   
}
);

//Option 2
Provider.belongsTo(User, { foreignKey: 'userId'})
// Provider.hasMany(Service, {foreignKey: 'providerId'});

export default Provider;
 