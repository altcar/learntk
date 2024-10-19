
import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "learntk",
  private_key_id: "add8d40cdb4fd4e5c7de9a793c3f4f501ba7c666",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2KF70gRHj5USn\nX3GER4IZYAV3sHiinvbt8Q8vaGFMOcy0QqFGwpvzhcxypzM70SdJbb8Xzt/SAd4y\n8YfqTZrzxdTkqKbHMeh7D0ymBALJgnsoBPcdiZ27cdkJquF2oq9pkY+EEdQyVPGQ\n3asr+7bsMsQ6jsH6ZCWMvnE1wl8Q3gLljIJh2MuoElSmF44/5NNlxjLKIVkgR7Vs\n+cdTCA4t6tAXg47u1jOPXjpwjfGaB05+HWMLZTE1MWNJk9UanQVDdRKe7yzU6KmS\n8lyXSnyn08OB5h9dLCHd13xjMCshl0dNT2sBq9Dgxe5lZbw4V5bgKfRoUg2lg/Tq\nluUMyZXRAgMBAAECggEABWS/nwS9V16gAEaysUR+xSqTLt6SS9piHFyBYxl3nA6w\nEXxRkytK+9Rv38s0mKZSP/nYaSeOeATnI+ID8LuYhXRLn/OgcJB5Pj+POPEwde//\nnok7GexLt9OgpgkhwOYDRKBzO+ldO5pJRs1Rdq1u1qKQLd2xP608cWToLDvTncew\nSwlU97ydZj2hHg5gGZeksXSuznFGwETj4dOo/uRT34jJsAZsEc7nJTOyIonN1r5y\nHIX6izKZKnhTs33K5m2CVMd5gNlQbYjRn4FtYpvh+fHD8ruYvJi/cJYje2rCRqQC\n+A2oZ1tqOm7lnvpvsX5cnJTpJ23WYwGj3bpiF56BIQKBgQDboCzylAUCx43MzPuc\nQ5Ns7dsDfCJg0L+P8A81s4e/QSuMGghKctZkMvP6s4ATs+e/m7IbnMbLhRl6yLAa\nNfA/F4C3o00wqjEtICioBKrPGNK+1miKUaLqkm9f0NJZhf+RArp9l27pKDHug2A/\n0v181+Nx6z6UWXLSIwmoyJ+GqQKBgQDUU5rLn3Hg6AibJozJSoRq3/UtLWZOtyPd\nGT3WN5FbirSurQ8TpE5Ptb/B+7n6lhLH0GZBzVJtMtTvDsaF5Xp6A1jpJ7g+ab6F\n+FrnKT8ZCL0XVmSnBvyUUsi8yXqvUhKV5S5LrFsrrqrQvHs0xR8/1hM50bT5WciY\nE/geQMmW6QKBgQC+UrNA0Cb7fqUSWnycsS7b0c/e2D8OeTfYa2cy2U6E3dv4AEM5\nCQVjNYias90Etf3Z3Pne1eCsU7592dZKEH4OnrZr7TciOgp9mYXB/LFs4I0Y1cMo\nQpCVCKs9dEAlVmrfZmboGUgDA1Mp522MQbJr8sZmXT8Q3ecT1Us0mg8saQKBgEKF\n0yja0r4JVLDvegqS6zvk4Rb/c19UJ8tc3i/ghw0sPwG/PMsFnneA1Qx8xr8JB+dM\nls0k/B80XtxrP62xwRa7N78M77+2N7gXoLtuA9PfFgdazPw7xyTdbwEfCu4lA6es\n/z08SfA8sE3nz54v6GOCudFSr6W0CJIFJ6aq274JAoGBANn/kVX/dBR+AWuFyOIl\nMZZ3sZQDMgleJuDm+S61/x3scnYdoMGsQFPQ88R4+sphtHYn8HCaA48soi/KX4b6\nT3zBKoqilNzq9oLzqx6xRiU3/4562phofoLoD+J7mK2I5vpPDWuiMoqTpOtr0gwK\nPlfpqxQhZWgS3FXHXiMmts1d\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-m5nol@learntk.iam.gserviceaccount.com",
  client_id: "106253111285242958033",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m5nol%40learntk.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

export const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
}) : activeApps[0];
