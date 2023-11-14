import { DataTypes } from "sequelize"

const service = db.define('tbb_service', {
    name_service: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    provider: {//LAVE FORANEA 
        type: DataTypes.INTERGER,
        allowNull: false,
        unique: true
    },
    category: {//LAVE FORANEA 
        type: DataTypes.INTERGER,
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
export default service;





