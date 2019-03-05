import $ from "jquery";

$(document).ready(function(){
$('.tt').click( function() {

    var me = $(this).find('h2');
    var bros = $(this).siblings().find('h2');
    var icon = $(this).find('.icon');
    var iconbros = $(this).siblings().find('.icon');

    if(me.hasClass('active') === true ){
        me.removeClass('active');
        me.next().slideUp();
        icon.removeClass('active');

    }else{
        me.addClass('active');
        bros.removeClass('active');
        icon.addClass('active');
        iconbros.removeClass('active');
        
        // $(this).find('p').slideDown();
        me.next().slideDown();
        bros.next().slideUp();
    }
});
});

