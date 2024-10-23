import { c as createAstro, a as createComponent, r as renderTemplate, f as addAttribute, d as renderHead, b as renderComponent } from '../chunks/astro/server_BPnEgIHd.mjs';
import 'kleur/colors';
import { $ as $$BaseHead } from '../chunks/BaseHead_CwEaNICo.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_B7JnSmnR.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://learntk.vercel.app");
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Welcome;
  var detail;
  var new1 = true;
  console.log(Astro2.cookies.has("discord"));
  if (Astro2.cookies.get("discord")?.value ?? false) {
    detail = JSON.parse(Astro2.cookies.get("discord")?.value ?? "{}");
    if (detail.subscribed) {
      const discordValue = JSON.parse(Astro2.cookies.get("discord")?.value ?? "{}");
      if (discordValue.certificate_name != void 0) {
        new1 = false;
      }
    } else {
      return Astro2.redirect("/404");
    }
  } else {
    return Astro2.redirect("/404");
  }
  const errors = { printedname: "", email: "", password: "" };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const password = data.get("password");
      var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
      if (typeof name !== "string" || name == null) {
        errors.printedname += "Please enter a name for Certificate. ";
      } else if (name.length < 4) {
        errors.printedname += "Please enter a name for Certificate. ";
      }
      if (typeof email !== "string" || !pattern.test(email)) {
        errors.email += "Please enter a valid email. ";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
        return Astro2.redirect("/course");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-232m4wxw"> <head>', '<!-- <script is:inline src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script>\n         <script is:inline>\n      <\/script> -->', '</head> <body class="astro-232m4wxw"> <div class="login-box astro-232m4wxw"> <form method="POST" class="astro-232m4wxw"> <h2 class="astro-232m4wxw">Welcome Onboard</h2> <div class="user-box astro-232m4wxw"> <input type="text" name="name" required', ' class="astro-232m4wxw"> <label class="astro-232m4wxw">Name on Certificate</label> </div> <div class="user-box astro-232m4wxw"> <input type="text" name="email" required', ' class="astro-232m4wxw"> <label class="astro-232m4wxw">Is this email you wish to communicate with?</label> </div> <button type="submit" class="astro-232m4wxw">submit</button> ', " ", " </form> </div>  </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-232m4wxw" }), renderHead(), addAttribute(new1 ? detail?.certificate_name ?? "" : "", "value"), addAttribute(detail?.discord_email ?? "", "value"), errors.printedname && renderTemplate`<p class="astro-232m4wxw">${errors.printedname}</p>`, errors.email && renderTemplate`<p class="astro-232m4wxw">${errors.email}</p>`);
}, "/mnt/l/save/devdrive/learntk/client/src/pages/welcome.astro", void 0);

const $$file = "/mnt/l/save/devdrive/learntk/client/src/pages/welcome.astro";
const $$url = "/welcome";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Welcome,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
