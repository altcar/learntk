import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, f as addAttribute } from './astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import { $ as $$HeaderLink } from './HeaderLink_CRjDhGvO.mjs';
import { S as SITE_TITLE } from './consts_B7JnSmnR.mjs';
import { $ as $$Image } from './_astro_assets_qasWVWBg.mjs';
/* empty css                         */
import 'clsx';

const $$Astro$1 = createAstro("https://learntk.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.props;
  var cookie1 = Astro2.cookies.get("discord");
  var JSONcookie;
  if (cookie1 != void 0) {
    JSONcookie = JSON.parse(cookie1.value);
  }
  return renderTemplate`${maybeRenderHead()}<header class="astro-3ef6ksr2"> <nav class="astro-3ef6ksr2"> <div style="    display: flex;		align-items: center;" class="astro-3ef6ksr2"> ${renderComponent($$result, "Image", $$Image, { "src": "/favicon.png", "alt": "", "width": "35", "height": "35", "class": "astro-3ef6ksr2" })} <h2 class="astro-3ef6ksr2"><a href="/" class="astro-3ef6ksr2">${SITE_TITLE}</a></h2> </div> <div class="internal-links astro-3ef6ksr2"> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "astro-3ef6ksr2" }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/buy", "class": "astro-3ef6ksr2" }, { "default": ($$result2) => renderTemplate`Purchase` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "astro-3ef6ksr2" }, { "default": ($$result2) => renderTemplate`About` })} </div> <div class="state astro-3ef6ksr2"> <img${addAttribute(JSONcookie != void 0 ? JSONcookie.discord_avatar : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.worldfuturecouncil.org%2Fwp-content%2Fuploads%2F2020%2F06%2Fblank-profile-picture-973460_1280-1-705x705.png&f=1&nofb=1&ipt=90c01c62e032c1dea2338dd33dfa491d732e3ec1de41cf35a092d7ba35eabacb&ipo=images", "src")} alt="" class="astro-3ef6ksr2"> <div class="stateright astro-3ef6ksr2"> <div class="top123 astro-3ef6ksr2">${JSONcookie != void 0 ? JSONcookie.certificate_name != void 0 ? renderTemplate`<a href="/welcome" class="astro-3ef6ksr2">Welcome back, ${JSONcookie.certificate_name}</a>` : renderTemplate`<a href="/welcome" class="astro-3ef6ksr2">Inital Setup required</a>` : renderTemplate`<a href="/api/login" class="astro-3ef6ksr2">Please sign in</a>`}</div> <div class="btm123 astro-3ef6ksr2">${JSONcookie != void 0 ? renderTemplate`<a href="/course" class="astro-3ef6ksr2">Go to course</a>` : renderTemplate`<a href="/" class="astro-3ef6ksr2"></a>`} ${JSONcookie != void 0 ? renderTemplate`<a href="/api/logout" class="astro-3ef6ksr2">Logout</a>` : renderTemplate`<a href="/api/login" class="astro-3ef6ksr2">w Discord</a>`} </div> </div> </div>  <!--<div class="social-links">
			 <a href="https://m.webtoo.ls/@astro" target="_blank">
				<span class="sr-only">Follow Astro on Mastodon</span>
				<svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"
					><path
						fill="currentColor"
						d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
					></path></svg
				>
			</a> 
			<a href="https://github.com/withastro/astro" target="_blank">
				<span class="sr-only">Go to Astro's GitHub repo</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" width="32" height="32">
				<path fill-rule="evenodd" fill="currentColor"  clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#758CA3"/>
				</svg>
			</a>
			<a href="https://github.com/withastro/astro" target="_blank">
				<span class="sr-only">Go to Astro's GitHub repo</span>
			<svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
				<path fill="currentColor" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
				<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
				</svg>
				</a>
			<a href="https://twitter.com/astrodotbuild" target="_blank">
				<span class="sr-only">Follow Astro on Twitter</span>
				<svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"
					><path
						fill="currentColor"
						d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
					></path></svg
				>
			</a>
			<!-- <a href="https://github.com/withastro/astro" target="_blank">
				<span class="sr-only">Go to Astro's GitHub repo</span>
				
			</a>
		</div> --> </nav> </header> `;
}, "/workspaces/learntk/client/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://learntk.vercel.app");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="astro-sz7xmlte">
&copy; ${today.getFullYear()} Shalev Lau. All rights reserved.
<div class="social-links astro-sz7xmlte"> <!-- <a href="https://m.webtoo.ls/@astro" target="_blank">
			<span class="sr-only">Follow Astro on Mastodon</span>
			<svg
				viewBox="0 0 16 16"
				aria-hidden="true"
				width="32"
				height="32"
				astro-icon="social/mastodon"
				><path
					fill="currentColor"
					d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
				></path></svg
			>
		</a> --> <a href="https://twitter.com/astrodotbuild" target="_blank" class="astro-sz7xmlte"> <span class="sr-only astro-sz7xmlte">Follow Astro on Twitter</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/twitter" class="astro-sz7xmlte"><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" class="astro-sz7xmlte"></path></svg> </a> <!-- <a href="https://github.com/withastro/astro" target="_blank">
			<span class="sr-only">Go to Astro's GitHub repo</span>
			<svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/github"
				><path
					fill="currentColor"
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				></path></svg
			>
		</a> --> <a href="https://github.com/withastro/astro" target="_blank" class="astro-sz7xmlte"> <span class="sr-only astro-sz7xmlte">Go to Astro's GitHub repo</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="meteor-icon-kit__solid-linkedin" width="32" height="32" class="astro-sz7xmlte"> <path fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z" fill="#758CA3" class="astro-sz7xmlte"></path> </svg> </a> <a href="https://github.com/withastro/astro" target="_blank" class="astro-sz7xmlte"> <span class="sr-only astro-sz7xmlte">Go to Astro's GitHub repo</span> <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-sz7xmlte"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F" class="astro-sz7xmlte"></path> <path fill="currentColor" d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F" class="astro-sz7xmlte"></path> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F" class="astro-sz7xmlte"></path> </svg> </a> </div> </footer> `;
}, "/workspaces/learntk/client/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
