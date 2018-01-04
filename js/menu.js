$(function(){
    var group = [];
    $('ul.menu > li > a').each(function(){
        var cat = $(this).attr('href').split('/').slice(-2)[0];
        group.push(cat);
    });
    console.log(group);
    $('.channel-item').click(function(event){
        var cat = $(this).attr('href').split('/').slice(-2)[0];
        // console.log('cat: ' + cat);
        var target;
        if(group.indexOf(cat) != -1){
            //console.log('found');
            target = cat;
        }
        else{
            //console.log('is child: ' + cat);
            var p = $(this).parents('.channel-more').find('> .channel-item');
            target = p.attr('href').split('/').slice(-2)[0];
        }
        // console.log('target: ' + target);
        sessionStorage.setItem('cat', target);
    });
    var cat = sessionStorage.getItem('cat');
    console.log('cat: ' + cat);
    sessionStorage.clear();
    if(cat){
        $('#allcat').removeClass('active');
        $('#' + cat).addClass("active");
    }
    else{
        $('#allcat').addClass('active');
    }
});
