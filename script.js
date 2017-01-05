// JavaScript File
$(document).ready(function () {
   $('.content_one').click(content_one);
   $('.content_two').click(content_two);
   $('.content_three').click(content_three);



function content_one () {
    $('#content_two, #content_three').fadeOut(500);
    $('#content_one').fadeIn(500);
}

function content_two () {
    $('#content_one, #content_three').fadeOut(500);
    $('#content_two').fadeIn(500);
}

function content_three () {
    $('#content_one, #content_two').fadeOut(500);
    $('#content_three').fadeIn(500);
}

});