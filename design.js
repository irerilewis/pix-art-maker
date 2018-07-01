// When size is submitted by the user, call makeGrid()

function makeGrid(height,width,table){
 for(var r=0;r<height;r++){
    var newRow = table.insertRow(r);
      for(var c =0;c<width;c++){
         newRow.insertCell(c);
      }
 }
}

$('#sizePicker').submit(function(e){
 e.preventDefault();
 var rows = document.getElementById('inputHeight').value;
 var cells = document.getElementById('inputWeight').value;
 var table = document.getElementById('pixelCanvas');
 makeGrid(rows,cells,table);
});

$('body table#pixelCanvas').on('click','tr td',function(e){
 var color = document.getElementById('colorPicker').value;
   $(this).css('background-color',color);
});
