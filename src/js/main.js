// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import Controls from "./modules/Controls";
import Menu from "./modules/Menu";

$(function () {
  var year = new Date().getFullYear();
  var placeY = document.getElementsByClassName("year");
  for (let i = 0; i < placeY.length; i++) {
    var elemY = placeY[i];
    elemY.innerHTML = year;
  }

  objectFitImages();
  Controls.init();
  Menu.init();
});
