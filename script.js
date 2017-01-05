// JavaScript File
$(document).ready(function () {
   $('.content_one').click(content_one);
   $('.content_two').click(content_two);
   $('.content_tree').click(content_tree);



function content_one () {
    $('#content_two, #content_tree').fadeOut(500);
    $('#content_one').fadeIn(500);
}

function content_two () {
    $('#content_one, #content_tree').fadeOut(500);
    $('#content_two').fadeIn(500);
}

function content_tree () {
    $('#content_one, #content_two').fadeOut(500);
    $('#content_tree').fadeIn(500);
}

});