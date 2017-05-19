$(function(){
    $("#chart").height($(window).height()-60);
    $("#chart").width($(window).width());
    var charted = JSON.parse(chart);
    console.log(charted);
    c3.generate(charted);
    $("#ctitle").html(charted.title);
});

