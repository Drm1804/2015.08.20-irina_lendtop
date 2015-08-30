$(document).ready(function(){


    $(window).load(function(){
         $('.b-a-scroll-7').height(
            $('.b-a-sc7__img').height()
        );

    });


    function Artess(){
        var _this = this;



        this.scrollImg = function(object){
            var parent = object.parent();
            object.hover(
                function(){
                    var path = parseInt(object.height()) - parseInt(parent.height())
                    $(this).stop().animate({top : ''+-path+''}, 30000)
                },
                function(){
                    $(this).stop().animate({top : '0'}, 30000)
                }
            )
        }

        this.rate = function(object){
            object.hover(
                function(){
                    for(var i = 0; i  < object.length; i++){
                        object.eq(i).css('background', 'url(img/artess/star_big.png) 50% 50% no-repeat');
                        if(object.eq(i)[0] == $(this)[0]){
                            $('.b-a-sc11-rating__text--rate').text($(this).attr('data-text'));
                            return
                        }
                    }
                },
                function(){
                    for(var i = 0; i < object.length; i++){
                        //console.log($(this)[0].attributes.style)
                        if(object.eq(i).attr('style') == 'background-image : url(img/artess/star_big.png) !important;'){
                            return
                        } else {
                            object.css('background', 'url(img/artess/star_big-n.png) 50% 50% no-repeat')
                        }
                    }

                }
            );
            object.on('click', function(){
                for(var i = 0; i < object.length; i++){
                    object.eq(i).attr('style', 'background-image : url(img/artess/star_big.png) !important;');
                    if(object.eq(i)[0] == $(this)[0]){
                        return
                    }
                }
            })

        }
    }

    var artess = new Artess();
    artess.scrollImg($('.b-a-sc6-frame__img'));
    artess.scrollImg($('.b-a-sc8-box-img'));
    artess.rate($('.b-a-sc11-rating__star--rate'));

    $('form').ajaxForm(function() {
        $.fancybox([{href : '#success'}]);
    });


    $(".fancybox").fancybox({
        fitToView   : false,
        autoSize    : true
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


