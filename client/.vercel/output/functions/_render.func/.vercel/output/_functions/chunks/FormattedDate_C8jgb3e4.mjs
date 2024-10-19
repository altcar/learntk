import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from './astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://learntk.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/workspaces/learntk/client/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
