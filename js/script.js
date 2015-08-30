$(document).ready(function(){
    //$('.scroll-to').scrollTo();



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



    function MobileSpoil(){
        var _this = this;
        var items = $('.b-scroll-3-box__item');
        var btn = $('.b-scroll-3-also-btn');
        this.whatDevice = function(){
            if($(window).width() < 690){
                return true;
            } else{
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                } else{
                    return false;
                }
                return false;
            }

        };
        this.hideAndShow = function(){
              var count = btn.attr('data-open');
            items.hide();
            for(var i = 0; i < count; i++){
                items.eq(i).show();

                //Скрываем кнопку,когда показывать больше нечего
                if($('.b-scroll-3-box__item:visible').length == $('.b-scroll-3-box__item').length){
                    btn.hide()
                }

            }
        };
        this.addCount = function(){
            var count = parseInt(btn.attr('data-open'));
            count +=1.5;
            btn.attr('data-open',''+count+'');
            _this.hideAndShow();

        }
    }

    var mobile = new MobileSpoil();
    $(window).resize(function(){
        if(mobile.whatDevice()){
            mobile.hideAndShow();
            $('.b-scroll-3-also-btn').on('click', function(){
                mobile.addCount();
            })
        } else {
            $('.b-scroll-3-box__item').show();
            $('.b-scroll-3-also-btn').off()
        }
    });

    $(window).load(function(){
        if(mobile.whatDevice()){
            mobile.hideAndShow();
            $('.b-scroll-3-also-btn').on('click', function(){
                mobile.addCount();
            })
        } else {
            $('.b-scroll-3-box__item').show();
            $('.b-scroll-3-also-btn').off()
        }
    });


    $(".fancybox").fancybox({
            fitToView   : false,
            autoSize    : true
        });


    //Плавный скролл до элемента

    $('.scroll a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        //console.log(destination)
        var destination = $(elementClick).offset().top;
        console.log(destination);
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });

    $('.b-scroll-to-upp').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    $('form').ajaxForm(function() {
        $.fancybox([{href : '#success'}]);
    });



    //Ручная смена города и номера телефона
    $('.close-fBox').on('click', function(){
        $.fancybox.close();
    });
    $('.select-town').on('click', function(){
        var town = $(this).attr('for');
        var data = $('#'+town+'');
        $('.b-header-nav-tel__p').text(data.attr('data-tel'));
        $('.b-header-nav-town').text(data.attr('data-city'));
    })
});