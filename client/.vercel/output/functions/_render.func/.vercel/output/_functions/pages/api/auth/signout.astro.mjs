import { c as createAstro, a as createComponent, r as renderTemplate } from '../../../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const Astro = $$Astro;
const GET = async ({ redirect, cookies }) => {
  cookies.delete("session", {
    path: "/"
  });
  return Astro.redirect("https://learntk.vercel.app/signin");
};
const $$Signout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signout;
  return renderTemplate``;
}, "/workspaces/learntk/client/src/pages/api/auth/signout.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/api/auth/signout.astro";
const $$url = "/api/auth/signout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Signout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
