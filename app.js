var spyNumber = 0;
$('document').ready(function(){
  $('#buttons').on("click", ".spyAdd", addSpy);
  $('#spyHome').on("click", ".change", changeStatus);
  $("#spyHome").on("click", ".remove", removeSpy);
});

function addSpy(){
  $('#spyHome').append("<div class='spy'>" + spyNumber + "<button class='change'>Change</button><button class='remove'>Remove</button></div>");
  spyNumber++;
}
function changeStatus(){
  console.log($(this).parent().css("background-color"));
  if(($(this).parent().css("background-color"))=="rgb(255, 255, 0)"){
    $(this).parent().css("background-color", "red");
  }
  else{
    $(this).parent().css("background-color", "yellow");
  }
}
function removeSpy(){
$(this).parent().remove();
}
