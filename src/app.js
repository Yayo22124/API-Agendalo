<<<<<<< HEAD
// Index of models

import {
    Address,
    Category,
    Legal_person,
    Location,
    Natural_person,
    Person,
    Provider,
    Service,
    Service_details,
    User
} from "./Models/keys.js"

=======
import Address from "./Models/Address.js";
import Category from "./Models/Category.js";
import Legal_person from "./Models/Legal_person.js";
import Location from "./Models/Location.js"
import Natural_person from "./Models/Natural_person.js";
import Person from "./Models/Person.js";
import User from "./Models/User.js";
>>>>>>> main
import chalk from "chalk";
import database from "./Config/database.js";
import express from "express";
import morgan from "morgan";
import userRoutes from "./Routes/user.routes.js"

const app = express();

<<<<<<< HEAD
// Setting express app in json
app.use(express.json());


=======
app.use(express.json());

>>>>>>> main
// database connection
try {
    await database.authenticate();
    console.log(chalk.blue("----------------------------------------------------\n"))
    console.log(chalk.blue(`Connection to MySQL database was accepted`))
    console.log(chalk.blue("----------------------------------------------------\n"))

    await database.sync()
        .then(() => {
            console.log('Tablas sincronizadas');
        })
        .catch(err => console.error('Error al sincronizar y/o insertar datos:', err));
    console.log(chalk.green("\n##################################################\n"))
    console.log(chalk.green(`Synchronization to MySQL database finished.`))
    console.log(chalk.green("\n##################################################"))
} catch (err) {
    console.log(chalk.red("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"))
    console.log(chalk.red(`Connection to MySQL database was failed`))
    console.log(err);
    console.log(chalk.red("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"))
}

// Setting
app.set('PORT', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev')); //! Morgan
app.use(express.urlencoded({ extended: true })); //! URL Encoded
app.use('/api/agendalo/user/', userRoutes); //! User Routes

<<<<<<< HEAD

=======
>>>>>>> main
export default app;