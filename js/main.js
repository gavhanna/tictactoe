jQuery(function ($) {

  var icon,
  iconAI,
  boxes = ["box-1", "box-2", "box-3", "box-4",
          "box-5", "box-6", "box-7", "box-8", "box-9"];

  console.log(boxes[1]);

  function init(){
    $(".choice div span").on("click", selectIcon);
    $(".box").on("click", placeIcon);
  }

  function selectIcon(){
    icon = $(this).text();
    icon === "X" ? iconAI = "O" : iconAI = "X";
    $(".icon-choice-modal").remove();
  }

  function placeIcon(){
    if ($(this).text() === "") {
      $(this).html("<span>" + icon + "</span>");
      var fullPlace = $(this).attr("id");
      removeFromArray(fullPlace, boxes);
      checkForWinner();
      placeIconAI();
    }
  }

  function placeIconAI(){
    var randomNum = Math.floor(Math.random() * 9);
    var randomBox = boxes[randomNum];
    if (boxes.length > 0) {
      if (randomBox !== undefined) {
        $("#" + randomBox).html("<span>" + iconAI + "</span>");
        removeFromArray(randomBox, boxes);
      } else if (randomBox === undefined) {
        placeIconAI();
      }
    } else {console.log("the array is empty");}
  }

  function removeFromArray(item, array){
    array.splice( $.inArray(item, array), 1);
  }

  function checkForWinner(){
    if (($("#box-1").text() === "X" &&
      $("#box-2").text() === "X" &&
      $("#box-3").text() === "X") ||
      ($("#box-4").text() === "X" &&
      $("#box-5").text() === "X" &&
      $("#box-6").text() === "X") ||
      ($("#box-7").text() === "X" &&
      $("#box-8").text() === "X" &&
      $("#box-9").text() === "X") ||
      ($("#box-1").text() === "X" &&
      $("#box-5").text() === "X" &&
      $("#box-9").text() === "X") ||
      ($("#box-3").text() === "X" &&
      $("#box-5").text() === "X" &&
      $("#box-7").text() === "X") ||
      ($("#box-1").text() === "X" &&
      $("#box-4").text() === "X" &&
      $("#box-7").text() === "X") ||
      ($("#box-2").text() === "X" &&
      $("#box-5").text() === "X" &&
      $("#box-8").text() === "X") ||
      ($("#box-3").text() === "X" &&
      $("#box-6").text() === "X" &&
      $("#box-9").text() === "X")) {
        if (confirm("X" + " wins! Play again?")) {
          location.reload();
        } else {
          location.reload();
        }
    } else if (($("#box-1").text() === "O" &&
      $("#box-2").text() === "O" &&
      $("#box-3").text() === "O") ||
      ($("#box-4").text() === "O" &&
      $("#box-5").text() === "O" &&
      $("#box-6").text() === "O") ||
      ($("#box-7").text() === "O" &&
      $("#box-8").text() === "O" &&
      $("#box-9").text() === "O") ||
      ($("#box-1").text() === "O" &&
      $("#box-5").text() === "O" &&
      $("#box-9").text() === "O") ||
      ($("#box-3").text() === "O" &&
      $("#box-5").text() === "O" &&
      $("#box-7").text() === "O") ||
      ($("#box-1").text() === "O" &&
      $("#box-4").text() === "O" &&
      $("#box-7").text() === "O") ||
      ($("#box-2").text() === "O" &&
      $("#box-5").text() === "O" &&
      $("#box-8").text() === "O") ||
      ($("#box-3").text() === "O" &&
      $("#box-6").text() === "O" &&
      $("#box-9").text() === "O")){
      if (confirm("O" + " wins! Play again?")) {
        location.reload();
      } else {
        location.reload();
      }
    } else {
      if (boxes.length < 1) {
        if (confirm("Draw, soz. Play again?")) {
          location.reload();
        } else {
          location.reload();
        }
      }
    }
  }

  init();
});
