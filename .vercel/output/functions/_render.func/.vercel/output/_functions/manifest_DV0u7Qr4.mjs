import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_rdHpSKek.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_BO_t4FVd.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CT3jP1RJ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///workspaces/learntk/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/auth/dcreply","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/dcreply","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/dcreply\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"dcreply","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/dcreply.ts","pathname":"/api/auth/dcreply","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/auth/register","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/auth/signin","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/auth/signout","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/firebase/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/firebase","isIndex":false,"type":"page","pattern":"^\\/api\\/firebase\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"firebase","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/firebase.astro","pathname":"/api/firebase","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login","isIndex":false,"type":"page","pattern":"^\\/api\\/login\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.astro","pathname":"/api/login","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/logout/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/logout","isIndex":false,"type":"page","pattern":"^\\/api\\/logout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/logout.astro","pathname":"/api/logout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api","isIndex":true,"type":"page","pattern":"^\\/api\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/index.astro","pathname":"/api","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"buy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/buy","isIndex":false,"type":"page","pattern":"^\\/buy\\/?$","segments":[[{"content":"buy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/buy.astro","pathname":"/buy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"course/dump/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/course/dump","isIndex":true,"type":"page","pattern":"^\\/course\\/dump\\/?$","segments":[[{"content":"course","dynamic":false,"spread":false}],[{"content":"dump","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/course/dump/index.astro","pathname":"/course/dump","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"course/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/course","isIndex":true,"type":"page","pattern":"^\\/course\\/?$","segments":[[{"content":"course","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/course/index.astro","pathname":"/course","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"mobile/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mobile","isIndex":false,"type":"page","pattern":"^\\/mobile\\/?$","segments":[[{"content":"mobile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mobile.astro","pathname":"/mobile","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"new1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/new1","isIndex":false,"type":"page","pattern":"^\\/new1\\/?$","segments":[[{"content":"new1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/new1.astro","pathname":"/new1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"welcome/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/welcome","isIndex":false,"type":"page","pattern":"^\\/welcome\\/?$","segments":[[{"content":"welcome","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/welcome.astro","pathname":"/welcome","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.7qqag-5g.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/workspaces/learntk/src/pages/buy.astro",{"propagation":"none","containsHead":true}],["/workspaces/learntk/src/pages/course/dump/index.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/learntk/src/pages/course/index.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/learntk/src/pages/welcome.astro",{"propagation":"none","containsHead":true}],["/workspaces/learntk/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/workspaces/learntk/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/workspaces/learntk/src/pages/course/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/routes/static/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/components/SidebarPersister.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Sidebar",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/components/StarlightPage.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/src/content/docs/24b/index.mdx",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/src/content/docs/24b/index.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/src/pages/new1.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/new1@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/routes/common.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/utils/route-data.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/utils/starlight-page.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/internal.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:astro-expressive-code/preprocess-config",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/astro-expressive-code/components/renderer.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/astro-expressive-code/components/Code.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/astro-expressive-code/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/components.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/components/Footer.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Footer",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/locals.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:middleware",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/user-components/Aside.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/node_modules/@astrojs/starlight/user-components/FileTree.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/src/content/config.ts",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/collection-config",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/course/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/course/dump/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/course/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/learntk/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astro-page:src/pages/api/firebase@_@astro":"pages/api/firebase.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/auth/dcreply@_@ts":"pages/api/auth/dcreply.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/api/login@_@astro":"pages/api/login.astro.mjs","\u0000@astro-page:src/pages/api/logout@_@astro":"pages/api/logout.astro.mjs","\u0000@astro-page:src/pages/api/index@_@astro":"pages/api.astro.mjs","\u0000@astro-page:src/pages/buy@_@astro":"pages/buy.astro.mjs","\u0000@astro-page:src/pages/course/dump/index@_@astro":"pages/course/dump.astro.mjs","\u0000@astro-page:src/pages/course/index@_@astro":"pages/course.astro.mjs","\u0000@astro-page:src/pages/course/[...slug]@_@astro":"pages/course/_---slug_.astro.mjs","\u0000@astro-page:src/pages/mobile@_@astro":"pages/mobile.astro.mjs","\u0000@astro-page:src/pages/new1@_@astro":"pages/new1.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/welcome@_@astro":"pages/welcome.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/index@_@astro":"pages/_---slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/workspaces/learntk/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/workspaces/learntk/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/workspaces/learntk/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_DGol3R_V.mjs","/workspaces/learntk/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_BLTCZj5i.mjs","/workspaces/learntk/src/content/docs/24b/Week1.md?astroContentCollectionEntry=true":"chunks/Week1_CZUNqq3Q.mjs","/workspaces/learntk/src/content/docs/24b/Week2.md?astroContentCollectionEntry=true":"chunks/Week2_CVBcfD82.mjs","/workspaces/learntk/src/content/docs/24b/Week3.md?astroContentCollectionEntry=true":"chunks/Week3_qqzcRk2R.mjs","/workspaces/learntk/src/content/docs/24b/Week4.md?astroContentCollectionEntry=true":"chunks/Week4_T7vyo_N1.mjs","/workspaces/learntk/src/content/docs/24b/Week5.md?astroContentCollectionEntry=true":"chunks/Week5_BwKWYHMi.mjs","/workspaces/learntk/src/content/docs/24b/Week6.md?astroContentCollectionEntry=true":"chunks/Week6_ChnK3JBY.mjs","/workspaces/learntk/src/content/docs/24b/Week7.md?astroContentCollectionEntry=true":"chunks/Week7_CsiS60NW.mjs","/workspaces/learntk/src/content/docs/24b/index.mdx?astroContentCollectionEntry=true":"chunks/index_lcyu8-Dv.mjs","/workspaces/learntk/src/content/docs/Week1.md?astroContentCollectionEntry=true":"chunks/Week1_mR1ldkAt.mjs","/workspaces/learntk/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_BntNtybh.mjs","/workspaces/learntk/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_COoqTzfh.mjs","/workspaces/learntk/src/content/docs/24b/Week1.md?astroPropagatedAssets":"chunks/Week1_fVWwfdJK.mjs","/workspaces/learntk/src/content/docs/24b/Week2.md?astroPropagatedAssets":"chunks/Week2_dxFSAhmv.mjs","/workspaces/learntk/src/content/docs/24b/Week3.md?astroPropagatedAssets":"chunks/Week3_8GU58gX2.mjs","/workspaces/learntk/src/content/docs/24b/Week4.md?astroPropagatedAssets":"chunks/Week4_BlnP-7jA.mjs","/workspaces/learntk/src/content/docs/24b/Week5.md?astroPropagatedAssets":"chunks/Week5_hYM3toOc.mjs","/workspaces/learntk/src/content/docs/24b/Week6.md?astroPropagatedAssets":"chunks/Week6_CL1rad4o.mjs","/workspaces/learntk/src/content/docs/24b/Week7.md?astroPropagatedAssets":"chunks/Week7_CSYW3pjL.mjs","/workspaces/learntk/src/content/docs/24b/index.mdx?astroPropagatedAssets":"chunks/index_CpgYQg1f.mjs","/workspaces/learntk/src/content/docs/Week1.md?astroPropagatedAssets":"chunks/Week1_QcH4Q1J1.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","\u0000virtual:starlight/collection-config":"chunks/collection-config_S24stnFc.mjs","\u0000virtual:astro-expressive-code/config":"chunks/config_CgpVK1cA.mjs","/workspaces/learntk/node_modules/astro-expressive-code/dist/index.js":"chunks/index_DaVK51eC.mjs","/workspaces/learntk/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_DBYuN08p.mjs","/workspaces/learntk/src/content/blog/using-mdx.mdx":"chunks/using-mdx_DhbH3wsk.mjs","/workspaces/learntk/src/content/docs/24b/Week1.md":"chunks/Week1_BkUdFTOV.mjs","/workspaces/learntk/src/content/docs/24b/Week2.md":"chunks/Week2_yvwuGu0j.mjs","/workspaces/learntk/src/content/docs/24b/Week3.md":"chunks/Week3_CuM3IY9_.mjs","/workspaces/learntk/src/content/docs/24b/Week4.md":"chunks/Week4_BRDahfnC.mjs","/workspaces/learntk/src/content/docs/24b/Week5.md":"chunks/Week5_chkSQJLu.mjs","/workspaces/learntk/src/content/docs/24b/Week6.md":"chunks/Week6_JR7u6JGi.mjs","/workspaces/learntk/src/content/docs/24b/Week7.md":"chunks/Week7_CiOHLZht.mjs","/workspaces/learntk/src/content/docs/24b/index.mdx":"chunks/index_C6ZWMmWU.mjs","/workspaces/learntk/src/content/docs/Week1.md":"chunks/Week1__cSSi063.mjs","/workspaces/learntk/src/content/config.ts":"chunks/config_A8hRuDYC.mjs","\u0000virtual:astro-expressive-code/ec-config":"chunks/ec-config_CzTTOeiV.mjs","\u0000@astrojs-manifest":"manifest_DV0u7Qr4.mjs","\u0000virtual:astro-expressive-code/preprocess-config":"chunks/preprocess-config_B2eGLDcR.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.g_okTbDL.js","/astro/hoisted.js?q=0":"_astro/hoisted.Dq1nYirl.js","/workspaces/learntk/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts":"_astro/LanguageSelect.astro_astro_type_script_index_0_lang.Jg41O9g5.js","/workspaces/learntk/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeSelect.astro_astro_type_script_index_0_lang.Znk7Hhgg.js","/workspaces/learntk/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts":"_astro/MobileMenuToggle.astro_astro_type_script_index_0_lang.CsfLbggW.js","/workspaces/learntk/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts":"_astro/MobileTableOfContents.astro_astro_type_script_index_0_lang.pz0qJK_l.js","/workspaces/learntk/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js","/workspaces/learntk/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.PyKeGeea.js","/workspaces/learntk/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts":"_astro/Search.astro_astro_type_script_index_0_lang.CA90Rzk_.js","astro:scripts/page.js":"_astro/page.7qqag-5g.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/workspaces/learntk/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts":"_astro/Page.astro_astro_type_script_index_0_lang.BHQeG8Vj.js","/workspaces/learntk/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts":"_astro/TableOfContents.astro_astro_type_script_index_0_lang.DCp6qTdA.js","/astro/hoisted.js?q=2":"_astro/hoisted.CmLuQKWl.js","/astro/hoisted.js?q=3":"_astro/hoisted.CpX6gyM5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ec.j8ofn.css","/_astro/ec.8zarh.js","/_astro/Search_astro_astro_type_style_index_0_lang.Ce9dzbte.css","/_astro/markdown.9dtue8ot.css","/_astro/props.B3dtTxWa.css","/_astro/ui.Dh4Tlrn7.css","/IMG_2845_edited.webp","/Plant Shadow _edited.webp","/WhatsApp Image 2024-02-20 at 20_52_37_297df171.webp","/WhatsApp Image 2024-02-20 at 20_52_59_c2b5c18e.webp","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.png","/favicon1.svg","/jquery.min.js","/Lesson/Lesson0.pdf","/Lesson/Lesson0.pptx","/Lesson/Lesson2.pdf","/Lesson/Lesson2.pptx","/Lesson/Lesson3.pdf","/Lesson/Lesson3.pptx","/Lesson/Lesson4.pdf","/Lesson/Lesson4.pptx","/Lesson/Lesson5.pdf","/Lesson/Lesson5.pptx","/_astro/LanguageSelect.astro_astro_type_script_index_0_lang.Jg41O9g5.js","/_astro/MobileMenuToggle.astro_astro_type_script_index_0_lang.CsfLbggW.js","/_astro/MobileTableOfContents.astro_astro_type_script_index_0_lang.pz0qJK_l.js","/_astro/Page.astro_astro_type_script_index_0_lang.BHQeG8Vj.js","/_astro/Search.astro_astro_type_script_index_0_lang.CA90Rzk_.js","/_astro/TableOfContents.astro_astro_type_script_index_0_lang.DCp6qTdA.js","/_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js","/_astro/ThemeSelect.astro_astro_type_script_index_0_lang.Znk7Hhgg.js","/_astro/client.5I5BMcNS.js","/_astro/hoisted.CmLuQKWl.js","/_astro/hoisted.CpX6gyM5.js","/_astro/hoisted.g_okTbDL.js","/_astro/page.7qqag-5g.js","/_astro/ui-core.PyKeGeea.js","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/_astro/page.7qqag-5g.js","/404.html","/about/index.html","/api/auth/dcreply","/api/auth/register","/api/auth/signin","/api/auth/signout","/api/firebase/index.html","/api/login/index.html","/api/logout/index.html","/api/index.html","/buy/index.html","/course/dump/index.html","/course/index.html","/mobile/index.html","/new1/index.html","/rss.xml","/welcome/index.html","/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"a7/dsXo4EvxMuWmlTqsllj4iq2woepslpssk8P64Pgw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
