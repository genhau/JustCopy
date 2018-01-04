$(function(){
    var refreshIntervalId = setInterval(slide, 5000);
    var tabs = $("ul.slide-tab"), imgs = $("ul.slide-list"),
        sz = tabs.children().length; 
    addHover();

    function slide(){
        var active = getActive(),
            next = (active + 1) % sz;
        toggle(active, next);
    }
    function getActive(){
        var curTab = $('li.slide-tab-item-active'),
            index = curTab.index();
        return index;
    }
    function toggle(cur, next){
        cur+= 1, next+= 1;
        var curTab = tabs.find('li:nth-child(' + cur + ')'),
            curImg = imgs.find('li:nth-child(' + cur + ')');
            nextTab = tabs.find('li:nth-child(' + next + ')'),
            nextImg = imgs.find('li:nth-child(' + next + ')');
        console.log('toggle: ' + cur + ', ' + next);
        curTab.removeClass('slide-tab-item-active');
        curImg.removeClass('slide-item-active');
        nextTab.addClass('slide-tab-item-active');
        nextImg.addClass('slide-item-active');
    }
    function addHover(){
        $('li.slide-tab-item').mouseover(function(){
            var next = $(this).index();
                active = getActive(); 
            toggle(active, next);
            clearInterval(refreshIntervalId);
        });
    }
});
