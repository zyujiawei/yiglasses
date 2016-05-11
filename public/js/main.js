(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };
}(jQuery));



jQuery(document).ready(function(){
	"use strict";
	//new WOW().init();


(function(){
 jQuery('.smooth-scroll').scrollingTo();
}());

});




$(document).ready(function(){

    //initialize lazyload in modals 
    $('#1287C19Modal').on('show.bs.modal', function () {
        $('#1287C19Modal').find("img.lazy").lazyload();
    });

    $('#3016A3Modal').on('show.bs.modal', function () {
        $('#3016A3Modal').find("img.lazy").lazyload();
    });

    $('#5156C19Modal').on('show.bs.modal', function () {
        $('#5156C19Modal').find("img.lazy").lazyload();
    });

    $('#5221Modal').on('show.bs.modal', function () {
        $('#5221Modal').find("img.lazy").lazyload();
    });

    $('#5225Modal').on('show.bs.modal', function () {
        $('#5225Modal').find("img.lazy").lazyload();
    });

    $('#5353C19Modal').on('show.bs.modal', function () {
        $('#5353C19Modal').find("img.lazy").lazyload();
    });

    $('#73578A5Modal').on('show.bs.modal', function () {
        $('#73578A5Modal').find("img.lazy").lazyload();
    });

    $('#73758A16Modal').on('show.bs.modal', function () {
        $('#73758A16Modal').find("img.lazy").lazyload();
    });

    $('#SPR09A11Modal').on('show.bs.modal', function () {
        $('#SPR09A11Modal').find("img.lazy").lazyload();
    });

    $('#SPR09C10Modal').on('show.bs.modal', function () {
        $('#SPR09C10Modal').find("img.lazy").lazyload();
    });

    $('#SPR09C94Modal').on('show.bs.modal', function () {
        $('#SPR09C94Modal').find("img.lazy").lazyload();
    });

    $('#SPR096C10Modal').on('show.bs.modal', function () {
        $('#SPR096C10Modal').find("img.lazy").lazyload();
    });

    //lazyload initialize finished




    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            //console.log("hi larger"+ $(window).scrollTop() +" " +$(window).innerHeight());
            $(".navbar-brand a").css("color","#fff");
            $("#top-bar").removeClass("animated-header");
        } else {
            //console.log("hi smaller"+ $(window).scrollTop() +" " +$(window).innerHeight());
            $(".navbar-brand a").css("color","inherit");
            $("#top-bar").addClass("animated-header");
        }
    });

    $("#clients-logo").owlCarousel({
 
        itemsCustom : false,
        pagination : false,
        items : 5,
        autoplay: true,

    });

    $('#contact-form').on('submit',function() {
        $.post("sendmail", {
       'name':$("#name").val(),
       'email':$("#email").val(),
       'subject':$("#subject").val(),
       'message':$("#message").val()
        },function(){
            $('#sendModal').modal('show');
        });
        return false; // 阻止表单自动提交事件
    });

    $('.likebutton').click(function(){
        var model = $(this).data('model');
        var button = $(this);
        // alert(model);
        $.get("likedesign?model="+model,function(data,status){
            if(status == 'success'){
                button.text("感谢您的投票");
                
            }
        });
        
    });
    $('.dislikebutton').click(function(){
        $(this).text("我们会加油改进");
        
    });

});

// fancybox
// $(".fancybox").fancybox({
//     padding: 0,

//     openEffect : 'elastic',
//     openSpeed  : 450,

//     closeEffect : 'elastic',
//     closeSpeed  : 350,

//     closeClick : true,
//     helpers : {
//         title : { 
//             type: 'inside' 
//         },
//         overlay : {
//             css : {
//                 'background' : 'rgba(0,0,0,0.8)'
//             }
//         }
//     }
// });






 




