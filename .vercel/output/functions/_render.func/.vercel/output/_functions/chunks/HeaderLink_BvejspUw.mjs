import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, e as renderSlot } from './astro/server_BO_t4FVd.mjs';
/* empty css                                                                  */
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + subpath?.[0];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([[className, { active: isActive }], "astro-eimmu3lg"], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/workspaces/learntk/src/components/HeaderLink.astro", void 0);

export { $$HeaderLink as $ };
