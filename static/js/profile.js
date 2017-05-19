
(function($){
  var data, litem, ctype;
  data = allCharts;
  for(var i=0; i<data.length; i++){
    ctype = data[i][3].replace("-", " ").replace("col", "Column").replace("row", "Row").replace("area", "Area") + " Chart";
    litem = "<a href='/"+data[i][0]+"'><li><div class=\'liImg\' style=\"background-image: url(\'/static/img/essential/"+data[i][3]+".png\');\"></div><div class=\'liTitle\'>"+data[i][1]+"</div><div class=\'liDesc\'>"+data[i][2]+"</div><div class=\'liMeta\'>"+ctype+"</div></li>"
    $("ul.disp").append(litem);
    }
    console.log($.parseJSON(user_data));
    $("a#signer").html($.parseJSON(user_data)["given_name"]);
    $("span#given_name").text($.parseJSON(user_data)["given_name"]);
    $("span#family_name").text($.parseJSON(user_data)["family_name"]);
    try{
      $("img#avatar").attr("src",$.parseJSON(user_data)["picture"]);
    }
    catch(e){
      $("img#avatar").attr("src","/static/img/essential2/user.svg");
    }

    $("#search").focus(function(){
    $("#blackpan").css({"display":"block"})
    $("#blackpan").animate({"opacity":"0.6"},100);
  })

  $("#blackpan").on("click",function(){
    $(this).animate({"opacity":"0"},100,function(){
      $(this).css({"display":"none"});
    });
  })
  
})(jQuery);