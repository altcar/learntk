import express from 'express';
import axios from 'axios';
import { config } from 'dotenv';config();
import {getData} from './run.js';
import url from 'url';
import { db } from './firebase.js';

const port = 5000 || process.env.PORT;
const app = express();
app.get('/', (req, res) => {
    res.send('you doing good today?');
});
app.get('/000', (req, res) => {
    res.json(JSON.parse(process.env.FIREBASE));
});
app.get('/favicon.ico', (req, res) => res.status(200))
app.get('/auth/discord',(req, res) => {
    res.redirect(`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${process.env.DISCORD_REDIRECT_URI}&scope=identify+guilds+email+guilds.members.read`);
});
app.get('/auth/discord/callback', async (req, res) => {
    try{
        
    const {code} = req.query;console.log(code)
    if(code){
        const formdata = new url.URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code.toString(),
            redirect_uri: process.env.DISCORD_REDIRECT_URI
        });
        const output = await axios.post('https://discord.com/api/oauth2/token', formdata, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  });
        if(output.data){
            var [id] = await getData(output.data.access_token);
            const tokenRef = await db.collection("user").doc(id);
            await tokenRef.set({["discord_refresh_token"]: output.data.refresh_token, }, {merge: true});
            // res.json(result);
        }
    }}catch(e){
        console.log(e)
        
    }
    res.header('Authorization', auth);
    res.redirect(`https://learntk.vercel.app/api/dcresponse`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
