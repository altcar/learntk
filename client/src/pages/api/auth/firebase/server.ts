
import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: import.meta.env.FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: import.meta.env.FIREBASE_PRIVATE_KEY,
  client_email: "firebase-adminsdk-m5nol@learntk.iam.gserviceaccount.com",
  client_id: "106253111285242958033",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m5nol%40learntk.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);


// export const app = activeApps.length === 0 ? initializeApp({
//   credential: cert(serviceAccount as ServiceAccount),
// }) : activeApps[0];