import express from 'express';
import axios from 'axios';
import { config } from 'dotenv';config();
import {getData} from './run.js';
import url from 'url';
import { db } from './firebase.js';

const port = 5000 || process.env.PORT;
const app = express();

app.get('/auth/discord/callback', async (req, res) => {
    try{
    const {code} = req.query;console.log(code)
    if(code){
        const formdata = new url.URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID.toString(),
            client_secret: process.env.DISCORD_CLIENT_SECRET.toString(),
            grant_type: 'authorization_code',
            code: code.toString(),
            redirect_uri: process.env.DISCORD_REDIRECT_URI.toString()
        });
        const output = await axios.post('https://discord.com/api/oauth2/token', formdata, 
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  });
        if(output.data){
            var [id] = await getData(output.data.access_token);
            const tokenRef = await db.collection("user").doc(id);
            await tokenRef.set({["discord_refresh_token"]: output.data.refresh_token, }, {merge: true});
            // res.json(result);
        }
    }}catch(e){
        console.log("catch")
        console.log(e)
        
    }
    // res.header('Authorization', auth);
    // res.redirect(`${process.env.FRONTEND_URI}/?auth=` + encodeURIComponent(auth));
});


// const token = "cf-turnstile-response";
// try {


app.get('/', (req, res) => { res.send('you doing good today?');});
app.get('/favicon.ico', (req, res) => res.status(200))
app.listen(port, () => {   console.log(`Server is running on port ${port}`);});

{
    token_type: 'Bearer',
    access_token: 'uvX9eGAdJjPGATH2xK8Hf2kcBu5IV1',
    expires_in: 604800,
    refresh_token: 'PLtnCPZZt69MJO3qTXFUh1qnHQEuR1',
    scope: 'guilds identify email guilds.members.read'
  }