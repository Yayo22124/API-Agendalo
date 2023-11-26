import { DataTypes } from "sequelize"
import database from "../Config/database.js"

const serviceDetails = database.define('tbb_serviceDetails', {
    
})
export default serviceDetails;



Service_details.belongsTo(Service, { foreignKey: 'serviceId' })


