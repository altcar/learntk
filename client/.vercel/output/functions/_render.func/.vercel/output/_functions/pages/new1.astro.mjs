import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$StarlightPage } from '../chunks/StarlightPage_DT6R2JnO.mjs';
export { renderers } from '../renderers.mjs';

const $$New1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": { title: "Live Lesson" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Google meet Link</h2> <p><a href="https://meet.google.com/rbh-tots-sov">https://meet.google.com/rbh-tots-sov</a></p> <h2>YouTube Live</h2> <p> <a href="https://youtube.com/live/bUEjds8Hu_U?feature=share">Week 5</a> <a href="https://youtube.com/live/6Tq-rGTN7Ow?feature=share">Week 6</a> <a href="https://youtube.com/live/qzlT71gRA8o?feature=share">Week 7</a> </p> ` })}`;
}, "/workspaces/learntk/client/src/pages/new1.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/new1.astro";
const $$url = "/new1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
