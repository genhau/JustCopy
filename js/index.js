$(function(){
    var tabs = document.getElementsByClassName('slide-tab-item');
    var slides = document.getElementsByClassName('slide-item');
    window.addEventListener('scroll', setFixedMenu);
    addTabClick();
    var refreshIntervalId = setInterval(function(){ 
      var curTab = document.getElementsByClassName("slide-tab-item-active")[0];
      var current, next, tab, slide;
      current = getTabIndex(curTab), next = (current+1) % tabs.length;
      update(current, next);
    }, 5000);

    function onHoverTab(e) {
      // console.log(e.target);
      var target = e.target;
      var curTab = document.getElementsByClassName("slide-tab-item-active")[0];
      var current = getTabIndex(curTab), next = getTabIndex(target);
      update(current, next);
      clearInterval(refreshIntervalId);
    };

    function addTabClick(){
      for(var i = 0; i < tabs.length; i++){
        tabs[i].onclick = tabs[i].onmouseover = onHoverTab;
      }
    }

    function setFixedMenu() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("channel")[0].className = "channel channel-fixed";
        } else {
            document.getElementsByClassName("channel")[0].className = "channel";
        }
    }
    function update(current, next){
      tabs[current].className = 'slide-tab-item';
      tabs[next].className = 'slide-tab-item slide-tab-item-active';
      slides[current].className = 'slide-item';
      slides[next].className = 'slide-item slide-item-active';
    }

    function getTabIndex(curTab){
      for(var i = 0; i < tabs.length; i++){
        if(tabs[i] == curTab){
          // console.log('found: ' + i);
          return i;
        }
      }
    }
});
