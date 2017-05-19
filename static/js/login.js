
(function($){
  $(".container").animate({'opacity':1},300);
  $("#glogin").click(function(){
    $.ajax({
      type: 'GET',
      url: '/googlelogin',
      contentType: "application/json",
      success: function(data) {
        console.log(data);
      },
      error: function(xhr, errorThrown){
        console.log("request failed");
      }
    });
  })

})(jQuery);