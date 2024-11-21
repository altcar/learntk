import { a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead } from '../chunks/astro/server_BPnEgIHd.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../chunks/BaseHead_CwEaNICo.mjs';
import { a as $$Footer, $ as $$Header } from '../chunks/Footer_CELqIFrA.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_B7JnSmnR.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Buy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-uwueeswy"> <head>', "", '</head> <body class="astro-uwueeswy"> ', ' <main class="astro-uwueeswy"> <div class="splash astro-uwueeswy"> <div class="detail astro-uwueeswy"> <h1 class="astro-uwueeswy">Beginner course</h1> <pre class="astro-uwueeswy">An 7-week introductory course to Python, ideal for those with little to no prior programming experience. By committing only 2 hours per week, you will learn all the skills you need to start making your own Python projects! Sessions are held both in person and online. Also recorded for students who miss a live session. Those attending all the lectures will be rewarded with a certificate of completion, and handing in the final project will be awarded a certificate of commendation. Sign up to start the course this semester!</pre> </div> <div class="astro-uwueeswy"> <script src="https://www.paypal.com/sdk/js?client-id=BAAECXx62SA0CIhFnFf-Q-wxmD83XXK-OGZU_M_hXpHjVLNch06nwKsxyGo1Oav3eFTeYPXCLIz8niuiuI&components=hosted-buttons&disable-funding=venmo&currency=GBP"><\/script> <div id="paypal-container-RMJ7LXNMAHFUN" class="astro-uwueeswy"></div> <script>\n            paypal\n              .HostedButtons({\n                hostedButtonId: "RMJ7LXNMAHFUN",\n              })\n              .render("#paypal-container-RMJ7LXNMAHFUN");\n          <\/script> </div> </div> <div class="splash astro-uwueeswy"> <div class="detail astro-uwueeswy"> <h1 class="astro-uwueeswy">Advanced course</h1> <pre class="astro-uwueeswy">An 4-week advanced course to Python, ideal for those who just finish the beginner course. The session is only in recording format. Those attending all the lectures will be rewarded with a certificate of completion, and handing in the final project will be awarded a certificate of commendation. </pre> </div> <div class="astro-uwueeswy"> <div id="paypal-container-PUADREGKBLFKQ" class="astro-uwueeswy"></div> <script>\n            paypal.HostedButtons({\n              hostedButtonId: "PUADREGKBLFKQ",\n            }).render("#paypal-container-PUADREGKBLFKQ")\n          <\/script> </div> </div> </main> ', "  </body> </html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-uwueeswy" }), renderHead(), renderComponent($$result, "Header", $$Header, { "class": "astro-uwueeswy" }), renderComponent($$result, "Footer", $$Footer, { "class": "astro-uwueeswy" }));
}, "/mnt/l/save/devdrive/learntk/client/src/pages/buy.astro", void 0);

const $$file = "/mnt/l/save/devdrive/learntk/client/src/pages/buy.astro";
const $$url = "/buy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Buy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
