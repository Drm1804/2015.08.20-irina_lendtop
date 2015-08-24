$(document).ready(function(){
    $('.scroll-to').scrollTo();


    //$('.fancybox').fancybox();


    //Парлакс эффект

    var paralax = function(){
        var scroll = $('.b-scroll-2');

        var scrollOffset = scroll.offset();
        var scrollHeight = scroll.height();
        var windowHeight = $(window).height();
        $(window).on('mousewheel', function(event){
            console.log(event.originalEvent.deltaY);
            var sc = $(document).scrollTop();
            var img = $('.b-scroll-2-big-img');
            if(scrollOffset.top < sc + windowHeight &&  scrollOffset.top + scrollHeight > sc){
                var top = parseInt(img.attr('data-img'));
                if(event.originalEvent.deltaY < 0){
                    top += 30;
                } else {
                    top -= 30;
                }

                img.css('top', ''+top+'px');
                img.attr('data-img', ''+top+'');

            } else {
                img.css('top', '0');
                img.attr('data-img', '0');
            }
        });
        //$(document).scroll(function(event){
        //
        //})
    };
    paralax();


    //Слайдер
    var slider = function(){
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


    };

    slider();
});