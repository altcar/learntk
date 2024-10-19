import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, f as addAttribute } from '../../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../../chunks/BaseHead_B80s4wwL.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_BldVm0Am.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../../chunks/consts_B7JnSmnR.mjs';
import { g as getCollection } from '../../chunks/_astro_content_PXRkrkyJ.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_C8jgb3e4.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

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
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" class="astro-uhh4d5ea"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-uhh4d5ea" })}${renderHead()}</head> <body class="astro-uhh4d5ea"> ${renderComponent($$result, "Header", $$Header, { "class": "astro-uhh4d5ea" })} <main class="astro-uhh4d5ea"> <section class="astro-uhh4d5ea"> <ul class="astro-uhh4d5ea"> ${posts.map((post) => renderTemplate`<li class="astro-uhh4d5ea"> <a${addAttribute(`/course/${post.slug}/`, "href")} class="astro-uhh4d5ea"> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" class="astro-uhh4d5ea"> <h4 class="title astro-uhh4d5ea">${post.data.title}</h4> <p class="date astro-uhh4d5ea"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "class": "astro-uhh4d5ea" })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-uhh4d5ea" })} </body></html>`;
}, "/workspaces/learntk/client/src/pages/course/dump/index.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/course/dump/index.astro";
const $$url = "/course/dump";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
