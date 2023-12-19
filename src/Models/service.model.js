import Category from './Category.js';
import { DataTypes } from 'sequelize';
import Provider from './Provider.js';
import database from '../Config/database.js';

const Service = database.define('tbb_service', {
    name_service: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true
    },
    price: {//DUDA RANGO DE PRECIOS
        type: DataTypes.DECIMAL(16,2),
        allowNull: false,
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    plaza: {//PREGUNTAR A QUE HACE REFERENCIA 
        type: DataTypes.STRING,
        allowNull: false,
    }

})


export default Service;