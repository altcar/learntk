import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BO_t4FVd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>This week we will learn about module and file handling</p>\n<h2 id=\"google-meet-link\">Google meet link</h2>\n<p><a href=\"https://meet.google.com/nvm-vdfw-nbu\">https://meet.google.com/nvm-vdfw-nbu</a></p>\n<h2 id=\"no-task-this-week\">No Task This Week</h2>\n<p>Familiarise yourself with the previous week</p>\n<h2 id=\"lesson-powerpoint\">Lesson powerpoint</h2>\n<iframe src=\"https://onedrive.live.com/embed?resid=3EFF31181B9ABFC5%2110518&#x26;authkey=!AA4X5d4d4zhh9Xc&#x26;em=2&#x26;wdAr=1.7777777777777777\" width=\"600px\" height=\"288px\" frameborder=\"0\">This is an embedded &#x3C;a target=\"_blank\" href=\"https://office.com\">Microsoft Office&#x3C;/a> presentation, powered by &#x3C;a target=\"_blank\" href=\"https://office.com/webapps\">Office&#x3C;/a>.</iframe>\n<!-- ## Lesson pdf -->\n<!-- <object data=\"/Lesson0.pdf\" type=\"application/pdf\" width=\"100%\" height=\"500px\">\n    <p>Unable to display PDF file. <a href=\"/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf\">Download</a> instead.</p>\n</object> -->\n<h2 id=\"youtube-recording\">YouTube recording</h2>\n<!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/6Tq-rGTN7Ow?si=F8IwLPWzh30CIM2f\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe> -->";

				const frontmatter = {"title":"Lesson 6"};
				const file = "/workspaces/learntk/client/src/content/docs/24b/Week6.md";
				const url = undefined;
				function rawContent() {
					return "\r\nThis week we will learn about module and file handling\r\n\r\n## Google meet link\r\n\r\n[https://meet.google.com/nvm-vdfw-nbu](https://meet.google.com/nvm-vdfw-nbu)\r\n\r\n## No Task This Week\r\n\r\nFamiliarise yourself with the previous week\r\n\r\n## Lesson powerpoint\r\n\r\n<iframe src=\"https://onedrive.live.com/embed?resid=3EFF31181B9ABFC5%2110518&amp;authkey=!AA4X5d4d4zhh9Xc&amp;em=2&amp;wdAr=1.7777777777777777\" width=\"600px\" height=\"288px\" frameborder=\"0\">This is an embedded <a target=\"_blank\" href=\"https://office.com\">Microsoft Office</a> presentation, powered by <a target=\"_blank\" href=\"https://office.com/webapps\">Office</a>.</iframe>\r\n\r\n<!-- ## Lesson pdf -->\r\n\r\n<!-- <object data=\"/Lesson0.pdf\" type=\"application/pdf\" width=\"100%\" height=\"500px\">\r\n    <p>Unable to display PDF file. <a href=\"/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf\">Download</a> instead.</p>\r\n</object> -->\r\n\r\n## YouTube recording\r\n\r\n<!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/6Tq-rGTN7Ow?si=F8IwLPWzh30CIM2f\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe> -->\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"google-meet-link","text":"Google meet link"},{"depth":2,"slug":"no-task-this-week","text":"No Task This Week"},{"depth":2,"slug":"lesson-powerpoint","text":"Lesson powerpoint"},{"depth":2,"slug":"youtube-recording","text":"YouTube recording"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
