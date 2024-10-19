import { c as createAstro, a as createComponent, r as renderTemplate } from '../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate``;
}, "/workspaces/learntk/client/src/pages/api/index.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/api/index.astro";
const $$url = "/api";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
