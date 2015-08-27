$(document).ready(function(){


    $(window).load(function(){
         $('.b-a-scroll-7').height(
            $('.b-a-sc7__img').height()
        );

    });


    //$('.b-a-sc6-frame__img').hover(
    //
    //)
    function Artess(){
        var _this = this;
        this.sc7 = function(){

        };

        this.scrollImg = function(object){
            var parent = object.parent();
            object.hover(
                function(){
                    var path = parseInt(object.height()) - parseInt(parent.height())
                    $(this).stop().animate({top : ''+-path+''}, 3000)
                },
                function(){
                    $(this).stop().animate({top : '0'}, 3000)
                }
            )
        }
    }

    var artess = new Artess();
    artess.scrollImg($('.b-a-sc6-frame__img'));
    artess.scrollImg($('.b-a-sc8-box-img'));
});