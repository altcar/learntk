import { getApps, initializeApp, cert } from 'firebase-admin/app';

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: undefined                                   ,
  private_key_id: undefined                                       ,
  private_key: undefined                                    ,
  client_email: undefined                                     ,
  client_id: undefined                                  ,
  auth_uri: undefined                                 ,
  token_uri: undefined                                  ,
  auth_provider_x509_cert_url: undefined                                      ,
  client_x509_cert_url: undefined                                        
};
const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount)
}) : activeApps[0];

export { app as a };
