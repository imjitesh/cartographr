function stringGen(len){var text = "";var charset = "abcdefghijklmnopqrstuvwxyz0123456789";for( var i=0; i < len; i++ )text += charset.charAt(Math.floor(Math.random() * charset.length));return text;}
var grouping, sheetHtml = "<tbody><tr><th><img src='https://image.flaticon.com/icons/svg/149/149187.svg' height=10></th><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td></td><td></td><td></td><td></td></tr><tr><td>10</td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td></td><td></td><td></td><td></td></tr><tr><td>12</td><td></td><td></td><td></td><td></td></tr><tr><td>13</td><td></td><td></td><td></td><td></td></tr><tr><td>14</td><td></td><td></td><td></td><td></td></tr><tr><td>15</td><td></td><td></td><td></td><td></td></tr><tr><td>16</td><td></td><td></td><td></td><td></td></tr><tr><td>17</td><td></td><td></td><td></td><td></td></tr>";
(function($){
  var arrayOfThisRow, tableData, testChartData, missile, booster,profile_click=0;
  if(document.cookie.indexOf("no_login_chart")>=0){
    $("#leftner").css({"display":"none"});
    $("#rightner22").css({"display":"none"});
    $("#leftner3").css({"display":"inline-block"});
    $("#rightner3").css({"display":"inline-block"});
    console.log("cookie found");
    console.log(JSON.parse(document.cookie.split("=")[1]));
    charted = JSON.parse(document.cookie.split("=")[1]);
    c3.generate(charted);
    document.cookie = 'no_login_chart=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  $("#signer").click(function(){
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
  $("#sheet").html(sheetHtml);
  $("select#dummy").on("change",function(){
    switch(this.value){
      case "select":
        sheetChart = "<tbody><tr><th><img src='https://image.flaticon.com/icons/svg/149/149187.svg' height=10></th><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td></td><td></td><td></td><td></td></tr><tr><td>10</td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td></td><td></td><td></td><td></td></tr><tr><td>12</td><td></td><td></td><td></td><td></td></tr><tr><td>13</td><td></td><td></td><td></td><td></td></tr><tr><td>14</td><td></td><td></td><td></td><td></td></tr><tr><td>15</td><td></td><td></td><td></td><td></td></tr><tr><td>16</td><td></td><td></td><td></td><td></td></tr><tr><td>17</td><td></td><td></td><td></td><td></td></tr>";
        break;
      case "line":
        sheetChart = "<tbody><tr><th><img src='https://image.flaticon.com/icons/svg/149/149187.svg' height=10></th><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td>1</td><td>Census Year</td><td>Person</td><td>Male</td><td>Female</td></tr><tr><td>2</td><td>1951</td><td>18.33</td><td>27.16</td><td>8.86</td></tr><tr><td>3</td><td>1961</td><td>28.30</td><td>40.40</td><td>15.35</td></tr><tr><td>4</td><td>1971</td><td>34.45</td><td>45.96</td><td>21.97</td></tr><tr><td>5</td><td>1981</td><td>43.57</td><td>56.38</td><td>29.76</td></tr><tr><td>6</td><td>1991</td><td>52.21</td><td>64.13</td><td>39.29</td></tr><tr><td>7</td><td>2001</td><td>64.83</td><td>75.26</td><td>63.67</td></tr><tr><td>8</td><td>2011</td><td>74.04</td><td>82.14</td><td>65.46</td></tr><tr><td>9</td><td></td><td></td><td></td><td></td></tr><tr><td>10</td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td></td><td></td><td></td><td></td></tr><tr><td>12</td><td></td><td></td><td></td><td></td></tr><tr><td>13</td><td></td><td></td><td></td><td></td></tr><tr><td>14</td><td></td><td></td><td></td><td></td></tr><tr><td>15</td><td></td><td></td><td></td><td></td></tr><tr><td>16</td><td></td><td></td><td></td><td></td></tr><tr><td>17</td><td></td><td></td><td></td><td></td></tr>";
        $("#sheet").data("nRows",8);
        $("#sheet").data("nCols",4);
        charted.data.type = "line";
        charted.axis.rotated = false;
        charted.data.groups = [];
        charted.ctype = "line";
        break;
      case "pie":
        sheetChart = "<tbody><tr><th><img src='https://image.flaticon.com/icons/svg/149/149187.svg' height=10></th><th>A</th><th>B</th></tr><tr><td>1</td><td>Vehicle Type</td><td>Number of Road Accidents</td></tr><tr><td>2</td><td>Two-Wheelers</td><td>144391</td></tr><tr><td>3</td><td>Auto-Rickshaws</td><td>30340</td></tr><tr><td>4</td><td>Cars, Jeeps, Taxis</td><td>118438</td></tr><tr><td>5</td><td>Buses</td><td>41832</td></tr><tr><td>6</td><td>Trucks, Tempos & Tractors</td><td>98897</td></tr><tr><td>7</td><td>Other Motor Vehicles</td><td>44786</td></tr><tr><td>8</td><td>Other Vehicles/Objects</td><td>22739</td></tr><tr><td>9</td><td></td><td></td></tr><tr><td>10</td><td></td><td></td></tr><tr><td>11</td><td></td><td></td></tr><tr><td>12</td><td></td><td></td></tr><tr><td>13</td><td></td><td></td></tr><tr><td>14</td><td></td><td></td></tr><tr><td>15</td><td></td><td></td></tr><tr><td>16</td><td></td><td></td></tr><tr><td>17</td><td></td><td></td></tr></tbody>";
        $("#sheet").data("nRows",8);
        $("#sheet").data("nCols",2);
        charted.data.type = "pie";
        charted.axis.rotated = false;
        charted.data.groups = [];
        charted.ctype = "pie";
        break;
      case "stBar":
        sheetChart = "<tbody><tr><th><img src='https://image.flaticon.com/icons/svg/149/149187.svg' height=10></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr><tr><td>1</td><td>Country</td><td>Christian</td><td>Muslim</td><td>Hindu</td><td>Buddhist</td></tr><tr><td>2</td><td>India</td><td>2.5</td><td>14.4</td><td>79.5</td><td>0.8</td></tr><tr><td>3</td><td>China</td><td>5.1</td><td>1.8</td><td>0.1</td><td>18.2</td></tr><tr><td>4</td><td>Bahrain</td><td>14.5</td><td>70.3</td><td>9.8</td><td>2.5</td></tr><tr><td>5</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>10</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>12</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>13</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>14</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>15</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>16</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>17</td><td></td><td></td><td></td><td></td><td></td></tr>";
        $("#sheet").data("nRows",4);
        $("#sheet").data("nCols",5);
        charted.data.type = "bar";
        charted.axis.rotated = false;
        grouping = [];
        for(var c=1;c<charted.data.columns.length;c++){
          grouping.push(charted.data.columns[c][0]);
        }
        charted.data.groups = [];
        charted.data.groups.push(grouping);
        charted.ctype = "stacked-col";
        break;
      case "col":
        sheetChart = "<tbody><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td>1</td><td>crazy</td><td>crazy</td><td>crazy</td><td>crazy</td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td></td><td></td><td></td><td></td></tr><tr><td>10</td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td></td><td></td><td></td><td></td></tr><tr><td>12</td><td></td><td></td><td></td><td></td></tr><tr><td>13</td><td></td><td></td><td></td><td></td></tr><tr><td>14</td><td></td><td></td><td></td><td></td></tr><tr><td>15</td><td></td><td></td><td></td><td></td></tr><tr><td>16</td><td></td><td></td><td></td><td></td></tr><tr><td>17</td><td></td><td></td><td></td><td></td></tr>";
        break;
    }
    $("#sheet").html(sheetChart);
    $("#leftner11").hide();
    $("#leftner12").show();
    $("#leftner2").css("display","inline-block");
    $("#leftner").css("display","none");
  });

  $("#cont_butt").on("click",function(){
    $("#leftner2").css("display","inline-block");
    $("#leftner").css("display","none");
    $("#flowinsidebar ul li:nth-child(1)").css({"background": "rgba(255,144,9,1)","color": "rgba(252,252,252,1)"});
  })

  $("#prcd1_butt").on("click",function(){
    myTableArray = [], testChartData=[];
    charted.data.columns = [];
    $("#leftner3").css("display","inline-block");
    $("#leftner2").css("display","none");
    $("#rightner3").css("display","inline-block");
    $("#rightner22").css("display","none");
    $("#tick-slide").attr("max",$("#sheet").data("nCols")-1);
    $("table#sheet tr").slice(1,$("#sheet").data("nRows")+1).each(function(){
      arrayOfThisRow = [];
      tableData = $(this).find('td');
      if (tableData.length > 0) {
        tableData.each(function() { arrayOfThisRow.push($(this).text()) });
        arrayOfThisRow.shift();
        charted.data.columns.push(arrayOfThisRow);
      }
    });
    charted.data.x = charted.data.columns[0][0];
    c3.generate(charted);
  });

  $("#pub_butt").on("click",function(){
    if(check_login == "False"){
      document.cookie = "no_login_chart="+JSON.stringify(charted);
      $("#login_pan").css({"display":"block"}).animate({'opacity':1},100);
      console.log(stringGen(10));
    }
    else{
    if($("#title_val").val() == "" || $("#desc_val").val() == "" || $("#src_val").val() == ""){
      $(".button2").css({"background": "rgba(253,253,253,1)", "color": "rgba(90,90,90,0.8)"});
      $("#annt_butt").css({"background": "rgba(90,90,90,0.8)", "color": "rgba(253,253,253,1)"});
      $("#annotate").css({"display":"inline-block"});
      $("#chart_list").css({"display":"none"});
      $("#refine").css({"display":"none"});
      $("#design").css({"display":"none"});
    }
    else if($("#title").html() != "Chart Title" && $("#title").html() != "")
    {
      $("#ticker").css({"display":"block"});
      charted_send = '{"chdata":' + JSON.stringify(charted) +'}';
      console.log(charted_send);
    $.ajax({
      type: 'POST',
      url: '/upload',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: charted_send,
      success: function(data) {
        console.log(data);
        $("#ticker").css({"display":"none"});
        location.href = "/"+data;
      },
      error: function(xhr, errorThrown){
        console.log("request failed");
      }
    });
  }
}
});

  $("#back1_butt").on("click",function(){
    $("#leftner2").css("display","none");
    $("#leftner3").css("display","none");
    $("#leftner").css("display","inline-block");
    $("#rightner3").css("display","none");
    $("#flowinsidebar ul li:nth-child(2)").css({"background": "","color": ""});
    $("#sheet").html(sheetHtml);
  })
  $("#back2_butt").on("click",function(){
    $("#leftner2").css("display","inline-block");
    $("#leftner3").css("display","none");
    $("#rightner22").css("display","inline-block");
    $("#rightner3").css("display","none");
    $("#flowinsidebar ul li:nth-child(3)").css({"background": "","color": ""});
  })

  $("#chart_list ul li").on("click",function(){
    $("#chart_list ul li").css({"box-shadow": "","border":""});
    $("#chart_list ul li img").css({"-webkit-filter": "grayscale(100%)","filter":"grayscale(100%)"});
    $(this).css({"box-shadow":" 0px 0px 0px 5px rgba(43,135,219,0.3)","border": "solid 1px rgba(43,135,219,1)"})
    $(this).children("img").css({"-webkit-filter": "grayscale(0%)","filter":"grayscale(0%)"});
    switch($(this).attr("id")){
      case "line":
        charted.data.type = "line";
        charted.axis.rotated = false;
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "line";
        break;
      case "spline":
        charted.data.type = "spline";
        charted.axis.rotated = false;
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "spline";
        break;
      case "area":
        charted.data.type = "area";
        charted.axis.rotated = false;
        if($("#x_spline").is(":checked"))charted.data.type = "area-spline";
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "area";
        break;
        case "starea":
        charted.data.type = "area";
        charted.axis.rotated = false;
        grouping=[];
        for(var c=1;c<charted.data.columns.length;c++){
          grouping.push(charted.data.columns[c][0]);
        }
        charted.data.groups = [];
        charted.data.groups.push(grouping);
        c3.generate(charted);
        charted.ctype = "stacked-area";
        break;
      case "col":
        charted.data.type = "bar";
        charted.axis.rotated = false;
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "col";
        break;
      case "bar":
        charted.data.type = "bar";
        charted.axis.rotated = true;
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "bar";
        break;
      case "pie":
        charted.data.type = "pie";
        charted.axis.rotated = false;
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "pie";
        break;
      case "scatter":
        charted.data.type = "scatter";
        charted.axis.rotated = false;
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "scatter";
        break;
      case "donut":
        charted.data.type = "donut";
        charted.axis.rotated = false;
        charted.data.groups = [];
        c3.generate(charted);
        charted.ctype = "donut";
        break;
      case "stbar":
        charted.data.type = "bar";
        charted.axis.rotated = true;
        grouping=[];
        for(var c=1;c<charted.data.columns.length;c++){
          grouping.push(charted.data.columns[c][0]);
        }
        charted.data.groups = [];
        charted.data.groups.push(grouping);
        c3.generate(charted);
        charted.ctype = "stacked-bar";
        break;
      case "stcol":
        charted.data.type = "bar";
        charted.axis.rotated = false;
        grouping=[];
        for(var c=1;c<charted.data.columns.length;c++){
          grouping.push(charted.data.columns[c][0]);
        }
        charted.data.groups = [];
        charted.data.groups.push(grouping);
        c3.generate(charted);
        charted.ctype = "stacked-col";
        break;
    }
  })

  $(".button2").on("click",function(){
    $(".button2").css({"color":"rgba(90,90,90,0.8)","font-weight":"400","border-bottom":"0px"});
    $(this).css({"color": "#2B87DB","font-weight":"700","border-bottom":"solid 3px #2B87DB"});
    switch($(this).attr("id")){
      case "ctype_butt":
        $("#chart_list").css({"display":"inline-block"});
        $("#refine").css({"display":"none"});
        $("#annotate").css({"display":"none"});
        $("#design").css({"display":"none"});
        break;
      case "ref_butt":
        $("#refine").css({"display":"inline-block"});
        $("#chart_list").css({"display":"none"});
        $("#annotate").css({"display":"none"});
        $("#design").css({"display":"none"});
        break;
      case "annt_butt":
        $("#annotate").css({"display":"inline-block"});
        $("#chart_list").css({"display":"none"});
        $("#refine").css({"display":"none"});
        $("#design").css({"display":"none"});
        break; 
      }
  })

  //refine, automate, design inside menu click expansion code
  $('.expandable_menu > ul > p + li').slideUp('fast');
  $('.expandable_menu > ul > p').click(function () {
    $(".expandable_menu > ul > p").css({"background":"","border-bottom":""});
    $(this).css({"background":"rgba(180, 180, 180, 0.2)","border-bottom":"0px"});
    $('.expandable_menu > ul > li').parent().css({"background":""});
    $(this).parent().css({"background":"rgba(180,180,180,0.1)"});
    $('.expandable_menu > ul > li').slideUp('fast');
    $(this).parent().find('> li').slideDown("fast");
  });
  
  //x_grid on/off
  $('#x_grid').change(function() {
        if($(this).is(":checked"))charted.grid.x.show = true;
        else charted.grid.x.show = false;
        c3.generate(charted);
   });

  //y_grid on/off
  $('#y_grid').change(function() {
        if($(this).is(":checked")){charted.grid.y.show = true;}
        else{charted.grid.y.show = false;}
        c3.generate(charted);
   });

  $("select#line-type").change(function(){
    switch($(this).val()){
      case "linear":
        if(charted.data.type == "spline" || charted.data.type == "step"){charted.data.type = "line";}
        else if(charted.data.type == "area-spline" || charted.data.type == "area-step"){charted.data.type = "area";}
        break;
      case "interpolation":
        if(charted.data.type == "line" || charted.data.type == "step"){charted.data.type = "spline";}
        else if(charted.data.type == "area" || charted.data.type == "area-step"){charted.data.type = "area-spline";}
        break;
      case "step":
        if(charted.data.type == "spline" || charted.data.type == "line"){charted.data.type = "step";}
        else if(charted.data.type == "area-spline" || charted.data.type == "area"){charted.data.type = "area-step";}
        break;
    }
    c3.generate(charted);
  })

  $("select#dlabel-visible").change(function(){
    if($(this).val() == "yes")charted.data.labels = true;
    else charted.data.labels = false;
    c3.generate(charted);
  });
  $("select#dpoints-visible").change(function(){
    if($(this).val() == "yes")charted.point.show = true;
    else charted.point.show = false;
    c3.generate(charted);
  });

  $('#y_line').change(function() {
        if($(this).is(":checked"))$("#y_line_val").removeAttr('disabled');
        else $("#y_line_val").attr("disabled","disabled");
      });

  $("#y_line_val").keyup(function(){
    charted.grid.y.lines = [];
    charted.grid.y.lines.push({value:$(this).val(), text:"Line 1", position:"middle"});
    c3.generate(charted);
  })

  var index;
  $(".data_color").on("change",function(){
    index = charted.data.columns[$(this).attr("id")][0];
    charted.data.colors[index] = $(this).val();
    c3.generate(charted);
  })

  
  $("#bg_color").on("change",function(){
    $("#chart").css({"background":$(this).val()});
  })

  $("select#legend-location").change(function(){
    if($(this).val() == "bottom")charted.legend.position = "bottom";
    else if($(this).val() == "right")charted.legend.position = "right";
    else charted.legend.position = "inset";
    c3.generate(charted);
  });

  $("#reset_color").on("click",function(){
    for(index=1;index<charted.data.columns.length;index++){
      charted.data.colors[charted.data.columns[index][0]] = "";
    }
    $("#chart").css({"background":""});
    c3.generate(charted);
  })

  $("input#y_min").keyup(function(){
    charted.axis.y.min = $(this).val();
    c3.generate(charted);
  })
  $("input#y_max").keyup(function(){
    charted.axis.y.max = $(this).val();
    c3.generate(charted);
  })

  $("input#z_level").on("input", function(){
    $("#chart").css({"margin-left":(5-this.value*0.5+"%"),"width":(90+parseInt(this.value)+"%")});
    $("#chart").css({"height":360+9*parseInt(this.value)+"px"});
    $("#chart").css({"max-height":360+9*parseInt(this.value)+"px"});
    c3.generate(charted);
  });

  $("#title_val").keyup(function(){
    charted.title = $(this).val();
    $("#title").html($(this).val());
  });
  $("#desc_val").keyup(function(){
    charted.desc = $(this).val();
  });
  $('#tick-slide').on('change', function() {
    charted.axis.x.tick.count = $(this).val();
    charted.axis.x.tick.tick = true;
    c3.generate(charted);
  });

})(jQuery);