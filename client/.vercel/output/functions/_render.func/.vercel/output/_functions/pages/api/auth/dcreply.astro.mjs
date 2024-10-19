import { c as createAstro, a as createComponent, r as renderTemplate } from '../../../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';
import { d as discord_data } from '../../../chunks/firebase_BzmB-pzN.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://learntk.vercel.app");
const Astro = $$Astro;
const GET = async ({
  params,
  request,
  redirect,
  cookies
}) => {
  var hash;
  var myJson = {};
  var url = request.url;
  var hashes = url.slice(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    myJson[hash[0]] = hash[1];
  }
  if (myJson.id == "undefined" || myJson.id == void 0 || myJson.id == null) return Astro.redirect("https://learntk.vercel.app/");
  var ne1 = await discord_data(myJson.id);
  if (ne1 == void 0 || ne1 == null) return Astro.redirect("/");
  delete ne1.JSON_discord_channel;
  delete ne1.JSON_discord_user;
  delete ne1.JSON_discord_cc_server;
  cookies.set("discord", JSON.stringify(ne1), { path: "/" });
  console.log(ne1.newuser);
  return ne1.newuser == void 0 || ne1.newuser == true ? Astro.redirect("https://learntk.vercel.app/welcome") : Astro.redirect("https://learntk.vercel.app/course");
};
const POST = async ({ request, redirect }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    const name = body.name;
    return new Response(
      JSON.stringify({
        message: "Your name was: " + name
      }),
      {
        status: 200
      }
    );
  }
  return new Response(null, { status: 300 });
};
const $$Dcreply = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dcreply;
  return renderTemplate``;
}, "/workspaces/learntk/client/src/pages/api/auth/dcreply.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/api/auth/dcreply.astro";
const $$url = "/api/auth/dcreply";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  default: $$Dcreply,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
