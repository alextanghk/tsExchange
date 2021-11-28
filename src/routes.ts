import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

const routes = express.Router();

routes.get("/",async(req, res)=> {
    res.json({
        'data': "testing"
    })
})

export default routes;