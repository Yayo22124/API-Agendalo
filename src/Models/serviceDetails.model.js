import { DataTypes } from "sequelize"

const serviceDetails = db.define('tbb_serviceDetails', {
    service: {
        type: DataTypes.INTERGER,
        allowNull: false,
        references:{
            model: '',
            key:'id'
        }
    },//esta es una llave foranea
    //TODOS LOS ATRIBUTOS SON FORANEOS JAJA
//
})
export default serviceDetails;




