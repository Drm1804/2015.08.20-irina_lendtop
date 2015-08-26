$(document).ready(function(){
    function Artress(){
        this.addPositionFixed = function(block){
            var endBlock = parseInt(block.offset().top)+parseInt(block.height());
            $(document).on('scroll', function(){
                var sc = $(document).scrollTop() + $(window).height();
                var scroll = block.attr('data-scroll');
                scroll = parseInt(scroll) - 100
                if(endBlock < sc){
                    block.css('position', 'relative');
                    block.css('margin-bottom', ''+scroll+'px');
                    block.attr('data-scroll', ''+scroll+'')
                } else {

                }
            });


        }

    }

    var artress = new Artress();

    artress.addPositionFixed($('.b-a-scroll-6'));
});