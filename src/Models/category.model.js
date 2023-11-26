import { DataTypes } from "sequelize"
import Service from "./service.model.js";
import database from "../Config/database.js";

const Category = database.define('tbb_category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})

Category.belongsToMany(Service, { through: 'ServiceHasCategory' });

export default Category;