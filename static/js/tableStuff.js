(function($){
  $(document.body).on("click", "td", function(){
    $("td, th").css({"border": "","background": ""});
    $(this).css({"border": "1px solid rgba(0,100,200,1)"});
  })

  $(document.body).on("click", "th", function(){
    var col = "td:nth-child("+($(this).index()+1)+")";
    $("td, th").css({"background":"","border":""});
    $(this).css("background","rgba(0,0,0,0.2")
    $(col).css("background","rgba(0,0,0,0.1");
  })

  $(document.body).on("click", "td:nth-child(1)", function(){
    $('td').css({"background":""});
    $(this).parent().children().css({"background":"rgba(0,0,0,0.1)"});
    console.log($(this).parent());
  })

  $(document.body).on("dblclick", "td",function(){
    $("td").css({"border":"","background":""});
    $(this).css({"background":"#FFF","border":"1px solid rgba(0,100,200,1)"});
    $(this).css({"width":$(this).width()});
    var $this = $(this);
    var $input = $('<input>', {
        value: $this.text(),
        type: 'text',
        style: 'width:'+$(this).width()+'px; height:18px; line-height:18px; outline:none;border:0; background-color:#FFF;',
        blur: function() {
           $this.text(this.value);
        },
        keyup: function(e) {
           if (e.which === 13) $input.blur();
        }
    }).appendTo( $this.empty() ).focus();
  })
})(jQuery);