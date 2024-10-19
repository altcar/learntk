import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../chunks/BaseHead_B80s4wwL.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Mobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "use laptop", "description": "not support", "class": "astro-tzi6dhhv" })} ${maybeRenderHead()}<div class="all astro-tzi6dhhv"> <h5 class="astro-tzi6dhhv">Sorry your device is not supported.
<br class="astro-tzi6dhhv">
Please use a laptop or desktop to access this page.
</h5> <button onclick="window.location.href = window.location.origin" class="astro-tzi6dhhv"><h1 class="astro-tzi6dhhv">Try Again</h1></button> </div> `;
}, "/workspaces/learntk/client/src/pages/mobile.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/mobile.astro";
const $$url = "/mobile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Mobile,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
