import { c as createAstro, a as createComponent, r as renderTemplate } from '../../../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';
import { a as app } from '../../../chunks/server_CUzCRHtI.mjs';
import { getAuth } from 'firebase-admin/auth';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const Astro = $$Astro;
const GET = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response(
      "No token found",
      { status: 401 }
    );
  }
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response(
      "Invalid token",
      { status: 401 }
    );
  }
  const fiveDays = 60 * 60 * 24 * 5 * 1e3;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays
  });
  cookies.set("session", sessionCookie, {
    path: "/"
  });
  return Astro.redirect("https://learntk.vercel.app/dashboard");
};
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  return renderTemplate``;
}, "/workspaces/learntk/client/src/pages/api/auth/signin.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/api/auth/signin.astro";
const $$url = "/api/auth/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
