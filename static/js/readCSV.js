var rows, table=[], tableStr;


$(function () {
    $("#up_butt").change(function(){
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test($("#up_butt").val().toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    rows = e.target.result.split("\n");
                    for(var i=0; i<rows.length; i++){
                        rows[i] = rows[i].split(",");
                    }
                    rows.pop();
                    $("#sheet").data({"nRows":rows.length,"nCols":rows[0].length})
                    $("#sheet").html(fillTable(rows, rows.length, rows[0].length));
                }
                reader.readAsText($("#up_butt")[0].files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
        $("#leftner11").hide();
        $("#leftner12").show();

        $("#leftner2").css("display","inline-block");
        $("#leftner").css("display","none");

        $("#flowinsidebar ul li:nth-child(2)").css({"background": "rgba(255,144,9,1)","color": "rgba(252,252,252,1)"});
    });
});