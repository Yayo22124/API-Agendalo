import { DataTypes, Sequelize } from 'sequelize';

import Address from './Address.js';
import Person from './Person.js';
import bcrypt from 'bcrypt';
import database from "../Config/database.js";

const User = database.define('tbb_user', {
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
            tbb_user.password = await bcrypt.hash(tbb_user.password, salt);
        }
    },
    timestamps: true
});

export default User;