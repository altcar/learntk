const id = "Week1.md";
						const collection = "docs";
						const slug = "week1";
						const body = "\r\n## Final Project Submission\r\n> after you have uploaded, you will get a feedback and certificate within a week\r\n\r\n> if you get an error, you must login at [https://cc.shalify.eu.org](https://cc.shalify.eu.org) \r\n\r\n**Option 1: <a href=\"https://ufile.io/\" target=\"_blank\">upload the file and paste the link below</a><br>\r\nOption 2: Click \"SHARE\" on replit and paste the share link below**\r\n\r\n\r\n<form method=\"post\" id=\"form\" action=\"https://docs.google.com/forms/d/e/1FAIpQLSePSSiHS2iW862fmM5gqAm9TXLbcIzEmlqaxrNWv_BTxgCmIA/formResponse\">\r\n    <label for=\"inp1\">Upload Link</label>\r\n    <input type=\"text\" name=\"entry.230476976\" id=\"link\">\r\n    <input type=\"text\" name=\"entry.395712324\" id=\"person\" hidden>\r\n    <input type=\"text\" name=\"entry.460492323\" id=\"week\" value=\"7\" hidden>\r\n    <input type=\"submit\" value=\"Submit\">\r\n</form>\r\n\r\n\r\n\r\n<style>\r\n    /* iframe[src*=\"https://www.youtube.com/embed/\"] {\r\n        position: relative !important;\r\n        width: 100% !important;\r\n        height: auto !important;\r\n        max-width: 540px!important;\r\n        aspect-ratio: 9 / 16 !important;\r\n    } */\r\n</style>\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js\"></script>\r\n<script src=\"/jquery.min.js\"></script>\r\n<script>\r\n    function loadJs(id, url = null, inlineScript = null, callback){\r\n        var e = document.createElement('script');\r\n\r\n        if (url) \r\n            e.src = url;\r\n\r\n        if (inlineScript)\r\n            e.appendChild(document.createTextNode(inlineScript));\r\n\r\n        e.type = 'text/javascript';\r\n        e.id = id;\r\n        e.defer = true;\r\n        e.addEventListener('load', callback);\r\n        document.getElementsByTagName('head')[0].appendChild(e);\r\n    }\r\n</script>\r\n<script>\r\n    $(document).ready(function(){\r\n        \r\n\r\n\r\n    loadJs(\"cookies-api\",\"https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js\", null, function(){\r\n        // if (Cookies.get('name')) {\r\n        // \tvar name = Cookies.get('name');\r\n        // }\r\n        \r\n        setTimeout(() => {\r\n    $(\"#person\").value =Cookies.get(\"discord\")\r\n    $(\"#person\").val(Cookies.get(\"discord\"))\r\n        console.log(Cookies.get(\"discord\"))\r\n        console.log($(\"#person\"))\r\n}, 1000);\r\n    })\r\n    \r\n    });\r\n</script>\r\n\r\n<!-- <style>\r\n    /* iframe[src*=\"https://www.youtube.com/embed/\"] {\r\n        position: relative !important;\r\n        width: 100% !important;\r\n        height: auto !important;\r\n        max-width: 540px!important;\r\n        aspect-ratio: 9 / 16 !important;\r\n    } */\r\n</style>\r\n<script is:inline src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js\"></script>\r\n<script is:inline src=\"/jquery.min.js\"></script>\r\n\r\n<script is:inline>\r\n    $(document).ready(function(){\r\n        $(`input[name=\"entry.395712324\"]`).value = (cookies.get(\"discord\"))\r\n        $(\"#person\").value =Cookies.get(\"discord\")\r\n    });\r\n</script> -->";
						const data = {title:"FP Submission",description:"Learn more about my project in this docs site built with Starlight.",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/workspaces/learntk/src/content/docs/Week1.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };