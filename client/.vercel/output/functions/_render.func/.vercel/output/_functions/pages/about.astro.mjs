import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_CsMIBWYA.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "CodeCreators", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("2024"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
We are Code Creators - a student led project teaching students how to code in Python. We came together and created this course as we realised that, nowadays, there is an ever increasing demand for graduates to understand the basics of programming and in many jobs especially those involving quantitative aspects, knowledge of Python is becoming more desirable everyday. Whether you are aspiring to a career in analytics, computer science or looking to start a digital business, our aim is to provide comprehensive beginner classes for people who have an interest in the subject but are unsure where to begin. You will gain fundamental understanding of Python and build confidence to independently delve deeper into the subject.
</p> <h1 style="text-align: center;"> Enactus </h1> <hr> <p>
Enactus Sheffield is an international non-profit organization that works with leaders in business and higher education to mobilize university students to make a difference in their communities while developing the skills to become socially responsible business leaders. CodeCreators falls under the commercial portfolio of Enactus Sheffield because we generate income to financially support other local and international projects.
</p> ` })}`;
}, "/workspaces/learntk/client/src/pages/about.astro", void 0);

const $$file = "/workspaces/learntk/client/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
