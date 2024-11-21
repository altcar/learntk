import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_db6dVzp5.mjs';
import { manifest } from './manifest_DqxrGiZX.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/auth/firebase/client.astro.mjs');
const _page4 = () => import('./pages/api/auth/firebase/server.astro.mjs');
const _page5 = () => import('./pages/api/auth/firebase.astro.mjs');
const _page6 = () => import('./pages/api/auth/_id_.json.astro.mjs');
const _page7 = () => import('./pages/api/login.astro.mjs');
const _page8 = () => import('./pages/api/logout.astro.mjs');
const _page9 = () => import('./pages/buy.astro.mjs');
const _page10 = () => import('./pages/course/dump.astro.mjs');
const _page11 = () => import('./pages/course.astro.mjs');
const _page12 = () => import('./pages/course/_---slug_.astro.mjs');
const _page13 = () => import('./pages/dc.astro.mjs');
const _page14 = () => import('./pages/mobile.astro.mjs');
const _page15 = () => import('./pages/new1.astro.mjs');
const _page16 = () => import('./pages/rss.xml.astro.mjs');
const _page17 = () => import('./pages/welcome.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const _page19 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/auth/firebase/client.ts", _page3],
    ["src/pages/api/auth/firebase/server.ts", _page4],
    ["src/pages/api/auth/firebase.ts", _page5],
    ["src/pages/api/auth/[id].json.ts", _page6],
    ["src/pages/api/login.astro", _page7],
    ["src/pages/api/logout.astro", _page8],
    ["src/pages/buy.astro", _page9],
    ["src/pages/course/dump/index.astro", _page10],
    ["src/pages/course/index.astro", _page11],
    ["src/pages/course/[...slug].astro", _page12],
    ["src/pages/dc.astro", _page13],
    ["src/pages/mobile.astro", _page14],
    ["src/pages/new1.astro", _page15],
    ["src/pages/rss.xml.js", _page16],
    ["src/pages/welcome.astro", _page17],
    ["src/pages/index.astro", _page18],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page19]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "11d5de06-d205-4875-b7a4-f4f5b3a5ba62",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
