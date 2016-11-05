jQuery(function ($) {
  'use strict';

  var icon,
  iconAI,
  boxes = ["box-1", "box-2", "box-3", "box-4",
          "box-5", "box-6", "box-7", "box-8", "box-9"],
  randomBox;

  console.log(boxes["box-1"]);

  function init(){
    $(".choice div span").on("click", selectIcon);
    $(".box").on("click", placeIcon);
  };

  function selectIcon(){
    icon = $(this).text();
    icon === "X" ? iconAI = "O" : iconAI = "X";
    $(".icon-choice-modal").remove();
  };

  function placeIcon(){
    if ($(this).text() === "") {
      $(this).html("<span>" + icon + "</span>");
      var fullPlace = $(this).attr("id");
      removeFromArray(fullPlace, boxes);
      placeIconAI();
    }
  };

  function placeIconAI(){
    var randomNum = Math.floor(Math.random() * 9)
    var randomBox = boxes[randomNum];
    if (boxes.length > 0) {
      if (randomBox !== undefined) {
        $("#" + randomBox).html("<span>" + iconAI + "</span>");
        removeFromArray(randomBox, boxes);
      } else if (randomBox === undefined) {
        placeIconAI();
      }
    } else {console.log("the array is empty");}
    checkForWinner("X");
    checkForWinner("O");
  };

  function removeFromArray(item, array){
    array.splice( $.inArray(item, array), 1);
  }

  function checkForWinner(winner){
    if (
      ($("#box-1").text() === winner &&
      $("#box-2").text() === winner &&
      $("#box-3").text() === winner)
      ||
      ($("#box-4").text() === winner &&
      $("#box-5").text() === winner &&
      $("#box-6").text() === winner)
      ||
      ($("#box-7").text() === winner &&
      $("#box-8").text() === winner &&
      $("#box-9").text() === winner)
      ||
      ($("#box-1").text() === winner &&
      $("#box-5").text() === winner &&
      $("#box-9").text() === winner)
      ||
      ($("#box-1").text() === winner &&
      $("#box-4").text() === winner &&
      $("#box-7").text() === winner)
      ||
      ($("#box-2").text() === winner &&
      $("#box-5").text() === winner &&
      $("#box-8").text() === winner)
      ||
      ($("#box-3").text() === winner &&
      $("#box-6").text() === winner &&
      $("#box-9").text() === winner)
      ) {
        if (confirm(winner + " wins! Play again?")) {
          location.reload();
        }
    }
  };

  init();
});
