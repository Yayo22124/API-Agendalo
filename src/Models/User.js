import database from "../Config/database";
import bcrypt from 'bcrypt';

const User = database.define('tbb_user', {
    persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: '',
            key: 'id'
        }
    },
    estatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    hooks: {
        beforeCreate: async (tbb_user) => {
            const salt = await bcrypt.genSalt(10);
            tbb_user.PASSWORD = await bcrypt.hash(tbb_user.PASSWORD, salt);
        }
    },
    timestamps: true
});

export default User;