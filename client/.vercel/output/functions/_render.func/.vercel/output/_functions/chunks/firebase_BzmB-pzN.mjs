import { a as createComponent, r as renderTemplate } from './astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';
import { a as app } from './server_CUzCRHtI.mjs';
import { getFirestore } from 'firebase-admin/firestore';

async function discord_data(data) {
  const db = getFirestore(app);
  const docRef = db.collection("user").doc(data);
  const getdata = await docRef.get();
  return getdata.data();
}
async function registerUser([data, id]) {
  const db = getFirestore(app);
  const docRef = db.collection("user").doc(id);
  await docRef.set({
    ["newuser"]: false,
    ["certificate_name"]: data.name,
    ["communicate_email"]: data.email
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
  }, { merge: true });
}
const $$Firebase = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/workspaces/learntk/client/src/pages/api/firebase.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/api/firebase.astro";
const $$url = "/api/firebase";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Firebase,
    discord_data,
    file: $$file,
    registerUser,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, discord_data as d, registerUser as r };
