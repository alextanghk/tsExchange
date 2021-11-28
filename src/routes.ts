import express from 'express';
import dotenv from 'dotenv';
import { generateWallet, Currency, createAccount, getAccountById } from '@tatumio/tatum';
dotenv.config()

const routes = express.Router();

routes.post('/GenBTCWallet', async (req,res)=>{
    const btcWallet = await generateWallet(Currency.BTC, true);
    res.json({
        data: btcWallet
    })
});

routes.post("/CreateBTCAccount",async(req,res)=>{
    
    const account = await createAccount({
        currency: 'BTC',
        xpub: req.body.pub
    });

    res.json({
        data: account
    })
})

routes.get("/GetAccountById/:id",async(req,res)=>{
    const account = await getAccountById(req.params.id);
    res.json({
        data: account
    })
})

export default routes;