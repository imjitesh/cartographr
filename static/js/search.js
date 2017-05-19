
(function($){
  function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam){
        return sParameterName[1];
      }
    }
  }
  var data, litem, ctype;
        data = allCharts;
        for(var i=0; i<data.length; i++){
          ctype = data[i][3].replace("-", " ").replace("col", "Column").replace("row", "Row").replace("area", "Area") + " Chart";
          litem = "<a href='/"+data[i][0]+"' style='color:rgba(80,80,80,1);'><li><div class=\'liImg\' style=\"background-image: url(\'/static/img/essential/"+data[i][3]+".png\');\"></div><div class=\'liTitle\'>"+data[i][1]+"</div><div class=\'liDesc\'>"+data[i][2]+"</div><div class=\'liMeta\'>"+ctype+"</div></li>"
          $("ul.disp").append(litem);
        }
  $("#results-tab").text(GetURLParameter("c"));
  $("#by_type_ul a").on("click", function(e){
    e.preventDefault();
    location.href = "search?c=" + GetURLParameter("c") + "&type=" + $(this).attr("id");
  })

  $("#search").focus(function(){
    $("#blackpan").css({"display":"block"})
    $("#blackpan").animate({"opacity":"0.6"},100);
  })

  $("#blackpan").on("click",function(){
    $(this).animate({"opacity":"0"},100,function(){
      $(this).css({"display":"none"});
    });
    $("#queried").animate({"opacity":"0"},100,function(){
      $("#queried").css({"display":"none"});
      console.log("null");
    });
  })
  var selector = "a[href$='" + window.location.pathname + "']"

  $(".layout_left ul li").css({"background":"rgb(255,255,255)","color":"rgb(80,80,80)"});
  $(selector).children().css({"background":"#2b87db","color":"#FFF"});

  if(user_data == null){
    $("a#signer").html("Login");
  }
  else{
    $("li#login").prepend("<img id='avatar' src='"+$.parseJSON(user_data)['picture']+"' height='24' style='vertical-align:middle;border-radius:12px;margin-right:4px;'>")
    $("a#signer").html($.parseJSON(user_data)["given_name"]).attr("href","/profile");
    $("li#login").on("click",function(){
    })
  }
  $("input#search").on("keyup",function(){
    if($(this).val() == ""){
      $("#queried").animate({"opacity":"0"},50,function(){
      $("#queried").css({"display":"none"});
    });
    }
    else{
      $("#queried").css({"display":"block"});
      $("#queried").animate({"opacity":"1"},50);
      $.ajax({
      type: 'GET',
      url: '/searchfield',
      contentType: "application/json",
      data: {searchdata : JSON.stringify($(this).val())},
      success: function(data) {
        data = $.parseJSON(data);
        $("#queried ul").html("");
        $("#queried ul").append("<li id='search-header'>Search for a chart or create your own chart</li>");
        $.each(data, function(i){
          $("#queried ul").append("<a href='/"+data[i][0]+"'><li class='search'>"+data[i][1]+"</li></a>")
        })
        $("#queried ul").append("<a href='/search?c="+$("input#search").val()+"'><li class='search' style='border-bottom-left-radius:3px;border-bottom-right-radius:3px;'>Search: "+$("input#search").val()+"</li></a>") 
      },
      error: function(xhr, errorThrown){
        console.log("request failed");
      }
    });
      
    }
  })

})(jQuery);