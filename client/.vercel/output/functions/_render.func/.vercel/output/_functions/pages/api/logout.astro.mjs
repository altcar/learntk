import { c as createAstro, a as createComponent } from '../../chunks/astro/server_BPnEgIHd.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("discord", { path: "/" });
  return Astro2.redirect("/");
}, "/mnt/l/save/devdrive/learntk/client/src/pages/api/logout.astro", void 0);

const $$file = "/mnt/l/save/devdrive/learntk/client/src/pages/api/logout.astro";
const $$url = "/api/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Logout,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
