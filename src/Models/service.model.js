import Category from './category.model.js';
import { DataTypes } from 'sequelize';
import Provider from './Provider.js';
import database from '../Config/database.js';

const Service = database.define('tbb_service', {
    name_service: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    price: {//DUDA RANGO DE PRECIOS
        type: DataTypes.DECIMAL,
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