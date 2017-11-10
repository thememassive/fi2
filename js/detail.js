// Page Transition
$(function() {
    $('body').removeClass('fade-out');
});


// Slick Slider
$(document).ready(function(){
    $('.fi-slider').slick({
        prevArrow: '.fi-prev',
        nextArrow: '.fi-next'
    });

    $('.fi-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.fi-item').removeClass("active");
        $('.fi-item-' + nextSlide ).addClass("active");
    });


    $( ".fi-item" ).click(function(e) {
        e.preventDefault();
        slideNumber = $(this).data("slide");
        $('.fi-slider').slick('slickGoTo', slideNumber);
    });

});

// Overlay
(function($) {

    $('.toggle-overlay').click(function(e) {
        e.preventDefault();

        tag = $(this).data("tag");


        if ($(this).hasClass('outer-close')) { // Close button clicked

            $('body').removeClass('overlay-open').addClass('overlay-close');
            $('.fi-overlay').toggleClass('open');

            setTimeout(function(){
                $.fn.fullpage.destroy('all');
            }, 500);

        } else { // tag button clicked

            $('body').addClass('overlay-open').removeClass('overlay-close');

            $(".fi-overlay .overlay-content").load("tag.html #" + tag + " .overlay-content > *");
            $('.fi-overlay').toggleClass('open');

        }




    });

})(jQuery);


$( document ).ajaxComplete(function() {
    $('#fullpage').fullpage();
});
