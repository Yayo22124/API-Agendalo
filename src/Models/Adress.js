import database from "../Config/database";

const Address = database.define('tbb_address', {
    natural_person: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: '', 
            key: 'id' 
        }
    },
    superior_adress: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true 
    },
}, {
    timestamps: true
});

export default Address;