import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, e as renderSlot } from './astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import * as z from 'zod';
import { s as starlightConfig, D as DeprecatedLabelsPropProxy } from './translations_DmADuo8v.mjs';
import { I as Icons, a as I18nBadgeConfigSchema, s as stripLeadingAndTrailingSlashes, H as HeadConfigSchema, B as BadgeConfigSchema, u as urlToSlug, b as slugToLocaleData, c as getSidebarFromConfig, d as getPrevNextLinks, e as getSiteTitle, f as getSiteTitleHref, h as getToC, i as parseAsyncWithFriendlyErrors, j as parseWithFriendlyErrors, $ as $$Page } from './Page_B1S1sQ6L.mjs';

const PrevNextLinkConfigSchema = () => z.union([
  z.boolean(),
  z.string(),
  z.object({
    /** The navigation link URL. */
    link: z.string().optional(),
    /** The navigation link text. */
    label: z.string().optional()
  }).strict()
]).optional();

const defaults = { minHeadingLevel: 2, maxHeadingLevel: 3 };
const TableOfContentsSchema = () => z.union([
  z.object({
    /** The level to start including headings at in the table of contents. Default: 2. */
    minHeadingLevel: z.number().int().min(1).max(6).optional().default(2),
    /** The level to stop including headings at in the table of contents. Default: 3. */
    maxHeadingLevel: z.number().int().min(1).max(6).optional().default(3)
  }),
  z.boolean().transform((enabled) => enabled ? defaults : false)
]).default(defaults).refine((toc) => toc ? toc.minHeadingLevel <= toc.maxHeadingLevel : true, {
  message: "minHeadingLevel must be less than or equal to maxHeadingLevel"
});

const iconNames = Object.keys(Icons);
const HeroSchema = ({ image }) => z.object({
  /**
   * The large title text to show. If not provided, will default to the top-level `title`.
   * Can include HTML.
   */
  title: z.string().optional(),
  /**
   * A short bit of text about your project.
   * Will be displayed in a smaller size below the title.
   */
  tagline: z.string().optional(),
  /** The image to use in the hero. You can provide either a relative `file` path or raw `html`. */
  image: z.union([
    z.object({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: z.string().default(""),
      /** Relative path to an image file in your repo, e.g. `../../assets/hero.png`. */
      file: image()
    }),
    z.object({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: z.string().default(""),
      /** Relative path to an image file in your repo to use in dark mode, e.g. `../../assets/hero-dark.png`. */
      dark: image(),
      /** Relative path to an image file in your repo to use in light mode, e.g. `../../assets/hero-light.png`. */
      light: image()
    }),
    z.object({
      /** Raw HTML string instead of an image file. Useful for inline SVGs or more complex hero content. */
      html: z.string()
    }).transform(({ html }) => ({ html, alt: "" }))
  ]).optional(),
  /** An array of call-to-action links displayed at the bottom of the hero. */
  actions: z.object({
    /** Text label displayed in the link. */
    text: z.string(),
    /** Value for the link’s `href` attribute, e.g. `/page` or `https://mysite.com`. */
    link: z.string(),
    /** Button style to use. One of `primary` (the default), `secondary`, or `minimal`. */
    variant: z.enum(["primary", "secondary", "minimal"]).default("primary"),
    /**
     * An optional icon to display alongside the link text.
     * Can be an inline `<svg>` or the name of one of Starlight’s built-in icons.
     */
    icon: z.union([z.enum(iconNames), z.string().startsWith("<svg")]).transform((icon) => {
      const parsedIcon = z.enum(iconNames).safeParse(icon);
      return parsedIcon.success ? { type: "icon", name: parsedIcon.data } : { type: "raw", html: icon };
    }).optional(),
    /** HTML attributes to add to the link */
    attrs: z.record(z.union([z.string(), z.number(), z.boolean()])).optional()
  }).array().default([])
});

const SidebarBaseSchema = z.object({
  /** The visible label for this item in the sidebar. */
  label: z.string(),
  /** Translations of the `label` for each supported language. */
  translations: z.record(z.string()).default({}),
  /** Adds a badge to the item */
  badge: I18nBadgeConfigSchema()
});
const SidebarGroupSchema = SidebarBaseSchema.extend({
  /** Whether this item should be collapsed by default. */
  collapsed: z.boolean().default(false)
});
const linkHTMLAttributesSchema = z.record(
  z.union([z.string(), z.number(), z.boolean(), z.undefined()])
);
const SidebarLinkItemHTMLAttributesSchema = () => linkHTMLAttributesSchema.default({});
const SidebarLinkItemSchema = SidebarBaseSchema.extend({
  /** The link to this item’s content. Can be a relative link to local files or the full URL of an external page. */
  link: z.string(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
}).strict();
const AutoSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Enable autogenerating a sidebar category from a specific docs directory. */
  autogenerate: z.object({
    /** The directory to generate sidebar items for. */
    directory: z.string().transform(stripLeadingAndTrailingSlashes),
    /**
     * Whether the autogenerated subgroups should be collapsed by default.
     * Defaults to the `AutoSidebarGroup` `collapsed` value.
     */
    collapsed: z.boolean().optional()
    // TODO: not supported by Docusaurus but would be good to have
    /** How many directories deep to include from this directory in the sidebar. Default: `Infinity`. */
    // depth: z.number().optional(),
  })
}).strict();
const ManualSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Array of links and subcategories to display in this category. */
  items: z.lazy(
    () => z.union([
      SidebarLinkItemSchema,
      ManualSidebarGroupSchema,
      AutoSidebarGroupSchema,
      InternalSidebarLinkItemSchema,
      InternalSidebarLinkItemShorthandSchema
    ]).array()
  )
}).strict();
const InternalSidebarLinkItemSchema = SidebarBaseSchema.partial({ label: true }).extend({
  /** The link to this item’s content. Must be a slug of a Content Collection entry. */
  slug: z.string(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
});
const InternalSidebarLinkItemShorthandSchema = z.string().transform((slug) => InternalSidebarLinkItemSchema.parse({ slug }));
const SidebarItemSchema = z.union([
  SidebarLinkItemSchema,
  ManualSidebarGroupSchema,
  AutoSidebarGroupSchema,
  InternalSidebarLinkItemSchema,
  InternalSidebarLinkItemShorthandSchema
]);

const StarlightFrontmatterSchema = (context) => z.object({
  /** The title of the current page. Required. */
  title: z.string(),
  /**
   * A short description of the current page’s content. Optional, but recommended.
   * A good description is 150–160 characters long and outlines the key content
   * of the page in a clear and engaging way.
   */
  description: z.string().optional(),
  /**
   * Custom URL where a reader can edit this page.
   * Overrides the `editLink.baseUrl` global config if set.
   *
   * Can also be set to `false` to disable showing an edit link on this page.
   */
  editUrl: z.union([z.string().url(), z.boolean()]).optional().default(true),
  /** Set custom `<head>` tags just for this page. */
  head: HeadConfigSchema(),
  /** Override global table of contents configuration for this page. */
  tableOfContents: TableOfContentsSchema().optional(),
  /**
   * Set the layout style for this page.
   * Can be `'doc'` (the default) or `'splash'` for a wider layout without any sidebars.
   */
  template: z.enum(["doc", "splash"]).default("doc"),
  /** Display a hero section on this page. */
  hero: HeroSchema(context).optional(),
  /**
   * The last update date of the current page.
   * Overrides the `lastUpdated` global config or the date generated from the Git history.
   */
  lastUpdated: z.union([z.date(), z.boolean()]).optional(),
  /**
   * The previous navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  prev: PrevNextLinkConfigSchema(),
  /**
   * The next navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  next: PrevNextLinkConfigSchema(),
  sidebar: z.object({
    /**
     * The order of this page in the navigation.
     * Pages are sorted by this value in ascending order. Then by slug.
     * If not provided, pages will be sorted alphabetically by slug.
     * If two pages have the same order value, they will be sorted alphabetically by slug.
     */
    order: z.number().optional(),
    /**
     * The label for this page in the navigation.
     * Defaults to the page `title` if not set.
     */
    label: z.string().optional(),
    /**
     * Prevents this page from being included in autogenerated sidebar groups.
     */
    hidden: z.boolean().default(false),
    /**
     * Adds a badge to the sidebar link.
     * Can be a string or an object with a variant and text.
     * Variants include 'note', 'tip', 'caution', 'danger', 'success', and 'default'.
     * Passing only a string defaults to the 'default' variant which uses the site accent color.
     */
    badge: BadgeConfigSchema(),
    /** HTML attributes to add to the sidebar link. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
  }).default({}),
  /** Display an announcement banner at the top of this page. */
  banner: z.object({
    /** The content of the banner. Supports HTML syntax. */
    content: z.string()
  }).optional(),
  /** Pagefind indexing for this page - set to false to disable. */
  pagefind: z.boolean().default(true),
  /**
   * Indicates that this page is a draft and will not be included in production builds.
   * Note that the page will still be available when running Astro in development mode.
   */
  draft: z.boolean().default(false)
});
function docsSchema(...args) {
  const [options = {}] = args;
  const { extend } = options;
  return (context) => {
    const UserSchema = typeof extend === "function" ? extend(context) : extend;
    return UserSchema ? StarlightFrontmatterSchema(context).and(UserSchema) : StarlightFrontmatterSchema(context);
  };
}

const StarlightPageFrontmatterSchema = async (context) => {
  const userDocsSchema = await getUserDocsSchema();
  const schema = typeof userDocsSchema === "function" ? userDocsSchema(context) : userDocsSchema;
  return schema.transform((frontmatter) => {
    const { editUrl, sidebar, ...others } = frontmatter;
    const pageEditUrl = editUrl === void 0 || editUrl === true ? false : editUrl;
    return { ...others, editUrl: pageEditUrl };
  });
};
const validateSidebarProp = (sidebarProp) => {
  return parseWithFriendlyErrors(
    SidebarItemSchema.array().optional(),
    sidebarProp,
    "Invalid sidebar prop passed to the `<StarlightPage/>` component."
  );
};
async function generateStarlightPageRouteData({
  props,
  url
}) {
  const { isFallback, frontmatter, ...routeProps } = props;
  const slug = urlToSlug(url);
  const pageFrontmatter = await getStarlightPageFrontmatter(frontmatter);
  const id = `${stripLeadingAndTrailingSlashes(slug)}.md`;
  const localeData = slugToLocaleData(slug);
  const sidebar = getSidebarFromConfig(
    props.sidebar ? validateSidebarProp(props.sidebar) : starlightConfig.sidebar,
    url.pathname,
    localeData.locale
  );
  const headings = props.headings ?? [];
  const pageDocsEntry = {
    id,
    slug,
    body: "",
    collection: "docs",
    data: {
      ...pageFrontmatter,
      sidebar: {
        attrs: {},
        hidden: false
      }
    }
  };
  const entry = pageDocsEntry;
  const entryMeta = {
    dir: props.dir ?? localeData.dir,
    lang: props.lang ?? localeData.lang,
    locale: localeData.locale
  };
  const editUrl = pageFrontmatter.editUrl ? new URL(pageFrontmatter.editUrl) : void 0;
  const lastUpdated = pageFrontmatter.lastUpdated instanceof Date ? pageFrontmatter.lastUpdated : void 0;
  const routeData = {
    ...routeProps,
    ...localeData,
    id,
    editUrl,
    entry,
    entryMeta,
    hasSidebar: props.hasSidebar ?? entry.data.template !== "splash",
    headings,
    labels: DeprecatedLabelsPropProxy,
    lastUpdated,
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    sidebar,
    siteTitle: getSiteTitle(localeData.lang),
    siteTitleHref: getSiteTitleHref(localeData.locale),
    slug,
    toc: getToC({
      ...routeProps,
      ...localeData,
      entry,
      entryMeta,
      headings,
      id,
      locale: localeData.locale,
      slug
    })
  };
  if (isFallback) {
    routeData.isFallback = true;
  }
  return routeData;
}
async function getStarlightPageFrontmatter(frontmatter) {
  const schema = await StarlightPageFrontmatterSchema({
    image: () => z.object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
      format: z.union([
        z.literal("png"),
        z.literal("jpg"),
        z.literal("jpeg"),
        z.literal("tiff"),
        z.literal("webp"),
        z.literal("gif"),
        z.literal("svg"),
        z.literal("avif")
      ])
    })
  });
  return parseAsyncWithFriendlyErrors(
    schema,
    frontmatter,
    "Invalid frontmatter props passed to the `<StarlightPage/>` component."
  );
}
async function getUserDocsSchema() {
  const userCollections = (await import('./collection-config_BTGWu_17.mjs')).collections;
  return userCollections?.docs.schema ?? docsSchema();
}

const $$Astro = createAstro("https://example.com");
const $$StarlightPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StarlightPage;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { ...await generateStarlightPageRouteData({ props: Astro2.props, url: Astro2.url }) }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/workspaces/learntk/client/node_modules/@astrojs/starlight/components/StarlightPage.astro", void 0);

export { $$StarlightPage as $, docsSchema as d };
