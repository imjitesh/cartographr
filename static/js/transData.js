var myTableArray, tableData, arrayOfThisRow = [],sheet;
transpose = function(a) {
    var w = a.length ? a.length : 0,
    h = a[0] instanceof Array ? a[0].length : 0;
    if(h === 0 || w === 0) { return []; }
    var i, j, t = [];
    for(i=0; i<h; i++) {
        t[i] = [];
        for(j=0; j<w; j++){
            t[i][j] = a[j][i];
        }
    }
    return t;
};  

fillTable = function(array, nRows, nCols){
    tableStr = "";
    nRows = nRows>16 ? nRows : 16;
    for(var i=0; i<=nRows; i++){
        tableStr += "<tr>";
        for(var j=0; j<=nCols; j++){
            if(i==0 && j==0) tableStr += "<th><img src='https://image.flaticon.com/icons/svg/149/149187.svg' height=10></th>"
            if(i==0 && j!=0) tableStr += "<th>" + String.fromCharCode(j+64) + "</th>";
            if(i>0 && j==0) tableStr += "<td>" + (i) + "</td>";
            else if(i>0 && j>0){ 
                try{
                    tableStr += "<td>" + array[i-1][j-1] + "</td>";} 
                catch(err){
                    tableStr += "<td></td>";}
                }
        }
        tableStr += "</tr>";
    }
    return tableStr;
}


$(function () {
    $("#transpose_butt").on("click", function(){
        myTableArray = [];
        $("table#sheet tr").each(function() {
            arrayOfThisRow = [];
            tableData = $(this).find('td');
            if (tableData.length > 0) {
                tableData.each(function(){
                    arrayOfThisRow.push($(this).text());
                });
                arrayOfThisRow.shift();
                myTableArray.push(arrayOfThisRow);
            }
        });
        r = $("#sheet").data("nCols");
        $("#sheet").data("nCols",$("#sheet").data("nRows"));
        $("#sheet").data("nRows",r);
        myTableArray = transpose(myTableArray);
        sheet = fillTable(myTableArray,$("#sheet").data("nRows"), $("#sheet").data("nCols"));
        $("#sheet").html(sheet);
    });
});