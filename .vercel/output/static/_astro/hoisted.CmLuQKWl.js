document.addEventListener("DOMContentLoaded",()=>{window.dispatchEvent(new Event("resize"))});window.addEventListener("resize",function(i){var n=window.innerWidth>0?window.innerWidth:screen.width;n<502&&(window.location.href.includes("mobile")||(window.location.href=window.location.origin+"/mobile")),n>502&&window.location.href.includes("mobile")&&(window.location.href=window.location.origin)});
