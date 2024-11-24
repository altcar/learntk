import { doc, getDoc, setDoc, getDocs,collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

async function getFirestoreData(id) {
    const querySnapshot = await getDocs(collection(db, 'user'));
    // const data = querySnapshot.docs.map(doc => doc.data());
    const data = querySnapshot.docs.map(doc => doc.data()).filter(doc => doc.discord_id === id);

    return data[0];
    
}

async function login(userinfo, allchannel, ccrole) {
    const userReg = doc(db, "user", userinfo.id);
    const userSnapshot = await getDoc(userReg);
    var newuser = !(userSnapshot).exists()
    var subscribed = (ccrole.roles && ccrole.roles.includes('1059574449025843353')) ? true : false;

    if (newuser)
        await setDoc(userReg, {
            ["discord_email"]: userinfo.email,
            ["discord_id"]: userinfo.id,
            ["discord_tag"]: userinfo.discriminator,
            ["discord_username"]: userinfo.username,
            ["discord_avatar"]: `https://cdn.discordapp.com/avatars/${userinfo.id}/${userinfo.avatar}`,
            ["discord_email"]: userinfo.email,
            ["JSON_discord_user"]: JSON.stringify(userinfo),
            ["JSON_discord_channel"]: JSON.stringify(allchannel),
            ["JSON_discord_cc_server"]: JSON.stringify(ccrole),
            ["subscribed"]: subscribed,
            ["newuser"]: newuser,
        }, { merge: true })
    else await setDoc(userReg, {
        ["discord_email"]: userinfo.email,
        ["discord_id"]: userinfo.id,
        ["discord_tag"]: userinfo.discriminator,
        ["discord_username"]: userinfo.username,
        ["discord_avatar"]: `https://cdn.discordapp.com/avatars/${userinfo.id}/${userinfo.avatar}`,
        ["discord_email"]: userinfo.email,
        ["JSON_discord_user"]: JSON.stringify(userinfo),
        ["JSON_discord_channel"]: JSON.stringify(allchannel),
        ["JSON_discord_cc_server"]: JSON.stringify(ccrole),
        ["subscribed"]: subscribed,
    }, { merge: true });
}
async function updateRefreshToken(id, token) {
    const userRef = doc(db, "user", id);
    await setDoc(userRef, { ["discord_refresh_token"]: token }, { merge: true });
}

 async function registerUser([data,id] ) {
    const userReg = doc(db, "user", id);
    await setDoc(userReg, {
        ["newuser"]: false,
        ["certificate_name"]: data.name,
        ["communicate_email"]: data.email,
    },{merge: true});
}
export { getFirestoreData, login, updateRefreshToken,registerUser };