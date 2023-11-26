import Address from './Address.js'
import Category from './category.model.js'
import Legal_person from './Legal_person.js'
import Location from './Location.js'
import Natural_person from './Natural_person.js'
import Person from './Person.model.js'
import Provider from './Provider.js'
import Service from './service.model.js'
import Service_details from './serviceDetails.model.js'
import User from './User.js'

//EJEMPLO
// Foo.hasOne(Bar);
// Bar.belongsTo(Foo, {
//   foreignKey: 'myFooId'
// });
const keys = {
    
}
//Location.hasOne(Address)
Address.belongsTo(Location, { foreignKey: 'locationId' }),

//Address.hasOne(User)
User.belongsTo(Address, { foreignKey: 'addressId'})

//Person.hasOne(User)
User.belongsTo(Person, { foreignKey: 'personId' })

//Person.hasOne(Natural_person)
Natural_person.belongsTo(Person, { foreignKey: 'personId' })
Legal_person.belongsTo(Person, { foreignKey: 'personId' })

Provider.belongsTo(User, { foreignKey: 'userId'})

//One-to-Many
//Option 1
// Provider.hasMany(Service, { foreignKey: 'serviceId' });
// Service.belongsTo(Provider);

//Option 2
Provider.hasMany(Service);
Service.belongsTo(Provider, { foreignKey: 'providerId'});

//Many-to-many
//Provider.belongsToMany(Service, { through: 'ProviderHasServices' })
//Service.belongsToMany(Provider, { through: 'ProviderHasServices' })

Service_details.belongsTo(Service, { foreignKey: 'serviceId' })

//One-to-Many
//Option 1
//Service.hasMany(Category, { foreignKey: 'categoryId' });
//Category.belongsTo(Service);

//Option 2
Category.belongsToMany(Service, { through: 'ServiceHasCategory' });
Service.belongsToMany(Category, {through: 'ServiceHasCategory'});

export default 