---
title: Lesson 2
# description: Learn more about my project in this docs site built with Starlight.
---

This week we will learn about control flow (if and switch) and boolean operation

## Google meet link

[https://meet.google.com/nvm-vdfw-nbu](https://meet.google.com/nvm-vdfw-nbu)

## Task upload
> if you get an error, you must login at [https://cc.shalify.eu.org](https://cc.shalify.eu.org) 

<a href="https://ufile.io/" target="_blank">upload the file and paste the link below</a>

<form method="post" id="form" action="https://docs.google.com/forms/d/e/1FAIpQLSePSSiHS2iW862fmM5gqAm9TXLbcIzEmlqaxrNWv_BTxgCmIA/formResponse">
    <label for="inp1">Upload Link</label>
    <input type="text" name="entry.230476976" id="link">
    <input type="text" name="entry.395712324" id="person" value="" hidden>
    <input type="text" name="entry.460492323" id="week" value="2" hidden>
    <input type="submit" value="Submit">
</form>

## Lesson powerpoint

<iframe src="https://onedrive.live.com/embed?resid=3EFF31181B9ABFC5%2110509&amp;authkey=!AC58rYfFMeQRdgY&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="600px" height="300px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

## Lesson pdf

<object data="/Lesson/Lesson2.pdf" type="application/pdf" width="100%" height="500px">
    <p>Unable to display PDF file. <a href="/Lesson/Lesson2.pdf">Download</a> instead.</p>
</object>



## YouTube recording

<iframe width="560" height="315" src="https://www.youtube.com/embed/RCzF85qRNuU?si=zbRydp4Fgka-1ZeI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



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