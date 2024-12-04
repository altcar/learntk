
import type { APIRoute } from "astro";
import { firestore } from "./firebase/server";
// import { getFirestore } from "firebase-admin/firestore";

 
export const  GET: APIRoute = async ({  //export async function discord_data(data : string) {
  params,
  request,
  redirect,
  cookies,
}) => {
    // const db = getFirestore(app);
    // const docRef = db.collection("user").doc(data);
    // const getdata = await docRef.get();
    if (!params.id) return new Response(null, { status: 300 });
    return new Response(JSON.stringify(params.id), { status: 200 });
    // const getdata = await firestore
    //   .collection("user")
    //   .doc(params.id)
    //   .get();
    // return new Response(JSON.stringify(getdata.data()), { status: 200 });
}
 
