$(document).ready(function(){
    $('.scroll-to').scrollTo();


    //$('.fancybox').fancybox();


    (function(){
        console.log('353425')
        var slides = $('.b-scroll-6__slide-item');
        var tabs = $('.b-scroll-6__li')
        var count = 0;

        setInterval(function(){
            count += 1;
            if(count > slides.length - 1){
                count = 0;
            }
            //console.log(slides[count]);

            slides.hide(300);
            tabs.removeClass('b-scroll-6__li--check');
            slides.eq(count).show(300);
            tabs.eq(count).addClass('b-scroll-6__li--check');
            return count;
        }, 3000)


    })()


});