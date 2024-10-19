import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, f as addAttribute } from '../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../chunks/BaseHead_B80s4wwL.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BldVm0Am.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_B7JnSmnR.mjs';
import { g as getCollection } from '../chunks/_astro_content_PXRkrkyJ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.cookies.get("discord")?.value != void 0) {
    var detail = JSON.parse(Astro2.cookies.get("discord")?.value ?? "{}");
    if (detail.subscribed) ; else {
      return Astro2.redirect("/404");
    }
  } else {
    return Astro2.redirect("/404");
  }
  (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" class="astro-wkon6dks"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-wkon6dks" })}${renderHead()}</head> <body class="astro-wkon6dks"> ${renderComponent($$result, "Header", $$Header, { "class": "astro-wkon6dks" })} <main class="astro-wkon6dks"> <section class="astro-wkon6dks"> <ul class="astro-wkon6dks"> <li class="astro-wkon6dks"> <a${addAttribute(`/24b`, "href")} class="astro-wkon6dks"> <img${addAttribute(720, "width")}${addAttribute(360, "height")} src="/blog-placeholder-5.jpg" alt="" class="astro-wkon6dks"> <h4 class="title astro-wkon6dks">Beginner course</h4> </a> </li> <li class="astro-wkon6dks"> <a${addAttribute(`/course/advanced/`, "href")} class="astro-wkon6dks"> <img${addAttribute(720, "width")}${addAttribute(360, "height")} src="/blog-placeholder-5.jpg" alt="" class="astro-wkon6dks"> <h4 class="title astro-wkon6dks">Advanced Course</h4> </a> </li> </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-wkon6dks" })} </body></html>`;
}, "/workspaces/learntk/client/src/pages/course/index.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/course/index.astro";
const $$url = "/course";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
