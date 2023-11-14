// Permite definir los tipos de datos de las propiedades

import { BOOLEAN, DataTypes } from "sequelize";

import Person from "./Person.model";
import database from "../Config/database";

const User = database.define("tbb_users", {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastname:{
        type: DataTypes.STRING(255),
        allowNull: false
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
    token: {
        type: DataTypes.STRING,
        unique: true

    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false

    }
}
    // hooks: {
    //     beforeCreate: async (User) => {
    //         const salt = await bcrypt.genSalt(10);
    //         User.password = await bcrypt.hash(User.password, salt);
    //     }
    // }
)

// Comparar contraseñas (contraseña pasada como param y la contraseña de la bd (User))
// User.prototype.verifyPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// }
User.belongsTo(Person, { foreignKey: 'personaID' });

export default User;