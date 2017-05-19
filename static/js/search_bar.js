
(function($){
    $("#search").focus(function(){
    $("#blackpan").css({"display":"block"})
    $("#blackpan").animate({"opacity":"0.6"},50);
  })
  $("#blackpan").on("click",function(){
    $(this).animate({"opacity":"0"},50,function(){
      $(this).css({"display":"none"});
    });
    $("#queried").animate({"opacity":"0"},50,function(){
      $("#queried").css({"display":"none"});
    });
  })

  $("input#search").on("keyup",function(){
    if($(this).val() == ""){
      $("#queried").animate({"opacity":"0"},150,function(){
      $("#queried").css({"display":"none"});
    });
      $("#queried ul").html("");
    }
    else{
      $("#queried").css({"display":"block"});
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
        $("#queried").animate({"opacity":"1"},150);
      },
      error: function(xhr, errorThrown){
        console.log("request failed");
      }
    });
      
    }
  })
})(jQuery);