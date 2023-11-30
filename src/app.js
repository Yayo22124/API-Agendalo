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

import chalk from "chalk";
import cors from "cors"
import database from "./Config/database.js";
import express from "express";
import morgan from "morgan";
import userRoutes from "./Routes/user.routes.js"

const app = express();

// Setting express app in json
app.use(express.json());


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
app.use(cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Permitir cualquier origen
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// }); //! CORS
app.use(morgan('dev')); //! Morgan
app.use(express.urlencoded({ extended: true })); //! URL Encoded
app.use('/api/agendalo/user/', userRoutes); //! User Routes

export default app;