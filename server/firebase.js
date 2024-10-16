import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, Filter } from 'firebase-admin/firestore';
// import serviceAccount from './learntk-firebase-adminsdk-m5nol-af3788623c.json';

initializeApp({
  credential: cert('./learntk-firebase-adminsdk-m5nol-af3788623c.json')
});

export const db = getFirestore();