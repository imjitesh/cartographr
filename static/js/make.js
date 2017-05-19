(function($){
  var charted, ctype, profile_click=0;
  charted = JSON.parse(chart);
  c3.generate(charted);
  console.log("/googlelogin"+window.location.pathname);
  $("#glogin").attr("href","/googlelogin"+window.location.pathname);
  $("#ctitle").html(charted.title);
  $("#cntitle").html(charted.title);
  document.title = charted.title;

  $("#cdesc").html(charted.desc);
  for(var i=0;i<charted.title.split(" ").length;i++){
    $("#related-topics").append("<a href='/topic/"+charted.title.split(" ")[i]+"'>"+charted.title.split(" ")[i]+"</a>")
  }

  $("#embed_chart").click(function(){
    var pathname = window.location.pathname;
    console.log("<iframe width='560' height='315' src='127.0.0.1:5000/embed"+pathname+" frameborder='0' allowfullscreen></iframe>");
  })

  $("#search").focus(function(){
    $("#blackpan").css({"display":"block"})
    $("#blackpan").animate({"opacity":"0.6"},100);
  })

  $("#blackpan").on("click",function(){
    $(this).animate({"opacity":"0"},100,function(){
      $(this).css({"display":"none"});
    });
  })

    $("#signer").click(function(e){
    e.preventDefault();
    if(profile_click==0){$("#profile_div").css("display","block");profile_click=1;}
    else{$("#profile_div").css("display","none");profile_click=0;}
  })

  $("#loginer").on("click",function(e){
    e.preventDefault();
    $("#login_pan").css({"display":"block"}).animate({'opacity':1},100);
  })

  $("#login_pan_remove").on("click",function(e){
    e.preventDefault();
    $("#login_pan").animate({'opacity':0},100,function(){$("#login_pan").css({"display":"none"})});
  });


})(jQuery);