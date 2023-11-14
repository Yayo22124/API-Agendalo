import { DataTypes } from "sequelize"

const tbb_category = db.define('tbb_category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})





