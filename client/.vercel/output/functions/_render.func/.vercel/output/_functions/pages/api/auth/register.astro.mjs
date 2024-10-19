import { c as createAstro, a as createComponent, r as renderTemplate } from '../../../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';
import { getAuth } from 'firebase-admin/auth';
import { a as app } from '../../../chunks/server_CUzCRHtI.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const Astro = $$Astro;
const POST = async ({ request, redirect }) => {
  const auth = getAuth(app);
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  if (!email || !password || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }
  try {
    await auth.createUser({
      email,
      password,
      displayName: name
    });
  } catch (error) {
    return new Response(
      "Something went wrong",
      { status: 400 }
    );
  }
  return Astro.redirect("https://learntk.vercel.app/signin");
};
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate``;
}, "/workspaces/learntk/client/src/pages/api/auth/register.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/api/auth/register.astro";
const $$url = "/api/auth/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
