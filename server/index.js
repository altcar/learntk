// import cors from 'cors'; // Import the cors package
// import bodyParser from 'body-parser'; // Import the body-parser package
// app.use(cors());
// app.use('/', router);
// app.use(bodyParser.urlencoded({ extended: false }));
// import express, {Router} from 'express';
// 
import axios, { all } from 'axios';
// import { config } from 'dotenv';config();
import { db } from './firebase.js';
// // import {sign} from 'jsonwebtoken';
// // import cookieParser from 'cookie-parser';
// import http from 'http'; // Import the http module



// const router = Router();

// app.use(cookieParser());
// app.use(express.json());

// app.get('/auth/discord/renew', async (req, res) => {
//     // try{
//     const id = req.query.id;
//     console.log(id)
//     // const tokenRef = await db.collection("user").doc(id);
//     // const token1 = await tokenRef.get();
//     // const formdata1 = new url.URLSearchParams({
//     //     client_id: process.env.DISCORD_CLIENT_ID,
//     //     client_secret: process.env.DISCORD_CLIENT_SECRET,
//     //     grant_type: 'refresh_token',
//     //     refresh_token: token1.data().discord_refresh_token,
//     //     redirect_uri: process.env.DISCORD_REDIRECT_URI
//     // });
//     // const refresh = await axios.post('https://discord.com/api/oauth2/token', formdata1, {
//     //     headers: {
//     //         'Content-Type': 'application/x-www-form-urlencoded'
//     //     }
//     // });
//     // await tokenRef.set({["discord_refresh_token"]: refresh.data.refresh_token, }, {merge: true});
//     // if(refresh.data){
//         // var result = await getData(refresh.data.access_token, true);

//         // # method 1
//         // res.json(result);
//         // # method 2
//         // var requestOptions = {
//         //     hostname: '192.168.0.102', // url or ip address
//         //     port: 4321, // default to 80 if not provided
//         //     path: '/api/auth/dcreply',
//         //     method: 'POST' // HTTP Method
//         // };
    
//         // var externalRequest = http.request(requestOptions, (externalResponse) => {
            
//         //     // ServerB done responding
//         //     externalResponse.on('end', () => {
                
//         //         // Response to client
//         //         res.end('data was send to serverB');
//         //     });
//         // });

//         // // Free to send anthing to serverB
//         // externalRequest.setHeader('Content-Type', 'application/json');
//         // externalRequest.write(JSON.stringify({id: "id", token: "refresh.data.access_token"}));

//         // externalRequest.end();
//         // # method 3
//         // res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true });
//         
//     // }
//     // }catch(e){
//     //     res.redirect("/auth/discord")
//     // }
// })



export async function getData(access, renew){
    const userinfo = await axios.get('https://discord.com/api/users/@me', { headers: { Authorization: `Bearer ${access}` } });
    const allchannel = await axios.get('https://discord.com/api/users/@me/guilds', { headers: { Authorization: `Bearer ${access}` } });
    const ccrole = await axios.get('https://discord.com/api/users/@me/guilds/746789586914639933/member', { headers: { Authorization: `Bearer ${access}` } });
    
    
    const userReg = db.collection("user").doc(userinfo.data.id);
    var newuser = (await userReg.get()).exists ? false : true;
    if(!newuser){
        const user = await userReg.get();
        if(user.data().newuser == undefined){
            newuser = true;
        }
    }
    var subscribed = (ccrole.data.roles.includes('1059574449025843353')) ? subscribed = true : subscribed = false;
 
    const res1 = await userReg.set({
        ["discord_email"]: userinfo.data.email,
        ["discord_id"]: userinfo.data.id,
        ["discord_tag"]: userinfo.data.discriminator,
        ["discord_username"]: userinfo.data.username,
        ["discord_avatar"]: `https://cdn.discordapp.com/avatars/${userinfo.data.id}/${userinfo.data.avatar}`,
        ["discord_email"]: userinfo.data.email,
        ["JSON_discord_user"]: JSON.stringify(userinfo.data),
        ["JSON_discord_channel"]: JSON.stringify(allchannel.data),
        ["JSON_discord_cc_server"]: JSON.stringify(ccrole.data),
        ["subscribed"]: subscribed,
        ["newuser"]: newuser,
        // school email2, printed name, progress (bw1)
    }, {merge: true});
    // const token = await sign({id: userinfo.data.id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    // res.cookie('token', token, {httpOnly: true, secure: true, sameSite: 'none'});
    return([userinfo.data.id])
}