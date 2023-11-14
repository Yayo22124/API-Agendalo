import chalk from "chalk";
import database from "./Config/database.js";
import express from "express";

const app = express();

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

app.set('PORT', process.env.PORT || 3000)

export default app;