import app from "./server.js"

app.listen(app.get('PORT'), () => {
    console.log(`-------------------------------------------- \n
        Server Listen on PORT: ${app.get('PORT')}
    \n--------------------------------------------`);
})