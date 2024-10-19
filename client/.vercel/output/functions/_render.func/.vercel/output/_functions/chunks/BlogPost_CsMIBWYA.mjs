import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, e as renderSlot } from './astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from './BaseHead_B80s4wwL.mjs';
import { $ as $$Header, a as $$Footer } from './Footer_BldVm0Am.mjs';
import { $ as $$FormattedDate } from './FormattedDate_C8jgb3e4.mjs';
/* empty css                         */

const $$Astro = createAstro("https://learntk.vercel.app");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-bvzihdzo"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "class": "astro-bvzihdzo" })}${renderHead()}</head> <body class="astro-bvzihdzo"> ${renderComponent($$result, "Header", $$Header, { "logged": "true", "class": "astro-bvzihdzo" })} <main class="astro-bvzihdzo"> <article class="astro-bvzihdzo"> <!-- <div class="hero-image">
					{heroImage && <img width={1020} height={510} src={heroImage} alt="" />}
				</div> --> <div class="prose astro-bvzihdzo"> <div class="title astro-bvzihdzo"> <div class="date astro-bvzihdzo"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "class": "astro-bvzihdzo" })} ${updatedDate && renderTemplate`<div class="last-updated-on astro-bvzihdzo">
Released on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "class": "astro-bvzihdzo" })} </div>`} </div> <h1 class="astro-bvzihdzo">${title}</h1> <hr class="astro-bvzihdzo"> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-bvzihdzo" })} </body></html>`;
}, "/workspaces/learntk/client/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
