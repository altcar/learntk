const id = "24b/Week5.md";
						const collection = "docs";
						const slug = "24b/week5";
						const body = "<!-- ## [YouTube Live](https://www.youtube.com/channel/UCdNHtSI0GLUIZoPFvfOuSHw/live)\r\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/live_stream?channel=UCdNHtSI0GLUIZoPFvfOuSHw\" frameborder=\"0\" allowfullscreen></iframe>\r\n-->\r\n\r\nThis week we will learn about function and dictionary\r\n\r\n## Google meet link\r\n\r\n[https://meet.google.com/nvm-vdfw-nbu](https://meet.google.com/nvm-vdfw-nbu)\r\n\r\n## Task upload\r\n> if you get an error, you must login at [https://learntk.vercel.app](https://learntk.vercel.app) \r\n\r\n<a href=\"https://ufile.io/\" target=\"_blank\">upload the file and paste the link below</a>\r\n\r\n<form method=\"post\" id=\"form\" action=\"https://docs.google.com/forms/d/e/1FAIpQLSePSSiHS2iW862fmM5gqAm9TXLbcIzEmlqaxrNWv_BTxgCmIA/formResponse\">\r\n    <label for=\"inp1\">Upload Link</label>\r\n    <input type=\"text\" name=\"entry.230476976\" id=\"link\">\r\n    <input type=\"text\" name=\"entry.395712324\" id=\"person\" hidden>\r\n    <input type=\"text\" name=\"entry.460492323\" id=\"week\" value=\"5\" hidden>\r\n    <input type=\"submit\" value=\"Submit\">\r\n</form>\r\n\r\n## Lesson powerpoint\r\n\r\n<iframe src=\"https://onedrive.live.com/embed?resid=3EFF31181B9ABFC5%2110511&amp;authkey=!ALavy13VS3qDwhA&amp;em=2&amp;wdAr=1.7777777777777777\" width=\"600px\" height=\"288px\" frameborder=\"0\">This is an embedded <a target=\"_blank\" href=\"https://office.com\">Microsoft Office</a> presentation, powered by <a target=\"_blank\" href=\"https://office.com/webapps\">Office</a>.</iframe>\r\n\r\n## Lesson pdf\r\n\r\n<object data=\"/Lesson/Lesson5.pdf\" type=\"application/pdf\" width=\"100%\" height=\"500px\">\r\n    <p>Unable to display PDF file. <a href=\"/Lesson/Lesson5.pdf\">Download</a> instead.</p>\r\n</object>\r\n\r\n\r\n## YouTube recording\r\n\r\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/37hN_lMqO7M?si=ILNR8482NPN45B1i\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\r\n\r\n\r\n<style>\r\n    /* iframe[src*=\"https://www.youtube.com/embed/\"] {\r\n        position: relative !important;\r\n        width: 100% !important;\r\n        height: auto !important;\r\n        max-width: 540px!important;\r\n        aspect-ratio: 9 / 16 !important;\r\n    } */\r\n</style>\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js\"></script>\r\n<script src=\"/jquery.min.js\"></script>\r\n<script>\r\n    function loadJs(id, url = null, inlineScript = null, callback){\r\n        var e = document.createElement('script');\r\n\r\n        if (url) \r\n            e.src = url;\r\n\r\n        if (inlineScript)\r\n            e.appendChild(document.createTextNode(inlineScript));\r\n\r\n        e.type = 'text/javascript';\r\n        e.id = id;\r\n        e.defer = true;\r\n        e.addEventListener('load', callback);\r\n        document.getElementsByTagName('head')[0].appendChild(e);\r\n    }\r\n</script>\r\n<script>\r\n    $(document).ready(function(){\r\n        \r\n\r\n\r\n    loadJs(\"cookies-api\",\"https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js\", null, function(){\r\n        // if (Cookies.get('name')) {\r\n        // \tvar name = Cookies.get('name');\r\n        // }\r\n        \r\n        setTimeout(() => {\r\n    $(\"#person\").value =Cookies.get(\"discord\")\r\n    $(\"#person\").val(Cookies.get(\"discord\"))\r\n        console.log(Cookies.get(\"discord\"))\r\n        console.log($(\"#person\"))\r\n}, 1000);\r\n    })\r\n    \r\n    });\r\n</script>\r\n\r\n<!-- <style>\r\n    /* iframe[src*=\"https://www.youtube.com/embed/\"] {\r\n        position: relative !important;\r\n        width: 100% !important;\r\n        height: auto !important;\r\n        max-width: 540px!important;\r\n        aspect-ratio: 9 / 16 !important;\r\n    } */\r\n</style>\r\n<script is:inline src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js\"></script>\r\n<script is:inline src=\"/jquery.min.js\"></script>\r\n\r\n<script is:inline>\r\n    $(document).ready(function(){\r\n        $(`input[name=\"entry.395712324\"]`).value = (cookies.get(\"discord\"))\r\n        $(\"#person\").value =Cookies.get(\"discord\")\r\n    });\r\n</script> -->";
						const data = {title:"Lesson 5",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/workspaces/learntk/client/src/content/docs/24b/Week5.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };