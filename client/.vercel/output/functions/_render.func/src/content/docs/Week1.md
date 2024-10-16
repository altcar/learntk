---
title: FP Submission
description: Learn more about my project in this docs site built with Starlight.
---

## Final Project Submission
> after you have uploaded, you will get a feedback and certificate within a week

> if you get an error, you must login at [https://cc.shalify.eu.org](https://cc.shalify.eu.org) 

**Option 1: <a href="https://ufile.io/" target="_blank">upload the file and paste the link below</a><br>
Option 2: Click "SHARE" on replit and paste the share link below**


<form method="post" id="form" action="https://docs.google.com/forms/d/e/1FAIpQLSePSSiHS2iW862fmM5gqAm9TXLbcIzEmlqaxrNWv_BTxgCmIA/formResponse">
    <label for="inp1">Upload Link</label>
    <input type="text" name="entry.230476976" id="link">
    <input type="text" name="entry.395712324" id="person" hidden>
    <input type="text" name="entry.460492323" id="week" value="7" hidden>
    <input type="submit" value="Submit">
</form>



<style>
    /* iframe[src*="https://www.youtube.com/embed/"] {
        position: relative !important;
        width: 100% !important;
        height: auto !important;
        max-width: 540px!important;
        aspect-ratio: 9 / 16 !important;
    } */
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="/jquery.min.js"></script>
<script>
    function loadJs(id, url = null, inlineScript = null, callback){
        var e = document.createElement('script');

        if (url) 
            e.src = url;

        if (inlineScript)
            e.appendChild(document.createTextNode(inlineScript));

        e.type = 'text/javascript';
        e.id = id;
        e.defer = true;
        e.addEventListener('load', callback);
        document.getElementsByTagName('head')[0].appendChild(e);
    }
</script>
<script>
    $(document).ready(function(){
        


    loadJs("cookies-api","https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js", null, function(){
        // if (Cookies.get('name')) {
        // 	var name = Cookies.get('name');
        // }
        
        setTimeout(() => {
    $("#person").value =Cookies.get("discord")
    $("#person").val(Cookies.get("discord"))
        console.log(Cookies.get("discord"))
        console.log($("#person"))
}, 1000);
    })
    
    });
</script>

<!-- <style>
    /* iframe[src*="https://www.youtube.com/embed/"] {
        position: relative !important;
        width: 100% !important;
        height: auto !important;
        max-width: 540px!important;
        aspect-ratio: 9 / 16 !important;
    } */
</style>
<script is:inline src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script is:inline src="/jquery.min.js"></script>

<script is:inline>
    $(document).ready(function(){
        $(`input[name="entry.395712324"]`).value = (cookies.get("discord"))
        $("#person").value =Cookies.get("discord")
    });
</script> -->