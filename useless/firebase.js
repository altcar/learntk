
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { config } from 'dotenv';
import { getFirestore } from 'firebase/firestore/lite';

config();
const firebaseApp =initializeApp(JSON.parse(process.env.FIREBASE));
const db = getFirestore(firebaseApp);

export { db };
// github: data,
// twitter: data,
// linkedin: data,
// bio: data,
// projects: data,
// skills: data,
// interests: data,
// location: data,
// timezone: data,
// pronouns: data,
// avatar: data,
// banner: data,
// website: data,