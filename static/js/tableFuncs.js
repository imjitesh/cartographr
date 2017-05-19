function addToSheet(data){
    tableStr = "";
    row = [];
    nCols = data.split("\n")[0].split("\t").length > 4 ? data.split("\n")[0].split("\t").length : 4;
    nRows = data.split("\n").length > 16 ? data.split("\n").length : 16;
    data = data.split("\n");
    for(var i=-1; i<nRows; i++){
        tableStr += "<tr>";
        if(i==-1)true
        else {
            try{
                row = data[i].split("\t");
            }
            catch(err){
                row = [];
            }
        }
        console.log(row);
        for(var j=-1; j<nCols; j++){
            if(i==-1 && j==-1) tableStr += "<th><img src='https://image.flaticon.com/icons/svg/149/149187.svg' height=10></th>"
            if(i==-1 && j>=0) tableStr += "<th>" + String.fromCharCode(j+65) + "</th>";
            if(i>-1 && j==-1) tableStr += "<td>" + (i+1) + "</td>";
            else if(i>=0 && j>=0){ 
                if(row[j]){
                    tableStr += "<td>" + row[j] + "</td>";
                    }
                else{
                    tableStr += "<td></td>";}
                }
        }
        tableStr += "</tr>";
    }
    document.getElementById("sheet").innerHTML = tableStr;

}
function handlePaste(e) {
    var clipboardData, pastedData;

    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    // Do whatever with pasteddata
    addToSheet(pastedData);
    
}
  document.addEventListener('paste',handlePaste);