import Person from "./Person.model";
import User from "./user.model";

// Person - User
Person.hasMany(User, { foreignKey: 'personaID' });
User.belongsTo(Person, { foreignKey: 'personaID' });

export {
    Person,
    User
}