import express from 'express';
import * as bodyParser from "body-parser";
import dotenv from 'dotenv'
import routes from './routes';
dotenv.config()

const app = express();

app.use(bodyParser.json());

app.use("/test", routes);

app.get("/",(req, res)=> {
    res.send("Server running");
})
export default app;