jQuery(function ($) {
  'use strict';

  var icon,
  iconAI,
  boxes = ["box-1", "box-2", "box-3", "box-4",
          "box-5", "box-6", "box-7", "box-8", "box-9"],
  randomBox;

  console.log(boxes["box-1"]);

  function events(){
    $(".choice div span").on("click", selectIcon);
    $(".box").on("click", placeIcon);
  };

  function selectIcon(){
    icon = $(this).text();
    icon === "X" ? iconAI = "O" : iconAI = "X";
    $(".icon-choice-modal").remove();
    console.log(iconAI);
  };

  function placeIcon(){
    $(this).html("<span>" + icon + "</span>");
    var fullPlace = $(this).attr("id");
    removeFromArray(fullPlace, boxes);
    placeIconAI();
  };

  function placeIconAI(){
    var randomBox = boxes[Math.floor(Math.random() * 9)];
    if (boxes[randomBox]) {
      $("#" + boxes[randomBox]).html("<span>" + icon + "</span>");
    }
    removeFromArray(randomBox, boxes);
    console.log(randomBox);
  };

  function removeFromArray(item, array){
    array.splice( $.inArray(item, array), 1);
  }

  function init(){
    events();
  };


  init();
});
