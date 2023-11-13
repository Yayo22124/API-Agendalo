import app from "./server.js"
import chalk from 'chalk';

app.listen(app.get('PORT'), () => {
    console.log(chalk.blue('================================================='));
    console.log(chalk.green(`Server Listen on PORT: ${app.get('PORT')}`));
    console.log(chalk.blue('================================================='));
})  