
import { APIRoute } from "astro";
// import {  type APIRoute } from "astro";
import { discord_data } from "./firebase";
import { firestore } from "./firebase/server";

export const GET: APIRoute = async ({
  params,
  request,
  redirect,
  cookies,
}) => {
  console.log(import.meta.env.FIREBASE_PROJECT_ID)
   const getdata = await firestore
    .collection("user")
    .doc("608430382064467971")
    .get();
  console.log(  getdata
    .data())
   
  var hash;
  var myJson: { [key: string]: any } = {};
  var url = request.url;
  var hashes = url.slice(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    myJson[hash[0]] = hash[1];
    // If you want to get in native datatypes
    // myJson[hash[0]] = JSON.parse(hash[1]);
  }
  if(myJson.id == "undefined" || myJson.id == undefined || myJson.id ==null) return redirect("https://learntk.vercel.app/")
  var ne1 = await discord_data(myJson.id)
  if(ne1 == undefined || ne1 == null) return redirect("/")
  delete(ne1).JSON_discord_channel
  delete(ne1).JSON_discord_user
  delete(ne1).JSON_discord_cc_server
  cookies.set('discord', JSON.stringify(ne1) ,{ path:'/'})
  console.log(ne1.newuser)
  return ((ne1.newuser == undefined || ne1.newuser ==true)) ? redirect("https://learntk.vercel.app/welcome") : redirect("https://learntk.vercel.app/course");
  // console.log(JSON.parse(JSON.stringify(Object.fromEntries(await request.headers))))
};
// https://auth.shalify.eu.org/auth/discord/renew?id=905931663937253376
// export const POST: APIRoute = async ({ request, redirect }) => {
//   // console.log(await request.json());
//   if (request.headers.get("Content-Type") === "application/json") {
//     const body: { name: string } = await request.json();
//     // console.log(body);
//     const name = body.name;

//     return new Response(
//       JSON.stringify({
//         message: "Your name was: " + name,
//       }),
//       {
//         status: 200,
//       }
//     );
//     // 
//   }return new Response(null, { status: 300 });
// };