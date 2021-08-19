function makeGrid(event) {
  let rows = $('#inputHeight').val();  //sets the value for the number of rows entered
  let cols = $('#inputWidth').val();   //sets the value for the number of columns entered
  let grid = $('#pixelCanvas');
  event.preventDefault();  //the default action is prevented

  grid.children().remove();   //remove and reset the existing table

//nested loops to dynamically create table
  for(var i = 1; i <= rows; i++) {
    grid.append('<tr></tr>');
    for(var j = 1; j <= cols; j++) {
      $('tr:last').append('<td></td>')
    }
  }

//adding colors
  $('td').click(function addColor() {
    let color = $('#colorPicker').val();   //sets the value of the selected color
    $(this).css('background-color', color);  //sets the background color of the selected cell
  });
}


const submit = $('#submitButton');

submit.click(function() {
  makeGrid(event);  //calls the mnakeGrid() function
});
