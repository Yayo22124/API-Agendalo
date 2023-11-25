import { DataTypes } from "sequelize"

const Category = db.define('tbb_category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})

export default Category;





