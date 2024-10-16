import { F as Fragment, _ as __astro_tag_component__, g as createVNode } from './astro/server_BO_t4FVd.mjs';
import { $ as $$Image } from './_astro_assets_ChKmtZWL.mjs';
import './StarlightPage_CyIVIiFv.mjs';
import 'clsx';

const frontmatter = {
  "title": "Meeting link"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "google-meet-link",
    "text": "Google meet link"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"google-meet-link\">Google meet link</h2>\n<p><a href=\"https://meet.google.com/nvm-vdfw-nbu\">https://meet.google.com/nvm-vdfw-nbu</a></p>"
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
const url = "src/content/docs/24b/index.mdx";
const file = "/workspaces/learntk/src/content/docs/24b/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/learntk/src/content/docs/24b/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
