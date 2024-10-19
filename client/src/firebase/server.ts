import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const activeApps = getApps();
const serviceAccount = require( "./1.json");

const initApp = () => {
  if (process.env.PROD) {
    console.info('PROD env detected. Using default service account.')
    // Use default config in firebase functions. Should be already injected in the server by Firebase.
    return initializeApp()
  }
  console.info('Loading service account from env.')
  return initializeApp({
    credential: cert(serviceAccount as ServiceAccount)
  })
}

export const app = activeApps.length === 0 ? initApp() : activeApps[0];