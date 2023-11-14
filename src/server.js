import express from "express";

const app = express();
app.set('PORT', process.env.PORT || 3000)

export default app;