$(document).ready(function(){
    $('.scroll-to').scrollTo();


    //$('.fancybox').fancybox();


    //Парлакс эффект


    (function(){
        var scroll = $('.b-scroll-2');

        var scrollOffset = scroll.offset();
        var scrollHeight = scroll.height();
        $(document).scroll(function(){
            var sc = $(document).scrollTop();
            //console.log($(document).scrollTop())
            if(scrollOffset.top < sc || scrollHeight > sc){
                console.log('блок виден');
            }
        })
    })()

    //Слайдер
    (function(){
        var slides = $('.b-scroll-6__slide-item');
        var tabs = $('.b-scroll-6__li');
        var count = 0;

        setInterval(function(){
            count += 1;
            if(count > slides.length - 1){
                count = 0;
            }

            slides.hide(300);
            tabs.removeClass('b-scroll-6__li--check');
            slides.eq(count).show(300);
            tabs.eq(count).addClass('b-scroll-6__li--check');
            return count;
        }, 3000)


    })()


});