import app from "./server.js"
import chalk from 'chalk';


app.listen(app.get('PORT'), () => {
    console.log(chalk.green('================================================='));
    console.log(chalk.green('Conexión a la base de datos establecida con éxito'));
    console.log(chalk.green('================================================='));
})  