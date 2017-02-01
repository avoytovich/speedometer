// JavaScript File
$(document).ready(function () {
   $('.content_one').click(content_one);
   $('.content_two').click(content_two);
   $('.content_three').click(content_three);
   $('.acura').click(acura);
   
   var model = {
      acura : {
            name: ["MDX", "RDX", "RLX", "TLX"],
            src: ["images/small/acura_mdx.jpg", "images/small/acura_rdx.jpg", "images/small/acura_rlx.jpg", "images/small/acura_tlx.jpg"],
            alt: [ "acura_mdx", "acura_rdx", "acura_rlx", "acura_tlx"]
            }
  };



function content_one () {
    $('#content_two, #content_three, #content_four').fadeOut(500);
    $('#content_one').fadeIn(500);
}

function content_two () {
    $('#content_one, #content_three, #content_four').fadeOut(500);
    $('#content_two').fadeIn(500);
}

function content_three () {
    $('#content_one, #content_two, #content_four').fadeOut(500);
    $('#content_three').fadeIn(500);
}

function acura () {
    $(".about_all").attr("id","acura");
    if (!document.getElementById("addZero")) {
      for (var i = 0; i < model['acura']['name'].length; i++) {
        $("#add").after("<figure id=\'addZero\' ><figcaption id=\"addOne\"></figcaption><img id=\"good\" class=\"img-thumbnail img-responsive\"><h4>+38(073)73-73-747</h4></figure>");
        $("#addOne").html(model['acura']["name"][i]);
        $("#good").attr('src', model['acura']["src"][i]);
        $("#good").attr('alt', model['acura']["alt"][i]);
        
      }
    }
    
    $("#acura").css("display", "block");
    
    $('#content_one, #content_two, #content_three').fadeOut(500);
    $('#content_four').fadeIn(500);
}

});