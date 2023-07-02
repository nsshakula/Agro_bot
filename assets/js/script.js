$(document).ready(function(){
    
    //modal
    $('[data-modal=thanks').on('click', function() {
        $('.overlay, #thanks').fadeIn('slow');
    });

    $('.modal_close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });
    $('.overlay').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    });

});

