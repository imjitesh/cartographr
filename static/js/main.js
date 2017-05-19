
(function($){
  var data, profile_click=0;
  $("#signer,#bookmark_login").click(function(e){
    e.preventDefault();
    if(profile_click==0){$("#profile_div").css("display","block");profile_click=1;}
    else{$("#profile_div").css("display","none");profile_click=0;}
  })
  var selector = "a[href='" + window.location.pathname + "']";
  $(selector).children().css({"background":"#2b87db","color":"#FFF"});

  $("#loginer").on("click",function(e){
    e.preventDefault();
    $("#login_pan").css({"display":"block"}).animate({'opacity':1},100);
  })

  $("#login_pan_remove").on("click",function(e){
    e.preventDefault();
    $("#login_pan").animate({'opacity':0},100,function(){$("#login_pan").css({"display":"none"})});
  });

})(jQuery);