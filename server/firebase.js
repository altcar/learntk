import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
// import serviceAccount from './learntk-firebase-adminsdk-m5nol-af3788623c.json';
import {config} from "dotenv"; config()

initializeApp({
  credential: cert(JSON.parse(process.env.FIREBASE)),
});

export const db = getFirestore();