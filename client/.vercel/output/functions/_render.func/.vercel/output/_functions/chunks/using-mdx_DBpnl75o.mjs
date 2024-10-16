import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_BO_t4FVd.mjs';
import { $ as $$Image } from './_astro_assets_8wkmydvh.mjs';
import { $ as $$HeaderLink } from './HeaderLink_CvXT-ZcQ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using MDX",
  "description": "Lorem ipsum dolor sit amet",
  "pubDate": "Jul 02 2022",
  "heroImage": "/blog-placeholder-5.jpg"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-mdx",
    "text": "Why MDX?"
  }, {
    "depth": 2,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 2,
    "slug": "more-links",
    "text": "More Links"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>This theme comes with the <a href=\"https://docs.astro.build/en/guides/integrations-guide/mdx/\">@astrojs/mdx</a> integration installed and configured in your <code dir=\"auto\">astro.config.mjs</code> config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.</p>\n<h2 id=\"why-mdx\">Why MDX?</h2>\n<p>MDX is a special flavor of Markdown that supports embedded JavaScript &#x26; JSX syntax. This unlocks the ability to <a href=\"https://docs.astro.build/en/guides/markdown-content/#mdx-features\">mix JavaScript and UI Components into your Markdown content</a> for things like interactive charts or alerts.</p>\n<p>If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.</p>\n<h2 id=\"example\">Example</h2>\n<p>Here is how you import and use a UI component inside of MDX.<br>\nWhen you open this page in the browser, you should see the clickable button below.</p>\n"
    }), "\n", createVNode($$HeaderLink, {
      href: "#",
      onclick: "alert('clicked!')",
      "set:html": "<p>Embedded component in MDX</p>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"more-links\">More Links</h2>\n<ul>\n<li><a href=\"https://mdxjs.com/docs/what-is-mdx\">MDX Syntax Documentation</a></li>\n<li><a href=\"https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages\">Astro Usage Documentation</a></li>\n<li><strong>Note:</strong> <a href=\"https://docs.astro.build/en/reference/directives-reference/#client-directives\">Client Directives</a> are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.</li>\n</ul>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/blog/using-mdx.mdx";
const file = "/workspaces/learntk/client/src/content/blog/using-mdx.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/learntk/client/src/content/blog/using-mdx.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
