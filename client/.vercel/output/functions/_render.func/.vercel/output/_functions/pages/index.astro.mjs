import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, b as renderComponent, d as renderHead } from '../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../chunks/BaseHead_B80s4wwL.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_BldVm0Am.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_B7JnSmnR.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const $$ProfileCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileCard;
  const { name, linkedin, github = "", email = "", image } = Astro2.props;
  return renderTemplate`<!-- <li class="link-card"> -->${maybeRenderHead()}<div class="link-card astro-c7gr6yg2"> <a${addAttribute(email, "href")} class="astro-c7gr6yg2"> <h2 class="astro-c7gr6yg2"> ${name} <!-- <span>&rarr;</span> --> </h2> <img${addAttribute(image, "src")} alt="" class="astro-c7gr6yg2"> <div class="p astro-c7gr6yg2"> <a${addAttribute(linkedin, "href")} class="astro-c7gr6yg2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" width="32" height="32" class="astro-c7gr6yg2"> <path fill-rule="evenodd" fill="white" clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#758CA3" class="astro-c7gr6yg2"></path> </svg> </a> <a${addAttribute(github, "href")} class="astro-c7gr6yg2"><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" class="astro-c7gr6yg2"><path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" class="astro-c7gr6yg2"></path></svg></a> </div> </a> </div> <!-- </li> --> `;
}, "/workspaces/learntk/client/src/components/ProfileCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="astro-j7pv25f6"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-j7pv25f6" })}${renderHead()}</head> <body class="astro-j7pv25f6"> ${renderComponent($$result, "Header", $$Header, { "class": "astro-j7pv25f6" })} <main class="astro-j7pv25f6"> <div class="splash astro-j7pv25f6"> <h1 class="astro-j7pv25f6">🧑‍🚀 Hello, Coders!</h1> <div class="splashbuttoncontainer astro-j7pv25f6"> <a class="member astro-j7pv25f6" href="/buy"> <span class="astro-j7pv25f6">Join the squad!</span> <button class="astro-j7pv25f6"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-j7pv25f6"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="astro-j7pv25f6"></path> </svg>
Get the course now</button> </a> <!-- <a class="member" href="/api/login" onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=SomeSize,height=SomeSize'); return false;"> --> <a class="member astro-j7pv25f6" href="/api/login"> <span class="astro-j7pv25f6">Already a member?</span> <button style="--provider-bg: #5865F2; --provider-dark-bg: #5865F2; --provider-color: #fff; --provider-dark-color: #fff; --provider-bg-hover: rgba(88, 101, 242, 0.8); --provider-dark-bg-hover: rgba(88, 101, 242, 0.8);" tabindex="0" class="astro-j7pv25f6"> <img loading="lazy" height="24" width="24" id="provider-logo" src="https://authjs.dev/img/providers/discord.svg" class="astro-j7pv25f6"> <!-- <img loading="lazy" height="24" width="24" id="provider-logo-dark" src="https://authjs.dev/img/providers/discord.svg"> --> <span class="astro-j7pv25f6">Sign in with Discord</span></button> </a> </div> </div> <div class="splash astro-j7pv25f6"> <h1 class="astro-j7pv25f6">Your Tutor:</h1> <div class="splashbuttoncontainer astro-j7pv25f6"> ${renderComponent($$result, "Card", $$ProfileCard, { "name": "Shalev", "linkedin": "https://www.linkedin.com/in/shalevl", "github": "https://github.com/mushroomhater07", "email": "mailto:admin@shalev.eu.org", "image": "/IMG_2845_edited.webp", "class": "astro-j7pv25f6" })} ${renderComponent($$result, "Card", $$ProfileCard, { "name": "Nedjm", "linkedin": "https://www.linkedin.com/in/nedjm-eddine-laib-48873925b/", "image": "/WhatsApp Image 2024-02-20 at 20_52_37_297df171.webp", "class": "astro-j7pv25f6" })} ${renderComponent($$result, "Card", $$ProfileCard, { "name": "Jivanthika", "linkedin": "https://www.linkedin.com/in/jivanthika-venkatakrishnan-24356620a/", "image": "/Plant Shadow _edited.webp", "class": "astro-j7pv25f6" })} ${renderComponent($$result, "Card", $$ProfileCard, { "name": "Haris", "linkedin": "https://www.linkedin.com/in/haris-sul", "image": "/WhatsApp Image 2024-02-20 at 20_52_59_c2b5c18e.webp", "class": "astro-j7pv25f6" })} </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-j7pv25f6" })}  </body></html>`;
}, "/workspaces/learntk/client/src/pages/index.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
