import { c as createAstro, a as createComponent } from '../../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  console.log(Astro2.cookies.get("discord")?.value);
  if (Astro2.cookies.get("discord")?.value != void 0) {
    var detail = JSON.parse(Astro2.cookies.get("discord")?.value ?? "{}");
    if (detail.subscribed) {
      return Astro2.redirect(`/api/auth/dcreply?id=${detail.discord_id}`);
    } else {
      return Astro2.redirect("https://learntk-auth.vercel.app/auth/discord");
    }
  } else {
    return Astro2.redirect("https://learntk-auth.vercel.app/auth/discord");
  }
}, "/workspaces/learntk/client/src/pages/api/login.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/api/login.astro";
const $$url = "/api/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
