$(function(){
    window.addEventListener('scroll', setFixedMenu);
    function setFixedMenu() {
       if (document.body.scrollTop > 34 || document.documentElement.scrollTop > 34) {
           document.getElementsByClassName("channel")[0].className = "channel channel-fixed";
           document.getElementsByClassName("breadcrumb-div")[0].class = "breadcrumb-div invisible";
           document.getElementsByClassName("breadcrumb-div-fixed")[0].className = "breadcrumb-div-fixed active";
       } else {
           document.getElementsByClassName("channel")[0].className = "channel";
           document.getElementsByClassName("breadcrumb-div")[0].class = "breadcrumb-div";
           document.getElementsByClassName("breadcrumb-div-fixed")[0].className = "breadcrumb-div-fixed";
       }
   }
});
